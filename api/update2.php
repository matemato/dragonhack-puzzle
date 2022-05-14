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
  if(trim($request["data"]["EXPERATIONDATE"]) === '' || $request["data"]["NAME"] === '' || !is_numeric($request["data"]["ITEM_ID"]))
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $id    = htmlspecialchars($request["data"]["ITEM_ID"]);
  $date = htmlspecialchars($request["data"]["EXPERATIONDATE"]);
  $name = htmlspecialchars($request["data"]["NAME"]);  

    try{
        // store    
        $statement = $db->prepare("UPDATE `items` SET EXPERATIONDATE=:eDate, NAME=:iName WHERE ITEM_ID=:id");            
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

