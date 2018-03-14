<?php

return [
	'user-email' => [
		'required' => [
			'rule' => 'required',
			'message' => 'email is required.'
		],
		'email' => [
			'rule' => 'email',
			'message' => 'email should match email pattern.'
		],
		'max' => [
			'rule' => 'max:30',
			'message' => 'email must not exceed 30 characters.'
		]
	],
	'user-password' => [
		'required' => [
			'rule' => 'required',
			'message' => 'password is required.'
		],
		'confirmed' => [
			'rule' => 'confirmed',
			'message' => 'password confirmation do not match.'
		],
		'min' => [
			'rule' => 'min:8',
			'message' => 'password should use at least 8 characters.'
		],
		'regex' => [
			'rule' => 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@#&!?.:=+\-*<>$%§]).+$/',
			'message' => 'password contain at least one upper/lowercase letter, one number and one special char among _@#&!?.:=+-*<>$%§.'
		]
	],
	'user-name' => [
		'nullable' => [
			'rule' => 'nullable'
		],
		'max' => [
			'rule' => 'max:50',
			'message' => 'name must not exceed 50 characters.'
		]
	],
	'todo-title' => [
		'required' => [
			'rule' => 'required',
			'message' => 'title is required.'
		],
		'max' => [
			'rule' => 'max:100',
			'message' => 'title must not exceed 100 characters.'
		]
	],
	'todo-comment' => [
		'required' => [
			'rule' => 'required',
			'message' => 'comment is required.'
		]
	],
	'todo-done' => [
		'boolean' => [
			'rule' => 'boolean',
			'message' => 'done must be a boolean.'
		]
	],
	'todo-deleted' => [
		'boolean' => [
			'rule' => 'boolean',
			'message' => 'deleted must be a boolean.'
		]
	],
	'todo-due_at' => [
		'regex' => [
			'rule' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',
			'message' => 'due_at should match dateTime format.'
		]
	],
	'todo-done_at' => [
		'regex' => [
			'rule' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',
			'message' => 'done_at should match dateTime format.'
		]
	],
	'todo-deleted_at' => [
		'regex' => [
			'rule' => 'regex:/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/',
			'message' => 'deleted_at should match dateTime format.'
		]
	]
];
