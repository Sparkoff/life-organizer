<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

use App\Helpers\DateHelper;

use App\Models\User;

use Log;
use DateTime;
use DateTimezone;


class UserController extends Controller
{

	public function read()
    {
        $userElements = User::all();

        return response()
				->json($userElements, 200)
				->header('Pagination-Count', count($userElements))
			    ->header('Pagination-Page', 1)
			    ->header('Pagination-Limit', count($userElements));
    }

    public function readById($id)
    {
        $userElement = User::where([
			['id', $id],
			['deleted', false]
		])->first();

        if (empty($userElement)) {
            return response()->json(['message' => "No user matching id:$id."], 404);
        }

        return response()->json($userElement, 200);
    }

    public function create(Request $request)
    {
		$inputs = [];
        if ($request->input('email') != null) {
            $inputs['email'] = $request->input('email');
        }
        if ($request->input('password') != null) {
            $inputs['password'] = $request->input('password');
        }
        if ($request->input('password_confirmation') != null) {
            $inputs['password_confirmation'] = $request->input('password_confirmation');
        }
        if ($request->input('name') != null) {
            $inputs['name'] = $request->input('name');
        }

        if (empty($inputs)) {
            return response()->json(['message' => "Validation error: no parameter given."], 400);
        }

        $rules = [
			'email' => 'required|email|max:30',
            'password' => 'required|confirmed|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@#&!?.:=+-*<>$%§]).+$/',
            'name' => 'nullable|max:50'
        ];
        $messages = [
			'email.required' => 'email is required.',
			'email.email' => 'email should match email pattern.',
			'email.max' => 'email must not exceed 20 characters.',
			'password.required' => 'password is required.',
			'password.confirmed' => 'password confirmation do not match.',
            'password.min' => 'password should use at least 8 characters.',
            'password.regex' => 'password contain at least one upper/lowercase letter, one number and one special char among _@#&!?.:=+-*<>$%§.',
			'name.max' => 'name must not exceed 50 characters.'
        ];

        $validator = \Validator::make($inputs, $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'message' => "Validation errors in your request",
                'errors' => $validator->errors()->all()
            ], 400);
        } else {
            $userElement = User::where('email', $inputs['email'])->first();

            if (!empty($userElement)) {
                return response()->json(['message' => 'User with email:' . $inputs['email'] . ' already exist.'], 409);
            }

            $result = User::create($inputs);

            return response()
                    ->json(['message' => "The element was created successfully."], 201)
                    ->header('Location', "/users/$result->id");
        }
    }

    public function createToken(Request $request)
	{
		$inputs = [];
        /*if ($request->input('email') != null) {
            $inputs['email'] = $request->input('email');
        } else {
            return response()->json(['message' => "Missing email."], 400);
        }
        if ($request->input('password') != null) {
            $inputs['password'] = $request->input('password');
        } else {
            return response()->json(['message' => "Missing password."], 400);
        }*/
		$inputs['email'] = "admin@gmail.com";
		$inputs['password'] = "$2y$10$9h7NibONlaer21xJicYg4.en5FNWgnkv7RYZULVfmTpGTxclZo7ma";

        $userElement = User::where([
			['email', $inputs['email']],
			//['password', $inputs['password']],
			['deleted', false]
		])->first();

		Log::info('Showing user: '.$userElement->id);
		Log::info('Password hashed: '.$inputs['password']);
		Log::info('Password verification: '.password_verify('adminPass', $inputs['password']) ? 'true' : 'false');

        if (empty($userElement)) {
            return response()->json(['message' => "No user matching email and password."], 404);
        }

    	Log::info('Token: '.sha1("toto", true));
		Log::info('date: '.(new DateTime())->format("Y-m-d H:i:s"));
        Log::info('date UTC: '.(new DateTime(null, new DateTimezone("UTC")))->format("Y-m-d H:i:s"));
        Log::info('date Paris: '.(new DateTime(null, new DateTimezone("Europe/Paris")))->format("Y-m-d H:i:s"));
		$date = (new DateTime(null, new DateTimezone("UTC")))->format("Y-m-d H:i:s");
		$dateUTC = new DateTime($date);
		$dateUTC->setTimezone(new DateTimezone("Europe/Paris"));
        Log::info('date UTC to Paris: '.$dateUTC->format("Y-m-d H:i:s"));

		/*$token = [
			'token' => sha1("toto", true),
			'expire_at' => ??
		];*/

        return response()->json($userElement, 200);
    }

    public function deleteToken($id) {

    }

}
