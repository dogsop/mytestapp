<?php
error_reporting(E_ALL | E_STRICT);

date_default_timezone_set('America/Chicago');

class timer_object {

var $timer1Running = false;
var $timer2Running = false;
var $timer1Start = '2012-01-01 00:00:00';
var $timer2Start = '2012-01-01 00:00:00';

}


$file = './timers.dat';
$timerDataString = file_get_contents($file);

if($timerDataString === false) {
	$timerData = new timer_object();
	$timerData->timer1Start = gmdate('Y-m-d H:i:s eO');
	$timerData->timer1Running  = true;
	file_put_contents($file, serialize($timerData));
} else {
	$timerData = unserialize($timerDataString);
}


header('Content-Type: application/json');

$arr = array('timer1Running' => $timerData->timer1Running, 'timer1Start' => $timerData->timer1Start, 'timer2Running' => $timerData->timer2Running, 'timer2Start' => $timerData->timer2Start);
echo json_encode($arr). PHP_EOL;

?>

