<?php	
$apiKey = "m18Jj8lHLegVANDKKCdxzPZIvXpeP48l";
#$response = detect_food_in_text("tomatoes grape");

// function detect_food_in_text($text){       
//         $endpoint = "food/detect"
//         $url_query = {"text": text}
//         $url_params = {}
//         return request($endpoint, method="POST", $query_=url_query, $params_=$url_params);
// }

function detect_food_in_text($text){
    $url = "https://api.spoonacular.com/food/detect?apiKey=f17755694ab8485db5676b880d16dae9&text=";
    $url = $url.=$text;
   # $data = array("text" => $text);
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

function search_recipes_by_ingredients($ingredients){
    $url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=f17755694ab8485db5676b880d16dae9&ingredients=";
    $url = $url .= $ingredients;
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
#search_recipes_by_ingredients("banana");
detect_food_in_text("date 06/01/2016 wed *** $4.66 zuchinni green 0.778kg net @ $5.99/kg banana cavendish 0.442kg net @ $2.99/kg special special potatoes brushed 1.328kg net @ $2.99/kg broccoli 0.808kg net @ $5.99/kg brussel sprouts 0.322kg net @ $15.99/kg special grapes green 1.174kg net @ $5.99/kg peas snow 0.218kg net @ $14.99/kg tomatoes grape lettuce iceberg subtotal loyalty subtotal subtotal $1.32 $0.99 $1.50 $3.97 $4.84 $5.15 $0.99 $7.03 $3.27 $2.99 $2.49 $39.20 - 15.00 $24.20 $24.20 subtotal total cash change $24.20 $24.20 $50.00 $25.80");
?>