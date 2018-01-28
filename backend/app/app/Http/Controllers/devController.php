<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class DevController extends Controller
{

	public function randomKey()
    {
		return response()->json(['message' => str_random(32)], 200);
    }

}
