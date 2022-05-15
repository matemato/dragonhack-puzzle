<?php	

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $request = json_decode(json_encode($request), true);
}else{
    return;
}


$apiKey = "7480326a15e243ccbb99b3c3283323ca";

function detect_food_in_text($text){
    $url = "https://api.spoonacular.com/food/detect?apiKey=";
    $url = $url.=$apiKey.="&text=";
    $url = $url.=$text;
   
    // Initialize a CURL session.
    $ch = curl_init();
    // Return Page contents.
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Application" => "spoonacular",
        "Content-Type" => "application/x-www-form-urlencoded"
    ));
    curl_setopt($ch, CURLOPT_POST, 1);
    #curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    //grab URL and pass it to the variable.
     curl_setopt($ch, CURLOPT_URL, $url);

    // Return Page contents.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
 
    $result = curl_exec($ch);
 
    echo $result;
}

detect_food_in_text($request["text"]);