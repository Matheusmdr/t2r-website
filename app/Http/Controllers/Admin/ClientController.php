<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/clients/index', [
            'clients' => Client::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/clients/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'link' => 'nullable|url|max:255',
            'logo' => 'required|image|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'is_active' => 'boolean',
        ]);

        $path = '/storage/' . $request->file('logo')->store('clients', 'public');

        Client::create([
            'name' => $validated['name'],
            'link' => $validated['link'],
            'logo' => $path,
            'is_active' => $validated['is_active'] ?? true,
        ]);

        return redirect()->route('admin.clients.index')->with('message', 'Cliente adicionado com sucesso!');
    }

    public function edit(Client $client)
    {
        return Inertia::render('admin/clients/edit', [
            'client' => $client,
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'link' => 'nullable|url|max:255',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'is_active' => 'boolean',
        ]);

        $data = [
            'name' => $validated['name'],
            'link' => $validated['link'],
            'is_active' => $validated['is_active'] ?? true,
        ];

        if ($request->hasFile('logo')) {
            if ($client->logo) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $client->logo));
            }
            $data['logo'] = '/storage/' . $request->file('logo')->store('clients', 'public');
        }

        $client->update($data);

        return redirect()->route('admin.clients.index')->with('message', 'Cliente atualizado com sucesso!');
    }

    public function deleteClientImage(Client $client)
    {
        if ($client->logo) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $client->logo));
            $client->logo = '';
            $client->save();
        }

        return redirect()->back()->with('message', 'Logo removido com sucesso!');
    }

    public function destroy(Client $client)
    {
        if ($client->logo) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $client->logo));
        }

        $client->delete();

        return redirect()->back()->with('message', 'Cliente removido com sucesso!');
    }
}
