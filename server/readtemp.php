<?php
error_reporting(E_ALL | E_STRICT);

$smokerTemp = 220 + rand(5, 15);
$meatTemp = 120 + rand(1,3);

$buf = '{ smokerTemp: ' . $smokerTemp . ' , meatTemp: ' . $meatTemp . ' }';
header('Content-Type: application/json');
echo $buf . PHP_EOL;

?>

