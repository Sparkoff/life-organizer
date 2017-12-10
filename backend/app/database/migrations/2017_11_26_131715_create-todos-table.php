<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');

			$table->string('category', 20);
			$table->string('title', 100);

            $table->boolean('done');
			$table->boolean('deleted');

			$table->dateTime('created_at');
			$table->dateTime('updated_at');
			$table->dateTime('due_at');
			$table->dateTime('done_at');
			$table->dateTime('deleted_at');

			$table->text('comment');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
