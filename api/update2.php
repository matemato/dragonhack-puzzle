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
  if(trim($request["data"]["experationDate"]) === '' || $request["data"]["name"] === '' || !is_numeric($request["data"]["id"]))
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $id    = htmlspecialchars($request["data"]["id"]);
  $date = htmlspecialchars($request["data"]["experationDate"]);
  $name = htmlspecialchars($request["data"]["name"]);  

    try{
        // store    
        $statement = $db->prepare("UPDATE `items` SET EXPERATIONDATE=:eDate, NAME=:iName WHERE ITEM_ID=:id");            
        $statement -> bindParam(":id", $id, PDO::PARAM_INT);       
        $statement -> bindParam(":eDate", $date, PDO::PARAM_STR);            
        $statement -> bindParam(":iName", $name, PDO::PARAM_STR);                
        $statement->execute(); 
        
        $item = [
            'experationDate' => $date,
            'name' => $name,
            'id'    => $id
          ];
        echo json_encode(['data'=>$item]);
    }catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(422);
    }
}  
?>

