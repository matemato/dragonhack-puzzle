<?php
require_once "connect2.php";

$db = Connect2::getInstance();

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $request = json_decode(json_encode($request), true);
  #var_dump($request["data"]["experationDate"]); exit();
  // Validate.
  if(trim($request["data"]["EXPERATIONDATE"]) === '' || $request["data"]["NAME"] === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $date = htmlspecialchars($request["data"]["EXPERATIONDATE"]);
  $name = htmlspecialchars($request["data"]["NAME"]);  

  // Get id by name
  $id='';
  try{
    $statement = $db->prepare("SELECT ITEM_ID FROM `items` WHERE NAME=:sampleName");
    $statement -> bindParam(":sampleName", $name, PDO::PARAM_STR);
    $statement->execute();
    $result = $statement->fetchAll();
    if (isset($result[0]['ITEM_ID']))
      $id = $result[0]['ITEM_ID'];
    else{
      // echo 'Item with that name does not exsist';
      // http_response_code(422);
      // exit();
      $statement = $db->prepare("INSERT INTO `items` (`NAME`, `EXPERATIONDATE`)
      VALUES (:iName, :iDate)"); 
      $statement -> bindParam(":iDate", $date, PDO::PARAM_STR);            
      $statement -> bindParam(":iName", $name, PDO::PARAM_STR); 
      $statement->execute();
      exit(); 
    }
      

  }catch(Exception $e){
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(422);
  }

  try{
    // store    
    $statement = $db->prepare("UPDATE `items` SET EXPERATIONDATE=:eDate, NAME=:iName, INFRIDGE=1 WHERE ITEM_ID=:id");            
    $statement -> bindParam(":id", $id, PDO::PARAM_INT);       
    $statement -> bindParam(":eDate", $date, PDO::PARAM_STR);            
    $statement -> bindParam(":iName", $name, PDO::PARAM_STR);                
    $statement->execute(); 
    
    $item = [
        'EXPERATIONDATE' => $date,
        'NAME' => $name,
        'ITEM_ID'    => $id
      ];
    echo json_encode(['data'=>$item]);
  }catch (Exception $e) {
      echo 'Caught exception: ',  $e->getMessage(), "\n";
      http_response_code(422);
  }
}
?>

