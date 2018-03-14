<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Helpers\DateHelper;

use App\Models\User;
use App\Models\Token;

use Log;
use DateTime;
use DateInterval;
use DateTimezone;


class TokenController extends Controller
{

    public function create(Request $request)
	{
        $inputs = $this->filterInputs($request, [
			'email',
			'password'
		]);

        if (empty($inputs)) {
            return $this->clientError("Validation error: no parameter given.", 400);
        }

        $sanity = $this->sanityCheck($inputs, [
			'email' => "user-email:required|email|max",
			'password' => "user-password:required|min|regex"
		]);

		if (is_array($sanity)) {
            return $this->clientError($sanity, 400);
        } else {
            $user = User::where([
    			['email', $inputs['email']],
    			['deleted', false]
    		])->first();

            if (empty($user) || !password_verify($inputs['password'], $user->password)) {
                return $this->clientError("No user matching email and password.", 404);
            }

			$result = $user->tokens()->create([
    			'token' => Token::makeHash($user->email),
    			'expire_at' => (new DateTime())->add(new DateInterval('PT15M'))->format("Y-m-d H:i:s")
    		]);

            return response()->json([
    			'email' => $user->email,
    			'token' => $result->token,
    			'expire_at' => $result->expire_at
    		], 200);
        }

		// Log::info('Showing user: '.$user->id);
		// Log::info('Password hashed: '.$inputs['password']);
		// Log::info('Password verification: '.password_verify('adminPass', $inputs['password']) ? 'true' : 'false');

    	// Log::info('Token: '.sha1("toto", true));
		// Log::info('date: '.(new DateTime())->format("Y-m-d H:i:s"));
        // Log::info('date UTC: '.(new DateTime(null, new DateTimezone("UTC")))->format("Y-m-d H:i:s"));
        // Log::info('date Paris: '.(new DateTime(null, new DateTimezone("Europe/Paris")))->format("Y-m-d H:i:s"));
		// $date = (new DateTime(null, new DateTimezone("UTC")))->format("Y-m-d H:i:s");
		// $dateUTC = new DateTime($date);
		// $dateUTC->setTimezone(new DateTimezone("Europe/Paris"));
        // Log::info('date UTC to Paris: '.$dateUTC->format("Y-m-d H:i:s"));
    }

    public function delete(Request $request) {
		$token = Token::where('token', $request->header('authorization'))->first();
		$token->delete = true;
		$token->updated_at = (new DateTime())->format("Y-m-d H:i:s");
		$token->deleted_at = (new DateTime())->format("Y-m-d H:i:s");
		$token->save();

        return response()->json(['message' => "Done."], 200);
    }

}
