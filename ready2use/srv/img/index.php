<?php

//Load the DB
require_once "../php/Utils/Constants.php";
$uploaddir = '../php/'.Constants::CONST_IMAGE_UPLOAD_FOLDER.'/';

use Lazer\Classes\Database as Lazer;
define('LAZER_DATA_PATH', '../php/'.realpath(dirname(__FILE__)).'/'.Constants::CONST_DB_FOLDER.'/');

$name = $_GET['name']; // Assuming the file name is in the URL for this example

$parsed = explode("_",$name);
if(count($parsed) != 2) return;

$mapKey = $parsed[0].'/';
$name = $parsed[1];

$ext = pathinfo($name)['extension'];
$mimeType = 'image/'.$ext;


$handle = fopen($uploaddir.$mapKey.$name  , "rb");
$contents = fread($handle, filesize($uploaddir.$mapKey.$name ));
fclose($handle);
 
header("content-type: image/".$ext);
echo $contents;

?>