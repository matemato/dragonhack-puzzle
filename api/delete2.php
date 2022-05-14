<?php
require_once "connect2.php";

$db = Connect2::getInstance();

// Extract, validate and sanitize the id.
$id = '';
if ($_GET['id'] !== null && (int)$_GET['id'] > 0 && is_numeric($_GET['id'])) $id = (int) $_GET['id'];

if(!$id)
{
  return http_response_code(400);
}

try{
    $statement = $db->prepare("DELETE FROM items WHERE id = :id LIMIT 1");        
    $statement->bindParam(":id", $id, PDO::PARAM_INT);
    $statement->execute(); 
    http_response_code(204);   
}catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(422);
}

?>

