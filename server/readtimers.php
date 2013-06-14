<?php
error_reporting(E_WARN | E_STRICT);

date_default_timezone_set('America/Chicago');

class timer_object {

var $timer1Running = false;
var $timer2Running = false;
var $timer1Start = '2012-01-01 00:00:00';
var $timer2Start = '2012-01-01 00:00:00';

}

header('Content-Type: application/json');

$file = './timers.dat';
$timerData = new timer_object();

$timerDataString = @file_get_contents($file);

if($timerDataString === false) {
	file_put_contents($file, serialize($timerData));
} else {
	$timerData = unserialize($timerDataString);
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $timerNum = $_POST['id'];
  $action = $_POST['action'];
  if($timerNum == 1) {
    if($action == 'start') {
      if($timerData->timer1Running == false) {
        $timerData->timer1Running = true;
	      $timerData->timer1Start = gmdate('Y-m-d H:i:s eO');
	      file_put_contents($file, serialize($timerData));
      }
    } else if($action == 'stop') {
      if($timerData->timer1Running == true) {
        $timerData->timer1Running = false;
	      file_put_contents($file, serialize($timerData));
      }
    }
  } else if($timerNum == 2) {
    if($action == 'start') {
      if($timerData->timer2Running == false) {
        $timerData->timer2Running = true;
	      $timerData->timer2Start = gmdate('Y-m-d H:i:s eO');
	      file_put_contents($file, serialize($timerData));
      }
    } else if($action == 'stop') {
      if($timerData->timer2Running == true) {
        $timerData->timer2Running = false;
	      file_put_contents($file, serialize($timerData));
      }
    }
  }
}

$arr = array('timer1Running' => $timerData->timer1Running, 'timer1Start' => $timerData->timer1Start, 'timer2Running' => $timerData->timer2Running, 'timer2Start' => $timerData->timer2Start);
echo json_encode($arr). PHP_EOL;

?>

