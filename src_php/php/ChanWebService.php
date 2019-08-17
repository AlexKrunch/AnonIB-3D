<?php

/*
   ________                   _       _______
  / ____/ /_  ____ _____     | |     / / ___/
 / /   / __ \/ __ `/ __ \    | | /| / /\__ \ 
/ /___/ / / / /_/ / / / /    | |/ |/ /___/ / 
\____/_/ /_/\__,_/_/ /_/     |__/|__//____/  
                                             
 

Chan WEBSERVICES
reception of the webservice for chan

*/

require_once 'ChanController.php';
require_once 'AdminController.php';
require_once 'Models/Post.php';
		
$action = "";
if(isset($_POST["action"]))
$action = $_POST["action"];

/*
controls the RESTful services
URL mapping
*/
switch($action){

		//**************************************
		// * WS ADMIN
		// *************************************

	case "setAdminPassword":

		$password =  "";
		if( isset($_POST['password']) ) $password = $_POST['password'];
		$AdminController = new AdminController();
		$result = $AdminController -> setPassword($password);
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "validAdmin":

		$password =  "";
		if( isset($_POST['password']) ) $password = $_POST['password'];
		$AdminController = new AdminController();
		$result = $AdminController -> validPassword($password);
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "testAdminSession":

		$AdminController = new AdminController();
		$result = $AdminController -> isAdminLogged();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "unLog":
	
		$AdminController = new AdminController();
		$result = $AdminController -> unlog();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "deletePost":
	
		$chanController = new ChanController();
		$mapKey = "";
		$postId = -1;
		if( isset($_POST['map_key']) ) $mapKey = $_POST['map_key'];
		if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];

		$result = $chanController -> deletePost($mapKey ,$postId );
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "setBan":
	
		$chanController = new ChanController();
		$mapKey = "";
		$postId = -1;
		if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];

		$result = $chanController -> setBan($postId );
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "deletePostForVal":
	
		$chanController = new ChanController();
		$val = "";
		$result = false;
		if( isset($_POST['val']) ){
			$val = $_POST['val'];
			$result = $chanController -> deletePostForVal($val);
		} 
		
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "setPostUrlToFile":
	
	$chanController = new ChanController();
	$mapKey = "";
	$postId = -1;
	if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];

	$result = $chanController -> setPostUrlToFile($postId );
	Helpers::makeGenericResponse(true, $result, null);

	break;

	

	case "setPostCanon":
	
		$chanController = new ChanController();
		$mapKey = "";
		$postId = -1;
		if( isset($_POST['map_key']) ) $mapKey = $_POST['map_key'];
		if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];

		$result = $chanController -> setPostCanon($mapKey ,$postId );
		Helpers::makeGenericResponse(true, $result, null);

	break;

	/*
	case "banUser":

		$chanController = new ChanController();
		$mapKey = "";
		$reason = "";
		$durationD = 0;
		$postId = -1;
		if( isset($_POST['map_key']) ) $mapKey = $_POST['map_key'];
		if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];
		if( isset($_POST['durationD']) ) $durationD = $_POST['durationD'];
		if( isset($_POST['reason']) ) $reason = $_POST['reason'];

		$result = $chanController -> banForPost($mapKey, $postId, $reason, $durationD);
		Helpers::makeGenericResponse(true, $result, null);
	break;*/

	case "getAllPost":
		$chanController = new ChanController();
		$result = $chanController -> getAllPost();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "getAllMaps":
		$chanController = new ChanController();
		$result = $chanController -> getAllMaps();
		Helpers::makeGenericResponse(true, $result, null);
	break;

	case "getAllTiles":
		$chanController = new ChanController();
		$result = $chanController -> getAllTiles();
		Helpers::makeGenericResponse(true, $result, null);
	break;

	case "saveMapModel":

		$mapKey = "";
		$levelData = "";

		if( isset($_POST['id']) ) $mapKey = $_POST['key'];
		if( isset($_POST['level_data']) ) $levelData = $_POST['level_data'];

		$chanController = new ChanController();
		$result = $chanController -> saveMapModel($mapKey, $levelData);

		Helpers::makeGenericResponse(true, $result, null);
	break;

	//**************************************
	// * WS for PUR CHAN
	// * Actual version
	// *************************************

	case "getDungeonSettings":

		$chanController = new ChanController();
		$result = $chanController -> getSettings();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "getMapPosts":

		$chanController = new ChanController();
		$result = $chanController -> getMapPosts();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	/*
	case "getAllPost":

		$chanController = new ChanController();
		$result = $chanController -> getAllPost();
		Helpers::makeGenericResponse(true, $result, null);

	break;*/

	case "getReplies":
	
		if( isset($_POST['post_id']) ) $postId = $_POST['post_id'];
		$chanController = new ChanController();
		$result = $chanController -> getReplies($postId);
		Helpers::makeGenericResponse(true, $result, null);

	break;


	case "createPost":

		$chanController = new ChanController();

		$torrentBytes =  NULL;
		$file = NULL;
		$img = NULL;

		if( isset($_FILES['file']) ) $file = $_FILES['file'];
		if( isset($_POST['torrent']) ) $torrentBytes = $_POST['torrent'];
		if( isset($_POST['image_data']) ) $img = $_POST['image_data'];

		$postModel = new Post();
		$postModel -> fillWithPostData();

		$result = $chanController -> createPost($postModel,$file, $img);

		Helpers::makeGenericResponse(true, $result, null);

	break;
		
		//**************************************
		// * WS PLAYER
		// *************************************

	case "getActions":

		$chanController = new ChanController();
		$result = $chanController -> getActions();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	case "setAction":

		if( isset($_POST['player_action']) ) $player_action = $_POST['player_action'];
		if( isset($_POST['value']) ) $value = $_POST['value'];
		$chanController = new ChanController();
		$result = $chanController -> setAction($player_action,$value);
		Helpers::makeGenericResponse(true, $result, null);

	break;


	case "initPlayer":

		$chanController = new ChanController();

		$playerId = null;
		$playerKey = null;
		$mapKey = null;
		$playerPassword = null;
		
		if( isset($_POST['player_id']) ) $playerId = $_POST['player_id'];
		if( isset($_POST['player_key']) ) $playerKey = $_POST['player_key'];
		if( isset($_POST['player_password']) ) $playerPassword = $_POST['player_password'];
		if( isset($_POST['map_key']) ) $mapKey = $_POST['map_key'];

		$playerData = $chanController->init( $playerId, $playerKey, $playerPassword, $mapKey );
		//$playerId = null;

		//if(array_key_exists ("id", $playerData)) $playerId = $playerData["id"];

		//return the player postion
		//$playersList = $chanController->getAllPlayers($playerId);
		//$arts = $chanController->getArtByMap($playerData);
		/*
		$result = array (
			'list' => $playersList,
			'player' => $playerData
		);*/
		Helpers::makeGenericResponse(true, $playerData, null);

	break;

	case "changeMapPlayer":
		$chanController = new ChanController();
		$mapKey = null;
		if( isset($_POST['map_key']) ) $mapKey = $_POST['map_key'];
		$chanController->setPlayerMapKey( $mapKey );
		$result = $chanController -> getMapPosts();
		Helpers::makeGenericResponse(true, $result, null);
	break;

	case "changeMapPlayerName":
		$chanController = new ChanController();
		$mapName = null;
		if( isset($_POST['map_name']) ) $mapName = $_POST['map_name'];
		$chanController->setPlayerMapName( $mapName );
		$result = $chanController -> getMapPosts();
		Helpers::makeGenericResponse(true, $result, null);
	break;

	case "changeMapRandom":
		$chanController = new ChanController();
		$secret = true;
		if( isset($_POST['secret']) ) $secret = $_POST['secret'];
		$chanController->setPlayerMapRand( $secret );
		$result = $chanController -> getMapPosts();
		Helpers::makeGenericResponse(true, $result, null);
	break;

	case "setPlayerItem":

		$chanController = new ChanController();
		$itemKey = null;
		if( isset($_POST['item_key']) ) $itemKey = $_POST['item_key'];
		$chanController->setItem( $itemKey );
		$result = $chanController -> getMapPosts();
		Helpers::makeGenericResponse(true, $result, null);

	break;

	/*
	case "movePlayer":

		$chanController = new ChanController();

		$playerId = null;
		$playerKey = null;
		$playerPassword = null;

		if( isset($_POST['player_id']) ) $playerId = $_POST['player_id'];
		if( isset($_POST['player_key']) ) $playerKey = $_POST['player_key'];
		if( isset($_POST['player_password']) ) $playerPassword = $_POST['player_password'];

		//position in 3D to get
		$playerData = array();
		if( isset($_POST['position_x']) ) $playerData['position_x'] = $_POST['position_x'];
		if( isset($_POST['position_y']) ) $playerData['position_y'] = $_POST['position_y'];
		if( isset($_POST['position_z']) ) $playerData['position_z'] = $_POST['position_z'];
		if( isset($_POST['map_key']) ) $playerData['map_key'] = $_POST['map_key'];


		$playerResult = $chanController->move( $playerId, $playerKey, $playerPassword, $playerData);

		if($playerResult == null){

			//PLAYER DONT EXIST ANYMORE!!!
			$playerResult = $chanController->init( $playerId, $playerKey, $playerPassword );
			$playerId = null;
			
			if(array_key_exists ("id", $playerResult)) $playerId = $playerResult["id"];
		}

		//return the player postion
		$playersList = $chanController->getAllPlayers($playerId);

		//Gte post datas
		$postsList = $chanController->getArtByMap($playerData);

		//IS the player Null??? if yes
		$result = array(
			'user' => $playerResult,
			'players' => $playersList,
			'arts' => $postsList
		);

		Helpers::makeGenericResponse(true,$result, null);

	break;
	*/
}