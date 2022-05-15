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
  $statement = $db->prepare("SELECT NAME FROM `items` WHERE ITEM_ID=:id");
  $statement -> bindParam(":id", $id, PDO::PARAM_INT);  
  $statement->execute();
  $res = $statement->fetchAll();
  
  $statement2 = $db->prepare("SELECT ID_USED FROM `statistika` WHERE ID_USED=:id");
  $statement2 -> bindParam(":id", $id, PDO::PARAM_INT);
  $statement2->execute();
  $res2 = $statement2->fetchAll();
  if(!empty($res2)){
    #var_dump("seveda sem tu");
    $statement = $db->prepare("UPDATE `statistika` SET UNITS=UNITS+1  WHERE ITEM_ID=:id");
    $statement -> bindParam(":id", $id, PDO::PARAM_INT);
  }else{
    #var_dump("nisem sem tu");
    $statement = $db->prepare("INSERT INTO `statistika` (`ID_USED`,`NAME_USED`, `PRICE_USED`, `UNITS`)
    VALUES (:id, :iName, :price, 1)");        
    $statement -> bindParam(":id", $id, PDO::PARAM_INT);            
    $statement -> bindParam(":iName", $res[0]['NAME'], PDO::PARAM_STR);    
    $statement -> bindParam(":price", random_int(1,10), PDO::PARAM_INT);             
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

