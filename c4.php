<?php
function sum(...$numbers) {
    $total = 0;

    foreach ($numbers as $number) {
        $total += $number;
    }

    return $total;
}

function avg(...$numbers) {
    $total = 0;
    $length = count($numbers);

    foreach ($numbers as $number) {
        $total += $number;
    }

    return $total / $length;
}
