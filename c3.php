<?php 


$x = 5;

function myTest() {
    global $x;
    return $x;


}


echo myTest();