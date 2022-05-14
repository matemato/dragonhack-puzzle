<?php
require_once "connect2.php";

$db = Connect2::getInstance();
try{
    $statement = $db->prepare("SELECT ITEM_ID, EXPERATIONDATE, NAME FROM items WHERE INFRIDGE=1");
    $statement->execute();    
    echo json_encode(['data'=> $statement->fetchAll()]);
}catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(404);
}
?>