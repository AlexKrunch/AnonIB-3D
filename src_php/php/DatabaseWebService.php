<?php
/*

    ____        __        __                       _       _______
   / __ \____ _/ /_____ _/ /_  ____ _________     | |     / / ___/
  / / / / __ `/ __/ __ `/ __ \/ __ `/ ___/ _ \    | | /| / /\__ \ 
 / /_/ / /_/ / /_/ /_/ / /_/ / /_/ (__  )  __/    | |/ |/ /___/ / 
/_____/\__,_/\__/\__,_/_.___/\__,_/____/\___/     |__/|__//____/  

Database WS
*/

ini_set('display_errors', 1);

require_once "Utils/Constants.php";
require_once "Imports/LazerImports.php";
require_once 'MapController.php';
require_once 'AdminController.php';

use Lazer\Classes\Database as Lazer;
defined('LAZER_DATA_PATH') or define('LAZER_DATA_PATH', realpath(dirname(__FILE__)).'/'.Constants::CONST_DB_FOLDER.'/');

//Admin password
$password = "";
if(isset($_POST["password"])) $password = $_POST["password"];

$adminController = new AdminController();

if(!$adminController ->validPassword($password)){
	echo "bad password!!";
	exit;
}


//Create an autoloader
$action = "";
if(isset($_POST["action"]))
$action = $_POST["action"];


