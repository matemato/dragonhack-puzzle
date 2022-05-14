<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $request = json_decode(json_encode($request), true);
  #var_dump($request["data"]["experationDate"]); exit();
  // Validate.
  if(trim($request["data"]["experationDate"]) === '' || $request["data"]["name"] === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $date = htmlspecialchars($request["data"]["experationDate"]);
  $name = htmlspecialchars($request["data"]["name"]);

  $item = [
    'experationDate' => $date,
    'name' => $name,
    'id'    => mysqli_insert_id($con)
  ];   

  // Store.
  $sql = "INSERT INTO `items`(`id`,`experationDate`,`name`) VALUES (null,'{$date}','{$name}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $item = [
      'experationDate' => $date,
      'name' => $name,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$item]);
  }
  else
  {
    http_response_code(422);
  }
}