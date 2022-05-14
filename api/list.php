<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$cars = [];
$sql = "SELECT id, experationDate, name FROM items";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  $items = array();
  while($row = mysqli_fetch_assoc($result))
  {
    $items[$cr]['id']    = $row['id'];
    $items[$cr]['experationDate'] = $row['experationDate'];
    $items[$cr]['name'] = $row['name'];
    $cr++;
  }
    
  echo json_encode(['data'=>$items]);
}
else
{
  http_response_code(404);
}
?>