switch($action){

	
	case "initDB":

	//**************************************
	// * DB MAIN
	// *************************************

	try{
		$banExtist = false;
		try{
			$banExtist = \Lazer\Classes\Helpers\Validate::table(Constants::CONST_TABLE_BANS)->exists();
		} catch(\Lazer\Classes\LazerException $e){
			//Database doesn't exist
		}

		if(!$banExtist){
			Lazer::create(Constants::CONST_TABLE_BANS, array(
				'id' => 'integer',
				'reason' => 'string',
				'id_post' => 'integer',
				//'thread_key' => 'string',
				'map_key' => 'string',
				'date' => 'integer',
				'duration' => 'integer',
				'player_ip' => 'string'
			 ));
			echo 'Ban created';
		}

		 Lazer::create(Constants::CONST_TABLE_FILES, array(
			'id' => 'integer',
			'id_post' => 'integer',
			'map_key' => 'string',
			'fake_path' => 'string',
			'fake_name' => 'string',
			'file_name' => 'string'
		 ));
		 

		echo 'Forum creation succed';

	} catch(\Lazer\Classes\LazerException $e){
    
    	echo 'exception'.$e;

	}

	
	
	try{

		Lazer::create(Constants::CONST_TABLE_PLAYERS, array(
		    'id' => 'integer',
			'name' => 'string',
			'talk' => 'string',
			'is_admin' => 'boolean',
			'player_key' => 'string',
		    'hp' => 'integer',
			'money' => 'integer',
			'map_key' => 'string',
		    'last_action' => 'integer',
		    'position_x' => 'double',
		    'position_y' => 'double',
		    'position_z' => 'double'
		));

		
		Lazer::create(Constants::CONST_TABLE_ITEMS, array(
			'id' => 'integer',
			'key' => 'string',
			'player_id' => 'integer',
			'action' => 'string',
			'type' => 'string',
			'name' => 'string',
			'description' => 'string',
			'map_key' => 'string',
			'x' => 'double',
			'y' => 'double',
			'is_expendable' => 'boolean',
			'value' => 'integer'
		));

		Lazer::create(Constants::CONST_TABLE_LOGS, array(
			'id' => 'integer',
			'map_key' => 'string',
			'last_action'=> 'integer',
			'ip' => 'string',
			'to' => 'integer',
			'name' => 'string',
			'player_id' => 'integer',
			'value' => 'string',
			'action' => 'string'
		));

		echo 'PLAYER creation succed';

	} catch(\Lazer\Classes\LazerException $e){
    
    	echo 'exception'.$e;

	}
	break;

	//**************************************
	// * DB MAPS AND POST
	// *************************************

	//init the data base
	case "initMapsAndPosts":

		try{

			Lazer::create(Constants::CONST_TABLE_POSTS, array(
				'id' => 'integer',
				'show' => 'boolean',
				'key' => 'string',
				'scale' => 'integer',
				'date' => 'integer',
				'reply' => 'integer',
				'player_ip' => 'string',
				'player_id' => 'integer',
				'is_canon' => 'boolean',
				'is_admin' => 'boolean',
				'nsfw' => 'boolean',
				'graffiti' => 'boolean',
				'preview' => 'string',
				'player_name' => 'string',
				//'thread_key' => 'string',
				'map_key' => 'string',
				'canvas_key' => 'string',
				'message' => 'string',
				'url' => 'string',
				'magnet' => 'string',
				'torrent' => 'string',
				'hash' => 'string'
			 ));

			//Map creation
			Lazer::create(Constants::CONST_TABLE_MAP, array(
				'id' => 'integer',
				'key' => 'string',
				'name' => 'string',
				'description' => 'string',
				'theme' => 'string',
				'width' => 'integer',
				'height' => 'integer',
				
				'x' => 'integer',
				'y' => 'integer',
	 
				'door_key_n' => 'string',
				'door_key_e' => 'string',
				'door_key_s' => 'string',
				'door_key_w' => 'string',
				
				'level_data' => 'string',
	 
				'num_post_max' => 'integer',
				'fast_travel' => 'boolean',
				'is_safe' => 'boolean',
				'is_chan' => 'boolean',
				'is_secret' => 'boolean'
			 ));
	 
			 $mapController = new MapController();
			 $mapController -> generateWorld();
	 
	 
			 echo 'MAP creation succed';

		} catch(\Lazer\Classes\LazerException $e){
			
			echo 'exception'.$e;

		}

	break;

	//init the data base
	case "initBans":
		$banExtist = false;
		try{
			$banExtist = \Lazer\Classes\Helpers\Validate::table(Constants::CONST_TABLE_BANS)->exists();
		} catch(\Lazer\Classes\LazerException $e){
			//Database doesn't exist
		}

		if(!$banExtist){
			Lazer::create(Constants::CONST_TABLE_BANS, array(
				'id' => 'integer',
				'reason' => 'string',
				'id_post' => 'integer',
				//'thread_key' => 'string',
				'map_key' => 'string',
				'date' => 'integer',
				'duration' => 'integer',
				'player_ip' => 'string'
			 ));
			echo 'Ban created';
		}
	break;

	case "destroyBans":
		Lazer::remove(Constants::CONST_TABLE_BANS);
		echo 'ban destroyed';
	break;


	//init the data base
	case "destroyDB":

	try{

		//Lazer::remove(Constants::CONST_TABLE_BANS);
		Lazer::remove(Constants::CONST_TABLE_FILES);
		Lazer::remove(Constants::CONST_TABLE_PLAYERS);
		Lazer::remove(Constants::CONST_TABLE_ITEMS);
		Lazer::remove(Constants::CONST_TABLE_LOGS);
		

		echo 'DB erase succed';

	} catch(\Lazer\Classes\LazerException $e){
	    
	    echo 'exception'.$e;

	}
	break;

	//init the data base
	case "destroyMapsAndPosts":

	try{

		Lazer::remove(Constants::CONST_TABLE_POSTS);
		Lazer::remove(Constants::CONST_TABLE_MAP);

		echo 'Maps and Posts erase succed';

	} catch(\Lazer\Classes\LazerException $e){
	    
	    echo 'exception'.$e;

	}
	break;

	//init the data base
	/*
	case "cleanDB":
	try{

		Lazer::table(Constants::CONST_TABLE_POSTS)->delete();
		Lazer::table(Constants::CONST_TABLE_BANS)->delete();
		Lazer::table(Constants::CONST_TABLE_PLAYERS)->delete();
		Lazer::table(Constants::CONST_TABLE_FILES)->delete();
		Lazer::table(Constants::CONST_TABLE_ITEMS)->delete();
		//Lazer::table(Constants::CONST_TABLE_LOOT)->delete();
		Lazer::table(Constants::CONST_TABLE_MAP)->delete();

		echo 'DB erase succed';

	} catch(\Lazer\Classes\LazerException $e){
	    
	    	echo 'exception'.$e;

	}
	break;*/

}