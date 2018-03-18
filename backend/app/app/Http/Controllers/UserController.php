<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use ApiResponse;

use App\Models\User;

use Log;


class UserController extends Controller
{

	public function read()
    {
        //$users = User::with('tokens')->find(1);
        //$users = User::find(1)->tokens;
        //$users = User::all();
		$users = [
            'with_select' => User::with(['tokens' => function ($query) {
				$query->select('id', 'user_id', 'token', 'expire_at');
			}])->select('id', 'email', 'name')->get(),
			'with_where_token' => User::with(['tokens' => function ($query) {
				$query->where('token', 'HgvFkJpGneCcLMnX.GQG');
			}])->select('id', 'email', 'name')->get(),
			'with_whereHas' => User::whereHas('tokens', function ($q) {
				$q->where('token', 'HgvFkJpGneCcLMnX.GQG');
			})->where('email', 'admin@gmail.com')->select('id', 'email', 'name')->first(),
            'with_find' => User::with('tokens')->find(1),
            'with_get' => User::with('tokens')->get(),
    		//'with_where' => User::with('tokens')->where('tokens.token', 'HgvFkJpGneCcLMnX.GQG')->toSql(),
            'find_allToken' => User::find(1)->tokens,
            'find_token' => User::find(1)->tokens()->where('token', 'HgvFkJpGneCcLMnX.GQG')->first(),
            'find_token1' => User::find(1)->tokens()->where('token', 'HgvFkJpGne4cLMnX.GQG')->first(),
			'find_token2' => User::find(2)->tokens()->where('token', 'HgvFkJpGneCcLMnX.GQG')->first(),
			'all' => User::all()
		];

        return ApiResponse::getList($users, count($users), 1, count($users));
    }

    public function readById($id)
    {
        $user = User::where([
			['id', $id],
			['deleted', false]
		])->first();

        if (empty($user)) {
            return ApiResponse::notFound("No user matching id:{$id}.");
        }

        return ApiResponse::get($user);
    }

    public function create(Request $request)
    {
		$inputs = $this->filterInputs($request, [
			'email',
			'password',
			'password_confirmation',
			'name'
		]);

        if (empty($inputs)) {
            return ApiResponse::missingParameters();
        }

        $sanity = $this->sanityCheck($inputs, [
			'email' => "user-email:required|email|max",
			'password' => "user-password:required|confirmed|min|regex",
			'name' => "user-name:nullable|max"
		]);

        if (is_array($sanity)) {
            return ApiResponse::validationError($sanity);
        } else {
            if (User::where([
                ['email', $inputs['email']],
                ['deleted', false]
            ])->exists()) {
                return ApiResponse::conflict("User with email:{$inputs['email']} already exist.");
            }

            unset($inputs['password_confirmation']);
            $inputs['password'] = password_hash($inputs['password'], PASSWORD_DEFAULT);

            $result = User::create($inputs);

            return ApiResponse::post("/users/{$result->id}");
        }
    }

}
