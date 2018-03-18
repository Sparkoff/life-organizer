<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use ApiResponse;

use App\Helpers\DateHelper;

use App\Models\Todo;


class TodoController extends Controller
{

	public function read($category)
    {
        $todoElements = Todo::where([
			['category', $category],
			['deleted', false]
		])->get();

        return ApiResponse::getList($todoElements, count($todoElements), 1, count($todoElements);
    }

    public function readById($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return ApiResponse::notFound("No element matching category:{$category} and id:{$id}.");
        }

        return ApiResponse::get($todoElement);
    }

    public function create(Request $request, $category)
    {
		$inputs = $this->filterInputs($request, [
			'title',
			'comment',
			'due_at'
		]);

        if (empty($inputs)) {
            return ApiResponse::missingParameters();
        }

		$sanity = $this->sanityCheck($inputs, [
			'title' => "todo-title:required|max",
			'comment' => "todo-comment:required",
			'due_at' => "todo-due_at:regex"
		]);

		if (is_array($sanity)) {
            return ApiResponse::validationError($sanity);
        } else {
            $result = Todo::create(array_merge(
				$inputs,
				['category' => $category]
			));

            return ApiResponse::post("/todos/{$category}/{$result->id}");
        }
    }

    public function update(Request $request, $category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return ApiResponse::notFound("No element matching category:{$category} and id:{$id}.");
        }

		$inputs = $this->filterInputs($request, [
			'title',
			'comment',
			'done',
			'deleted',
			'due_at',
			'done_at',
			'deleted_at'
		]);

        if (empty($inputs)) {
            return ApiResponse::missingParameters();
        }

		$sanity = $this->sanityCheck($inputs, [
			'title' => "todo-title:max",
			'done' => "todo-done:boolean",
            'deleted' => "todo-deleted:boolean",
			'due_at' => "todo-due_at:regex",
			'done_at' => "todo-done_at:regex",
            'deleted_at' => "todo-deleted_at:regex"
		]);

		if (is_array($sanity)) {
            return ApiResponse::validationError($sanity);
        } else {
            foreach ($inputs as $key => $value) {
                $todoElement[$key] = $value;
            }
            $todoElement->updated_at = DateHelper::currentDate();
            $todoElement->update();

            return ApiResponse::patch($todoElement);
        }
    }

    public function done(Request $request, $category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return ApiResponse::notFound("No element matching category:{$category} and id:{$id}.");
        }

        $currentDate = DateHelper::currentDate();

        $todoElement->done = 1;
        $todoElement->done_at = $currentDate;
		$todoElement->updated_at = $currentDate;
        $todoElement->update();

        return ApiResponse::patchNoResponse();
    }

    public function delete($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return ApiResponse::notFound("No element matching category:{$category} and id:{$id}.");
        }

        $currentDate = DateHelper::currentDate();

        $todoElement->deleted = 1;
        $todoElement->deleted_at = $currentDate;
		$todoElement->updated_at = $currentDate;
        $todoElement->update();

        return ApiResponse::delete();
    }

    public function remove($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category]
        ])->first();

        if (empty($todoElement)) {
            return ApiResponse::notFound("No element matching category:{$category} and id:{$id}.");
        }

        $todoElement->delete();

        return ApiResponse::delete();
    }

}
