php artisan make:migration create_users_table --create=users
php artisan make:migration add_votes_to_users_table --table=users

php artisan migrate
php artisan migrate:rollback


php artisan make:seeder UsersTableSeeder

php artisan db:seed



sudo mysqldump --databases life_organizer > db.sql
