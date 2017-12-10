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
    return "Hello World!";
});

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


/*
|--------------------------------------------------------------------------
| Dev Routes
|--------------------------------------------------------------------------
|
|
*/

$router->group(['prefix' => 'dev'], function () use ($router) {
	$router->get('php', function () use ($router) {
	    return phpinfo();
	});
	$router->get('version', function () use ($router) {
	    return $router->app->version();
	});
	$router->get('key', function() {
	    return str_random(32);
	});
});
