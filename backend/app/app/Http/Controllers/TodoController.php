<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

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
            return response()->json(['message' => "No element matching category:$category and id:$id."], 404);
        }

        return response()->json($todoElement, 200);
    }

    public function create(Request $request, $category)
    {
		$inputs = [];
        if ($request->input('title') != null) {
            $inputs['title'] = $request->input('title');
        }
        if ($request->input('comment') != null) {
            $inputs['comment'] = $request->input('comment');
        }
        if ($request->input('due_at') != null) {
            $inputs['due_at'] = $request->input('due_at');
        }

        if (empty($inputs)) {
            return response()->json(['message' => "Validation error: no parameter given."], 400);
        }

        $rules = [
            'title' => 'required|max:100',
            'comment' => 'required',
            'due_at' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/'
        ];
        $messages = [
			'title.required' => 'title is required.',
            'title.max' => 'title must not exceed 100 characters.',
            'comment.required' => 'comment is required.',
			'due_at.regex' => 'due_at should match dateTime format.'
        ];

        $validator = \Validator::make($inputs, $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'message' => "Validation errors in your request",
                'errors' => $validator->errors()->all()
            ], 400);
        } else {
            $result = Todo::create(array_merge(
				$inputs,
				['category' => $category]
			));

            return response()
                    ->json(['message' => "The element was created successfully."], 201)
                    ->header('Location', "/todos/$category/$result->id");
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
            return response()->json(['message' => "No element matching category:$category and id:$id."], 404);
        }

		$inputs = [];
        if ($request->input('title') != null) {
            $inputs['title'] = $request->input('title');
        }
        if ($request->input('comment') != null) {
            $inputs['comment'] = $request->input('comment');
        }
        if ($request->input('done') != null) {
            $inputs['done'] = $request->input('done');
        }
        if ($request->input('deleted') != null) {
            $inputs['deleted'] = $request->input('deleted');
        }
        if ($request->input('due_at') != null) {
            $inputs['due_at'] = $request->input('due_at');
        }
        if ($request->input('done_at') != null) {
            $inputs['done_at'] = $request->input('done_at');
        }
        if ($request->input('deleted_at') != null) {
            $inputs['deleted_at'] = $request->input('deleted_at');
        }

        if (empty($inputs)) {
            return response()->json(['message' => "Validation error: no parameter given."], 400);
        }

        $rules = [
			'title' => 'max:100',
			'done' => 'boolean',
            'deleted' => 'boolean',
			'due_at' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',
			'done_at' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',
            'deleted_at' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/'
        ];
        $messages = [
			'title.max' => 'title must not exceed 100 characters.',
			'done.boolean' => 'done must be a boolean.',
            'deleted.boolean' => 'deleted must be a boolean.',
			'due_at.regex' => 'due_at should match dateTime format.',
			'done_at.regex' => 'done_at should match dateTime format.',
			'deleted_at.regex' => 'deleted_at should match dateTime format.'
        ];

        $validator = \Validator::make($inputs, $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'message' => "Validation errors in your request",
                'errors' => $validator->errors()->all()
            ], 400);
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
            return response()->json(['message' => "No element matching category:$category and id:$id."], 404);
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
            return response()->json(['message' => "No element matching category:$category and id:$id."], 404);
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
            return response()->json(['message' => "No element matching category:$category and id:$id."], 404);
        }

        $todoElement->delete();

        return response()->json("", 204);
    }

}
