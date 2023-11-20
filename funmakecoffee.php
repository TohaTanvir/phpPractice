<?php

function makeCoffee($types = array("cappuccino"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
    return "Making a cup of " .join(" , " , $types)." with $device.\n";
}

echo makeCoffee();
