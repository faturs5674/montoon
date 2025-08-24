<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movies;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://via.placeholder.com/300x200?text=Shawshank+Redemption',
                'rating' => 9.3,
                'is_featured' => 1
            ],
            [
                'name' => 'Inception',
                'slug' => 'inception',
                'category' => 'Science Fiction',
                'video_url' => 'https://www.youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://via.placeholder.com/300x200?text=Inception',
                'rating' => 8.8,
                'is_featured' => 0
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => 'https://via.placeholder.com/300x200?text=The+Dark+Knight',
                'rating' => 9.0,
                'is_featured' => 0
            ],
        ];

        Movies::insert($movies);
    }
}
