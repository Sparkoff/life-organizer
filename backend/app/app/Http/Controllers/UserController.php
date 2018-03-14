<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Helpers\DateHelper;

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

        return response()
				->json($users, 200)
				->header('Pagination-Count', count($users))
			    ->header('Pagination-Page', 1)
			    ->header('Pagination-Limit', count($users));
    }

    public function readById($id)
    {
        $user = User::where([
			['id', $id],
			['deleted', false]
		])->first();

        if (empty($user)) {
            return $this->clientError("No user matching id:{$id}.", 404);
        }

        return response()->json($user, 200);
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
            return $this->clientError("Validation error: no parameter given.", 400);
        }

        $sanity = $this->sanityCheck($inputs, [
			'email' => "user-email:required|email|max",
			'password' => "user-password:required|confirmed|min|regex",
			'name' => "user-name:nullable|max"
		]);

        if (is_array($sanity)) {
            return $this->clientError($sanity, 400);
        } else {
            if (User::where([
                ['email', $inputs['email']],
                ['deleted', false]
            ])->exists()) {
                return $this->clientError("User with email:{$inputs['email']} already exist.", 409);
            }

            unset($inputs['password_confirmation']);
            $inputs['password'] = password_hash($inputs['password'], PASSWORD_DEFAULT);

            $result = User::create($inputs);

            return response()
                    ->json(['message' => "The element was created successfully."], 201)
                    ->header('Location', "/users/{$result->id}");
        }
    }

}
