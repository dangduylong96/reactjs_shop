<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'=>'Đặng Duy Long',
            'email'=>'admin@gmail.com',
            'password'=>bcrypt('1'),
            'type'=>1
        ]);
    }
}