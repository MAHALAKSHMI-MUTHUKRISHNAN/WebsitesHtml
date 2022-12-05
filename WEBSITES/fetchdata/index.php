<?php


include("simple_html_dom.php");



$html= file_get_html('http://www.w3schools.com/php/default.asp');

echo $html->find('title',0)->plaintext;;

$list = $html->find('div[class="w3.bar w3-left"]',0);


$list_array = $list->find('a');

for( $i = 0;$i < sizeof()($list_array); $i++)
{
   echo $list_array[$i];
   echo "<br>";
}




?>

