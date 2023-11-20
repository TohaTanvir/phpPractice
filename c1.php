<?php 


function sum(...$numbers) {
   $total = 0;

    foreach($numbers as $number) {
        $total += $number;

    }


        return $total;
}



echo sum(1, 2, 3, 4, 5, 6, 7, 8, 9);


