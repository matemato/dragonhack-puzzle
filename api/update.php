<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);	
  $request = json_decode(json_encode($request), true);
  
  // Validate.
  if(trim($request["data"]["experationDate"]) === '' || $request["data"]["name"] === '' || !is_numeric($request["data"]["id"]))
  {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = htmlspecialchars($request["data"]["id"]);
  $date = htmlspecialchars($request["data"]["experationDate"]);
  $name = htmlspecialchars($request["data"]["name"]);
  

  // Update.
  $sql = "UPDATE `items` SET `experationDate`='$date',`name`='$name' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}