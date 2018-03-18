<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

		DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
    			'password' => password_hash('adminPass&1', PASSWORD_DEFAULT),
    			'deleted' => 0,
    			'created_at' => '2017-12-25 14:32:05',
    			'updated_at' => '2018-01-02 12:02:45',
                'deleted_at' => '0000-00-00 00:00:00'
            ],[
                'name' => 'admin2',
                'email' => 'admin2@gmail.com',
    			'password' => password_hash('admin2Pass&1', PASSWORD_DEFAULT),
    			'deleted' => 0,
    			'created_at' => '2017-12-26 15:22:42',
    			'updated_at' => '2017-12-30 04:52:25',
                'deleted_at' => '0000-00-00 00:00:00'
            ],[
                'name' => 'toto',
                'email' => 'toto@gmail.com',
    			'password' => password_hash('totoPass&1', PASSWORD_DEFAULT),
    			'deleted' => 0,
    			'created_at' => '2017-01-01 17:20:33',
    			'updated_at' => '0000-00-00 00:00:00',
                'deleted_at' => '0000-00-00 00:00:00'
            ],[
                'name' => 'deleted',
                'email' => 'deleted@gmail.com',
    			'password' => password_hash('deletedPass&1', PASSWORD_DEFAULT),
    			'deleted' => 1,
    			'created_at' => '2018-01-01 18:30:17',
    			'updated_at' => '2018-01-02 16:31:22',
                'deleted_at' => '2018-01-02 16:31:22'
            ]
        ]);

		$this->command->info('User seeds finished.');
    }
}
