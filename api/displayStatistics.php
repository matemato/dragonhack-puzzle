<?php
require_once "connect2.php";

$db = Connect2::getInstance();
try{
    $statement = $db->prepare("SELECT * NAME FROM statistika");
    $res = $statement->execute()->fetchAll();
    if(isset($res[0]) && !empty($res[0])){
        foreach($res as $r){
            echo '
            <div>You have saved: '.$r["units"]*$r["price_used"].' with succesfully using '$r["NAME_USED"]' before expiration.</div>
            ';
        }
    }else{
        echo'
        <div>You have not used any items before expiration date, yet. Try better.</div>
        ';
    }    
    
}catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
    http_response_code(404);
}
?>