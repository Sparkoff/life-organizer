<?php

namespace App\Models;

use App\Models\Model;


class Todo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
		'category',
		'title',
		'due_at',
		'done_at',
		'comment'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
