<?php

namespace App\Helpers;

use DateTime;
use DateTimezone;


class DateHelper {

    public static function currentDate($timezone = "UTC") {
        $date = new DateTime(null, new DateTimezone($timezone));
        return $date->format("Y-m-d H:i:s");
    }

    public static function toTimezone($date, $timezone = "Europe/Paris") {
        $date = new DateTime($date, "UTC");
        $date->setTimezone(new DateTimezone($timezone));
        return $date->format("Y-m-d H:i:s");
    }

}
