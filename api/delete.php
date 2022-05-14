<?php

require 'connect.php';

// Extract, validate and sanitize the id.
$id = '';
if ($_GET['id'] !== null && (int)$_GET['id'] > 0 && is_numeric($_GET['id'])) $id = (int) $_GET['id'];

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `items` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}