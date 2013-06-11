<?php
error_reporting(E_ALL | E_STRICT);

$socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);

socket_bind($socket, '127.0.0.1', 9930);

$from = "";
$port = 0;
socket_recvfrom($socket, $buf, 128, 0, $from, $port);

header('Content-Type: application/json');
echo $buf . PHP_EOL;

?>

