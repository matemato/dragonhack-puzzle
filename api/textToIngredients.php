<?php	

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $postdata = htmlspecialchars($postdata);
}



$apiKey = "f17755694ab8485db5676b880d16dae9";

function saveResultsToBase($data){    
    var_dump($data);
    foreach ($data as $d){
        var_dump($d['Object']["annotation"]);
    }
}

function detect_food_in_text($text, $apiKey){
    $text = "date 06/01/2016 wed *** $4.66 zuchinni green 0.778kg net @ $5.99/kg banana cavendish 0.442kg net @ $2.99/kg special special potatoes brushed 1.328kg net @ $2.99/kg broccoli 0.808kg net @ $5.99/kg brussel sprouts 0.322kg net @ $15.99/kg special grapes green 1.174kg net @ $5.99/kg peas snow 0.218kg net @ $14.99/kg tomatoes grape lettuce iceberg subtotal loyalty subtotal subtotal $1.32 $0.99 $1.50 $3.97 $4.84 $5.15 $0.99 $7.03 $3.27 $2.99 $2.49 $39.20 - 15.00 $24.20 $24.20 subtotal total cash change $24.20 $24.20 $50.00 $25.80";
    $url = "https://api.spoonacular.com/food/detect?apiKey=f17755694ab8485db5676b880d16dae9&text=";
    #$url = $url.=$apiKey;
    #$url = $url.="&text=";
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

    // Return Page contents.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    //grab URL and pass it to the variable.
     curl_setopt($ch, CURLOPT_URL, $url);  
 
    $result = curl_exec($ch);
    saveResultsToBase($result);
    #echo $result;
}

detect_food_in_text($postdata,$apiKey);
#detect_food_in_text("Banana, orange, chocolade", $apiKey);