<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    // Verifica permissão antes de qualquer ação
    private function ensureOwner()
    {
        if (auth()->user()->role !== 'owner') {
            abort(403, 'Acesso não autorizado.');
        }
    }

    public function index()
    {
        $this->ensureOwner();

        return Inertia::render('admin/users/index', [
            'users' => User::latest()->get()
        ]);
    }

    public function create()
    {
        $this->ensureOwner();
        return Inertia::render('admin/users/create');
    }

    public function store(Request $request)
    {
        $this->ensureOwner();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:owner,adm',
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()->route('admin.users.index')->with('message', 'Usuário criado com sucesso!');
    }

    public function edit(User $user)
    {
        $this->ensureOwner();
        return Inertia::render('admin/users/edit', [
            'user' => $user
        ]);
    }

    public function update(Request $request, User $user)
    {
        $this->ensureOwner();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email', Rule::unique('users')->ignore($user->id)],
            'role' => 'required|in:owner,adm',
            'password' => 'nullable|string|min:8', // Senha opcional na edição
        ]);

        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role' => $validated['role'],
        ];

        // Só atualiza a senha se foi enviada
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        return redirect()->back()->with('message', 'Usuário atualizado com sucesso!');
    }

    public function destroy(User $user)
    {
        $this->ensureOwner();

        if ($user->id === auth()->id()) {
            return redirect()->back()->withErrors(['error' => 'Você não pode deletar a si mesmo.']);
        }

        $user->delete();

        return redirect()->back()->with('message', 'Usuário removido com sucesso!');
    }
}
