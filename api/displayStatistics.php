<?php
require_once "connect2.php";

$db = Connect2::getInstance();
try{
    $statement = $db->prepare("SELECT * FROM statistika");
    $statement->execute();
    $res = $statement->fetchAll();    
    if(isset($res[0]) && !empty($res[0])){
        foreach($res as $r){   
            $tmp = $r["UNITS"]*$r["PRICE_USED"];       
            echo '
            You have saved: '.$tmp.' with succesfully using '.$r["NAME_USED"].' before expiration.
            ';
        }
    }else{
        echo'
        You have not used any items before expiration date, yet. Try better.
        ';
    }    
    
}catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(404);
}
?>