<?php
require_once "connect2.php";

$db = Connect2::getInstance();

// Extract, validate and sanitize the id.
$id = '';
if ($_GET['ITEM_ID'] !== null && (int)$_GET['ITEM_ID'] >= 0 && is_numeric($_GET['ITEM_ID'])) $id = (int) $_GET['ITEM_ID'];
if(!$id)
{
  return http_response_code(400);
}
try{
  // delete    
  $statement = $db->prepare("UPDATE `items` SET INFRIDGE=0 WHERE ITEM_ID=:id");            
  $statement -> bindParam(":id", $id, PDO::PARAM_INT);                  
  $statement->execute(); 
}catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(422);
}
?>

