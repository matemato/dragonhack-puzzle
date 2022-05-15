<?php
 $homepage = file_get_contents('http://localhost/data/products_with_temperature_humidity.json');
 echo json_encode($homepage);
?>