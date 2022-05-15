<?php
// Get the posted data.
$postdata = file_get_contents("php://input");
var_dump($postdata);
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  $request = json_decode(json_encode($request), true);
}else{
    return;
}

$apiKey = "1215dfe2d3a54e72ae07d0e88f7f5f7c";

function search_recipes_by_ingredients($ingredients, $apiKey){
    $url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=";
    $url = $url.=$apiKey;
    $url = $url.="&ingredients=";
    $url = $url .= $ingredients;
    var_dump($url);
    #var_dump($url);
    // Initialize a CURL session.
    $ch = curl_init();
    // Return Page contents.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 
    //grab URL and pass it to the variable.
    curl_setopt($ch, CURLOPT_URL, $url);
 
    $result = curl_exec($ch);
 
    echo $result;
}

search_recipes_by_ingredients($postdata, $apiKey);

?>
