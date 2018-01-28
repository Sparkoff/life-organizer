<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return response()->json(['message' => "Life-Organizer API. Authentication required for full-access services."], 200);
});


$router->get('users','UserController@read');
$router->post('users','UserController@create');
$router->get('token','UserController@createToken');

$router->group(['middleware' => 'auth'], function () use ($router) {

	$router->group(
		['prefix' => 'users'],
		function () use ($router) {
			$router->get('{id:[1-9]\d*}','UserController@readById');
			// $router->patch('{id:[1-9]\d*}','UserController@update');
			// $router->delete('{id:[1-9]\d*}','UserController@delete');
			// $router->delete('{id:[1-9]\d*}/remove','UserController@remove');
		}
	);

	$todoCategories = [
		"house",
		"maintenance",
		"stock",
		"culture",
		"entertainment",
		"global"
	];
	$router->group(
		['prefix' => 'todos/{category:' . implode('|', $todoCategories) . '}'],
		function () use ($router) {
			$router->get('','TodoController@read');
			$router->get('{id:[1-9]\d*}','TodoController@readById');
			$router->post('','TodoController@create');
			$router->patch('{id:[1-9]\d*}','TodoController@update');
			$router->patch('{id:[1-9]\d*}/done','TodoController@done');
	        $router->delete('{id:[1-9]\d*}','TodoController@delete');
			$router->delete('{id:[1-9]\d*}/remove','TodoController@remove');
		}
	);

});


/*
|--------------------------------------------------------------------------
| Dev Routes
|--------------------------------------------------------------------------
|
|
*/

$router->group(['prefix' => 'dev'], function () use ($router) {

	$router->get('php', function () use ($router) {
		phpinfo();
	});
	$router->get('version', function () use ($router) {
		return response()->json(['message' => $router->app->version()], 200);
	});
	$router->get('key','DevController@randomKey');

});
