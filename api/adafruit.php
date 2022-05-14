<?php
var_dump($_SERVER["SERVER_ADDR"]);
$postdata = file_get_contents("php://input");
//var_dump($postdata);
//var_dump($_POST);
if(isset($postdata) && !empty($postdata) || isset($_POST) && !empty($_POST))
{
  var_dump("je prispelo", $_POST);
  // Extract the data.
  $request = json_decode($postdata);
  $request = json_decode(json_encode($request), true);
  var_dump($request);
}

?>