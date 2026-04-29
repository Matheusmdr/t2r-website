<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductCategory;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        // Cria a categoria "Kits PPK"
        $categoryL1L2 = ProductCategory::firstOrCreate(
            ['slug' => 'kits-ppk-l1-l2'],
            ['title' => 'Kit L1/L2', 'description' => 'Kits PPK dupla frequência para drones DJI', 'is_active' => true]
        );

        $categoryL1 = ProductCategory::firstOrCreate(
            ['slug' => 'kits-ppk-l1'],
            ['title' => 'Kit L1', 'description' => 'Kits PPK frequência única para drones DJI', 'is_active' => true]
        );

        $sharedSpecsL1L2 = [
            'antena' => 'Helicoidal Multi-GNSS L1/L2 (removível)',
            'constelacoes' => 'GPS + GLONASS + GALILEO + BEIDOU',
            'frequencias' => '2 (L1 e L2)',
            'canais' => '184',
            'armazenamento' => '32 GB',
            'consumo' => '130 mA em 5 Vcc (menos de 1 W)',
            'linhaBase' => 'Até 25 km (máxima recomendada)',
            'tempoFixo' => 'Cerca de 1 min em linhas curtas; Até 5 min em linhas longas',
        ];

        $drones = [
            [
                'product_category_id' => $categoryL1L2->id,
                'title' => 'DJI Mini 4 Pro',
                'slug' => 'ppk-dji-mini-4-pro',
                'short_description' => 'Kit PPK L1/L2 para DJI Mini 4 Pro — mapeamento de alta precisão em drone ultracompacto.',
                'cover_image' => '/produtos/drones/dji-mini-4-pro.png',
                'tags' => ['DJI', 'Mini 4 Pro', 'PPK', 'L1/L2'],
                'tech_specs' => $sharedSpecsL1L2,
                'is_active' => true,
            ],
            [
                'product_category_id' => $categoryL1L2->id,
                'title' => 'DJI Mini 3',
                'slug' => 'ppk-dji-mini-3',
                'short_description' => 'Kit PPK L1/L2 para DJI Mini 3 — precisão milimétrica em formato sub-250g.',
                'cover_image' => '/produtos/drones/dji-mini-4-pro.png',
                'tags' => ['DJI', 'Mini 3', 'PPK', 'L1/L2'],
                'tech_specs' => $sharedSpecsL1L2,
                'is_active' => true,
            ],
            [
                'product_category_id' => $categoryL1L2->id,
                'title' => 'DJI Air 2S',
                'slug' => 'ppk-dji-air-2s',
                'short_description' => 'Kit PPK L1/L2 para DJI Air 2S — sensor de 1" com georreferenciamento centimétrico.',
                'cover_image' => '/produtos/drones/dji-air-2s.png',
                'tags' => ['DJI', 'Air 2S', 'PPK', 'L1/L2'],
                'tech_specs' => $sharedSpecsL1L2,
                'is_active' => true,
            ],
            [
                'product_category_id' => $categoryL1L2->id,
                'title' => 'DJI Mavic 2 Pro',
                'slug' => 'ppk-dji-mavic-2-pro',
                'short_description' => 'Kit PPK L1/L2 para DJI Mavic 2 Pro — câmera Hasselblad com precisão geodésica.',
                'cover_image' => '/produtos/drones/dji-air-2s.png',
                'tags' => ['DJI', 'Mavic 2 Pro', 'PPK', 'L1/L2'],
                'tech_specs' => $sharedSpecsL1L2,
                'is_active' => true,
            ],
            [
                'product_category_id' => $categoryL1L2->id,
                'title' => 'DJI Phantom 4 ADV/PRO/PROv2',
                'slug' => 'ppk-dji-phantom-4',
                'short_description' => 'Kit PPK L1/L2 para DJI Phantom 4 — o workhorse de mapeamento profissional.',
                'cover_image' => '/produtos/drones/dji-phantom-4.png',
                'tags' => ['DJI', 'Phantom 4', 'PPK', 'L1/L2'],
                'tech_specs' => $sharedSpecsL1L2,
                'is_active' => true,
            ],
            [
                'product_category_id' => $categoryL1->id,
                'title' => 'DJI Mini 2',
                'slug' => 'ppk-dji-mini-2',
                'short_description' => 'Kit PPK L1 para DJI Mini 2 — entrada acessível no mapeamento de precisão.',
                'cover_image' => '/produtos/drones/dji-mini-4-pro.png',
                'tags' => ['DJI', 'Mini 2', 'PPK', 'L1'],
                'tech_specs' => [
                    'antena' => 'Helicoidal Multi-GNSS L1 (removível)',
                    'constelacoes' => 'GPS + GLONASS + GALILEO + BEIDOU',
                    'frequencias' => '1 (L1)',
                    'canais' => '72',
                    'armazenamento' => '32 GB',
                    'consumo' => '130 mA em 5 Vcc (menos de 1 W)',
                    'linhaBase' => 'Até 5 km (máxima recomendada)',
                    'tempoFixo' => '5 minutos',
                ],
                'is_active' => true,
            ],
        ];

        foreach ($drones as $drone) {
            Product::firstOrCreate(
                ['slug' => $drone['slug']],
                $drone
            );
        }
    }
}
