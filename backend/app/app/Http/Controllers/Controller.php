<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use Validator;


class Controller extends BaseController
{

	/**
     * Filter Request inputs with item list.
     *
	 * @param  Illuminate\Http\Request  $data
     * @param  object  $items
     * @return object
     */
    protected function filterInputs(Request $request, $items) {
		$filteredInputs = [];

		foreach ($items as $item) {
			if ($request->input($item) != null) {
	            $filteredInputs[$item] = $request->input($item);
	        }
		}

		return $filteredInputs;
    }

	/**
     * Validate data with rules and messages.
     *
	 * @param  object  $data
     * @param  object  $config
     * @return Validator
     */
    protected function sanityCheck($data, $config) {
		$rules = [];
		$messages = [];

		// $config = [ item => ruleName:ruleOption1|ruleOption2 ]
		// 'email' => user-email:required|email\max
		foreach ($config as $item => $itemRules) {
			$ruleConfig = explode(":", $itemRules);

			$ruleOptions = [];
			foreach (explode("|", $ruleConfig[1]) as $ruleOption) {
				$ruleOptions[] = config("rules.{$ruleConfig[0]}.{$ruleOption}.rule");

				$message = config("rules.{$ruleConfig[0]}.{$ruleOption}.message");
				if ($message) {
					$messages[$item.'.'.$ruleOption] = $message;
				}
			}

			$rules[$item] = implode("|", $ruleOptions);
		}

		$validator = Validator::make($data, $rules, $messages);

		if ($validator->fails()) {
			$sanity = [];

			// $sanity = [ item => [ errorMessage ] ]
			foreach ($config as $item => $itemRules) {
				foreach ($validator->errors()->get($item) as $message) {
					if (!array_key_exists($item, $sanity)) {
						$sanity[$item] = [];
					}
					array_push($sanity[$item], $message);
				}
			}

			return $sanity;
		} else {
			return null;
		}
    }

}
