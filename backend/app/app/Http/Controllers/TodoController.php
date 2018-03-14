<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

        return response()
				->json($todoElements, 200)
				->header('Pagination-Count', count($todoElements))
			    ->header('Pagination-Page', 1)
			    ->header('Pagination-Limit', count($todoElements));
    }

    public function readById($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return $this->$this->clientError("No element matching category:{$category} and id:{$id}.", 404);
        }

        return response()->json($todoElement, 200);
    }

    public function create(Request $request, $category)
    {
		$inputs = $this->filterInputs($request, [
			'title',
			'comment',
			'due_at'
		]);

        if (empty($inputs)) {
            return $this->clientError("Validation error: no parameter given.", 400);
        }

		$sanity = $this->sanityCheck($inputs, [
			'title' => "todo-title:required|max",
			'comment' => "todo-comment:required",
			'due_at' => "todo-due_at:regex"
		]);

		if (is_array($sanity)) {
            return $this->clientError($sanity, 400);
        } else {
            $result = Todo::create(array_merge(
				$inputs,
				['category' => $category]
			));

            return response()
                    ->json(['message' => "The element was created successfully."], 201)
                    ->header('Location', "/todos/{$category}/{$result->id}");
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
            return $this->clientError("No element matching category:{$category} and id:{$id}.", 404);
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
            return $this->clientError("Validation error: no parameter given.", 400);
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
            return $this->clientError($sanity, 400);
        } else {
            foreach ($inputs as $key => $value) {
                $todoElement[$key] = $value;
            }
            $todoElement->updated_at = DateHelper::currentDate();
            $todoElement->update();

            return response()->json($todoElement, 200);
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
            return $this->clientError("No element matching category:{$category} and id:{$id}.", 404);
        }

        $currentDate = DateHelper::currentDate();

        $todoElement->done = 1;
        $todoElement->done_at = $currentDate;
		$todoElement->updated_at = $currentDate;
        $todoElement->update();

        return response("", 204);
    }

    public function delete($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category],
			['deleted', false]
        ])->first();

        if (empty($todoElement)) {
            return $this->clientError("No element matching category:{$category} and id:{$id}.", 404);
        }

        $currentDate = DateHelper::currentDate();

        $todoElement->deleted = 1;
        $todoElement->deleted_at = $currentDate;
		$todoElement->updated_at = $currentDate;
        $todoElement->update();

        return response("", 204);
    }

    public function remove($category, $id)
    {
        $todoElement = Todo::where([
            ['id', $id],
            ['category', $category]
        ])->first();

        if (empty($todoElement)) {
            return $this->clientError("No element matching category:{$category} and id:{$id}.", 404);
        }

        $todoElement->delete();

        return response()->json("", 204);
    }

}
