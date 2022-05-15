<?php	
$apiKey = "7480326a15e243ccbb99b3c3283323ca";
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
detect_food_in_text("I like to eat tacos, cheeseburger and pizza");
?>
