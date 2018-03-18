<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;


class ApiResponseServiceProvider extends ServiceProvider
{
    /**
     * Register response helper services.
     *
     * @return void
     */
    public function register()
    {
		App::bind('apiresponse', function() {
            return new \App\Http\ApiResponse;
        });
    }

    /**
     * Boot the response helper services for the application.
     *
     * @return void
     */
    public function boot()
    {

    }
}
