<?php

namespace App\Models;

use App\Models\Model;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;


use DateTime;


class Token extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
		'token',
		'expire_at'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];


	// DEFINE RELATIONSHIPS
	public function user() {
        return $this->belongsTo('App\Models\User');
    }


	// HELPERS
	public static function makeHash($email) {
		$hash = "";
		do {
			$hash = substr(password_hash($email.(new DateTime())->getTimestamp(), PASSWORD_DEFAULT), -20);
		} while (Token::where('token', $hash)->exists());
		return $hash;
	}
}
