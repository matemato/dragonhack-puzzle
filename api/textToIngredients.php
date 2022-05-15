<?php	

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $postdata = htmlspecialchars($postdata);
}



$apiKey = "f17755694ab8485db5676b880d16dae9";

function detect_food_in_text($text, $apiKey){
    $url = "https://api.spoonacular.com/food/detect?apiKey=";
    $url = $url.=$apiKey;
    $url = $url.="&text=";
    $url = $url.=$text;
    #var_dump($url);
   
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
 
    #json_encode(['data'=> $result]);
    echo $result;
}

detect_food_in_text($postdata,$apiKey);
#detect_food_in_text("Banana, orange, chocolade", $apiKey);