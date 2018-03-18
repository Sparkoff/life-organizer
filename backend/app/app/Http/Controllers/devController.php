<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use ApiResponse;


class DevController extends Controller
{

	public function randomKey()
    {
		return ApiResponse::get(['message' => str_random(32)]);
    }

}
