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

try{
  // check if item is already in base
  $statement = $db->prepare("SELECT NAME FROM `statistika` WHERE ITEM_ID:id");
  $statement -> bindParam(":id", $id, PDO::PARAM_INT);
  $statement->execute();
  $res = $statement->execute()->fetchAll();
  if(isset($res[0] && !empty($res[0]))){
    $statement = $db->prepare("UPDATE `statistika` SET UNITS = UNITS+1  WHERE ITEM_ID=:id")
    $statement -> bindParam(":id", $id, PDO::PARAM_INT);
  }else{
    $statement = $db->prepare("INSERT INTO `statistika` (`ID_USED`,`NAME_USED`, `PRICE_USED`, `UNITS`)
    VALUES (:id, :iName, :price, :units)");        
    $statement -> bindParam(":id", random_int(1, 1200), PDO::PARAM_INT);            
    $statement -> bindParam(":iName", $res[0], PDO::PARAM_STR);    
    $statement -> bindParam(":price", random_int(1,10), PDO::PARAM_STR);             
    $statement->execute();
  }
  // delete    
  $statement = $db->prepare("UPDATE `items` SET INFRIDGE=0 WHERE ITEM_ID=:id");            
  $statement -> bindParam(":id", $id, PDO::PARAM_INT);                  
  $statement->execute();
}catch(Exception $e){
  echo 'Caught exception: ',  $e->getMessage(), "\n";
  http_response_code(422);
}
?>

