<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

use App\Models\Token;

use Log;
use DateTime;
use DateInterval;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        $this->app['auth']->viaRequest('api', function ($request) {
			if ($request->header('authorization') == null) {
				return null;
			}

			$token = Token::where('token', $request->header('authorization'))
					->where('deleted', false)
					->where('expire_at', '>', (new DateTime())->format("Y-m-d H:i:s"))
					->first();

			if (!$token) {
				return null;
			}

			$token->expire_at = (new DateTime())->add(new DateInterval('PT15M'))->format("Y-m-d H:i:s");
			$token->updated_at = (new DateTime())->format("Y-m-d H:i:s");
			$token->save();

			return $token->user()->first();
        });
    }
}
