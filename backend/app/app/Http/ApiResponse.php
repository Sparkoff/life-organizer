<?php

namespace App\Http;


class ApiResponse
{

	private function jsonApiResponse($success, $data, $code, $header = []) {
		return response()->json([
			'status' => ($success ? 'success' : 'failed'),
			'payload' => $data
		], $code, $header);
	}

	/*
	|--------------------------------------------------------------------------
	| Valid API Responses
	|--------------------------------------------------------------------------
	|
	|
	*/

	public function get($data) {
		return $this->jsonApiResponse(true, $data, 200);
	}

	public function getList($data, $totalPages, $page, $perPage) {
		$headers = [
			'Pagination-Count' => $totalPages,
			'Pagination-Page' => $page,
			'Pagination-Limit' => $perPage
		];

		return $this->jsonApiResponse(true, $data, 200, $headers);
	}

	public function post($location) {
		$headers = [
			'Location' => $location
		];

		return $this->jsonApiResponse(true, ['message' => config("apiResponse.elementCreated")], 201, $headers);
	}

	public function patch($data) {
		return $this->jsonApiResponse(true, $data, 200);
	}

	public function patchNoResponse() {
		return $this->jsonApiResponse(true, "", 204);
	}

	public function delete() {
		return $this->jsonApiResponse(true, ['message' => config("apiResponse.done")], 204);
	}


	/*
	|--------------------------------------------------------------------------
	| Invalid API Responses
	|--------------------------------------------------------------------------
	|
	|
	*/

	public function missingParameters() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.noParameters")], 400);
	}

	public function validationError($errors) {
		return $this->jsonApiResponse(false, [
			'message' => config("apiResponse.validationError"),
			'error' => $errors
		], 400);
	}

	public function notFound($message = "") {
		$message = $message != "") ? $message : config("apiResponse.notExist");
		return $this->jsonApiResponse(false, ['message' => $message)], 404);
	}

	public function conflict($message) {
		return $this->jsonApiResponse(false, ['message' => $message], 409);
	}

	public function customError($error, $code) {
		dd($error);
		return $this->jsonApiResponse(false, ['message' => $error], $code);
	}


	/*
	|--------------------------------------------------------------------------
	| Service errors
	|--------------------------------------------------------------------------
	|
	|
	*/

	public function unauthorized() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.unauthorized")], 401);
	}

	public function forbidden() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.forbidden")], 403);
	}

	public function tooManyRequest() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.tooManyRequest")], 429);
	}

	public function internalServerError() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.internalServerError")], 500);
	}

	public function serviceUnavailable() {
		return $this->jsonApiResponse(false, ['message' => config("apiResponse.serviceUnavailable")], 503);
	}

}
