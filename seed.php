<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = \App\Models\User::firstOrCreate(
    ['email' => 'admin@admin.com'],
    ['name' => 'Admin', 'password' => \Hash::make('12345678'), 'role' => 'owner']
);
echo 'User count: ' . \App\Models\User::count() . "\n";
echo 'First user email: ' . $user->email . "\n";
