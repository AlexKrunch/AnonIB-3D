<?php

/*

   ________                   ______            __             ____         
  / ____/ /_  ____ _____     / ____/___  ____  / /__________  / / /__  _____
 / /   / __ \/ __ `/ __ \   / /   / __ \/ __ \/ __/ ___/ __ \/ / / _ \/ ___/
/ /___/ / / / /_/ / / / /  / /___/ /_/ / / / / /_/ /  / /_/ / / /  __/ /    
\____/_/ /_/\__,_/_/ /_/   \____/\____/_/ /_/\__/_/   \____/_/_/\___/_/     

Functions:
-getThreadsList
-createThread
-createPost
*/

ini_set('display_errors', 1);

require_once "Utils/Constants.php";
require_once "Imports/LazerImports.php";
require_once 'Utils/Helpers.php';
require_once 'Libs/torrent-rw/Torrent.php';
require_once 'Libs/php-bittorrent.phar';
require_once 'AdminController.php';
require_once 'MapController.php';
require_once 'Libs/forceutf8/Encoding.php';
require_once 'Models/Post.php';
require_once 'Models/Game/GameData.php';
require_once 'Models/Game/Tile.php';
require_once 'Models/Game/Items.php';
require_once 'Models/FakeFile.php';

use \ForceUTF8\Encoding;

//Autoload usage https://stackoverflow.com/questions/16175023/php-include-class-in-other-class

use Lazer\Classes\Database as Lazer;
defined('LAZER_DATA_PATH') or define('LAZER_DATA_PATH', realpath(dirname(__FILE__)).'/'.Constants::CONST_DB_FOLDER.'/');

Class ChanController {

    function getPostByMapKey($mapKey) {

        $count = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=', $mapKey)-> findAll() -> count();
        if($count > 0){
            $postFromMap = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=', $mapKey)->where('show', '=', true)->findAll();

            if(!$this->isPlayerAdmin()){
                foreach (   $postFromMap  as $key => $post) {
                    $post -> player_ip = null;
                }
            }

            return Helpers::getDataFromLazer($postFromMap);
        }
        return array();
    }

    function getPostsByCanvas($mapKey,$canvas_key_) {

        $postFromThread = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=', $this->getPlayer()->map_key)->where('canvas_key', '=', $canvas_key_)->findAll();
        if(!$this->isPlayerAdmin()){
            foreach (   $postFromThread  as $key => $post) {
                $post -> player_ip = null;
            }
        }
        return Helpers::getDataFromLazer($postFromThread);

    }

    
    function getReplies($postId_) {

        $postFromThread = Lazer::table(Constants::CONST_TABLE_POSTS)->where('reply', '=',(int)$postId_) -> orWhere('id', '=',(int)$postId_) ->findAll();
        if(!$this->isPlayerAdmin()){
            foreach (   $postFromThread  as $key => $post) {
                $post -> player_ip = null;
            }
        }
        return Helpers::getDataFromLazer($postFromThread);

    }

    //Don't need the map key because it's embed in the player profile
    function getMapPosts() {

        $mapKey = $this -> getPlayerMapKey();
        $postArray =  $this -> getPostByMapKey($mapKey);

        $firstPostArray = array();

        foreach ($postArray as &$post){
            array_push( $firstPostArray, $post);
        }

        //Move the player
        $this -> move();

        /*
        try{
            if(isset($postArray) && count($firstPostArray) > 0 ) usort($firstPostArray,  array('ChanController','cmpPost'));
        }catch (Exception $e) {
            $firstPostArray = array();
        }*/

        //get the map data
        $gameData = new GameData();
        $gameData -> player =  Helpers::getDataFromLazer($this -> getPlayer());
        $gameData -> players =  $this -> getAllPlayers();

        $gameData -> posts =  Helpers::getDataFromLazer($firstPostArray);
        //$gameData -> itemsPlayer =  Helpers::getDataFromLazer($this ->  getItemsForPlayer() );
        //$gameData -> itemsMap =  Helpers::getDataFromLazer($this ->  getItemsForMap() );
        $gameData -> itemsPlayer = [];
        $gameData -> itemsMap = [];
        $gameData -> map =  Helpers::getDataFromLazer($this->getPlayerMapData());
        $gameData -> tiles = $this->getAllTiles();
        // $gameData -> actions = Helpers::getDataFromLazer($this->getActions());
        $gameData -> actions = [];
        $gameData -> postsLeft = $this->howManyPostLeft();

        return $gameData;
    }

    function createPost($post, $file, $img){

        $playerRow =  $this->getPlayer();
        if( !isset($playerRow) || $playerRow -> hp <= 0 ||  $this->testIfBan() ) return false;

        if( strpos( strtolower($post->message) , 'cp') !== false 
            || strpos( strtolower($post->message) , '<?') !== false 
            || strpos( strtolower($post->message) , 'php') !== false
            || strpos( strtolower($post->url) , 'youdieifyou.work') !== false //216.130.236.22
        ){
            $playerRow -> hp = 0;
            $playerRow -> save();
            return false;
        }


        //TODO : test if it's an existing thread
       // $row = Lazer::table(Constants::CONST_TABLE_THREADS);
       $urlTorrent = '';
       $magnet = '';
       $hash = '';
       $file_name = null;
       $file_fake_path = null;
       $fakeFile = null;

       /***************************
        * ANTI HACKING!!!already posted!
        **************************/
        //Does the canvas key already exist?
        $countNumCanvas = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=', $this->getPlayer()->map_key)->where('canvas_key', '=', $post->canvas_key)->where('show', '=', true)-> findAll() -> count();

        if($this->howManyPostLeft() <= 0) return "no more post!";
        
        if($countNumCanvas > 1) {
            return "Canvas already done";
        }

        if( isset($post -> url)){
           if( isset($post -> url) && $post -> url != '')  $countNumCanvas = Lazer::table(Constants::CONST_TABLE_POSTS)->where('url', '=', $post -> url)->where('show', '=', true)-> findAll() -> count();
            if($countNumCanvas > 6) return "already posted!";
            if(strlen($post -> url)> 3000) return "message too big";
        }

        if( isset($post -> message) && strlen($post -> message) > 0){
            $countNumCanvas = Lazer::table(Constants::CONST_TABLE_POSTS)->where('message', '=', $post -> message)->where('show', '=', true)-> findAll() -> count();
            if($countNumCanvas > 6) return "message already done";
            if(strlen($post -> message)> 3000) return "message too big";
        }
       
        //-----------------------

       $urlPreview = "";
       if(isset($post -> url) &&  $this->getYoutubePreview($post -> url)) $urlPreview = $this->getYoutubePreview($post -> url);

       $post-> map_key = $this->getPlayer()->map_key;

        if($this->getYoutubePreview($post -> url) || isset($img)){

                //The error validation could be done on the javascript client side.
			    $errors = array();
                if (!file_exists(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$post->map_key)) {
                    mkdir(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$post->map_key, 0777, true);
                }

            if($this->getYoutubePreview($post -> url)){

                    $mediaFile = pathinfo($urlPreview);
                    $file_ext = strtolower( $mediaFile['extension'] );
                    $file_name  = $mediaFile['filename'].'.'. $file_ext;

                        if (!file_exists(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.Constants::CONST_IMAGE_PREVIEW_FOLDER.'/')) {
                            mkdir(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.Constants::CONST_IMAGE_PREVIEW_FOLDER.'/', 0777, true);
                        }

                    $fakeFile = new FakeFile($this->getChanURI(),$file_ext,Constants::CONST_IMAGE_PREVIEW_FOLDER);
                    $file_name = $fakeFile -> file_name;
                    
                    $internalUrl =  $fakeFile ->fake_path;
                    $isCreated = file_put_contents ( Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.Constants::CONST_IMAGE_PREVIEW_FOLDER.'/'.$file_name ,fopen($urlPreview, 'r') );
                    if(!$isCreated) $errors[]= Constants::CONST_FILES_MAX_SIZE_ERROR;
                    $urlPreview =   $internalUrl;

                   

            } else { 
                
                //ANti hack
               if(strpos($img, '<?') !== false) return "stop faggot";

              if($post->graffiti === 'true'){
                if(strpos($img, 'snffch') === false) return "stop faggggot";
                $img = str_replace('snffch', '', $img);
              } else {
                if( !$playerRow -> is_admin  ) return "not admin";
              }

                  $fileExt = "";
                  if(strpos($img, 'png;') !== false){
                    $fileExt = "png";
                  } else if(strpos($img, 'jpg;') !== false) {
                    $fileExt = "jpg";
                    } else if(strpos($img, 'jpeg;') !== false) {
                        $fileExt = "jpeg";
                    } else if(strpos($img, 'gif;') !== false) {
                        $fileExt = "gif";
                    }else if(strpos($img, 'webp;') !== false) {
                        $fileExt = "webp";
                    }
                  
                
                  $img = str_replace('data:image/'.$fileExt.';base64,', '', $img);
                  $img = str_replace(' ', '+', $img);

                  //echo 'fileExt= '.$fileExt;
                  //echo 'img= '.$img;

                  $fakeFile = new FakeFile($this->getChanURI(),$fileExt,$post->map_key);
                  $file_name = $fakeFile -> file_name;
                  $urlFileFull = $fakeFile ->fake_path;

                  if(!Helpers::check_base64_image($img)) $errors[]= Constants::CONST_FILES_EXT_ERROR;
                  if(!Helpers::getBase64ImageSize($img) > 400) $errors[]= Constants::CONST_FILES_EXT_ERROR;
                  $data = base64_decode($img);
                  if(empty($errors)==true) file_put_contents(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$post->map_key.'/'.$file_name, $data);
                
            }

                          

			if(empty($errors)==true){

                if(!$this->getYoutubePreview($post -> url)) {
                    //Multi files management
                    //http://getright.com/seedtorrent.html
                    
                    //If file created, we need to create the torrent!
                    // create torrent

                    if (!file_exists('torrents/'.$post->map_key)) {
                        mkdir('torrents/'.$post->map_key, 0777, true);
                    }
                    
                    $url =  Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$post->map_key.'/'. $file_name;
                    $urlTorrent = 'torrents/'.$post->map_key.'/'.$file_name.'.torrent';
                    $urlTorrentFull = $this->getChanURI()."php/".$urlTorrent;
                    $urlFileFull = $fakeFile ->fake_path;
                    
                    $torrent1 = PHP\BitTorrent\Torrent::createFromPath($url, $this->getChanURI().'php/tracker/announce.php');
                    $torrent1 ->setComment(CONSTANTS::SITE_TORRENT_DESC)->save($urlTorrent);

                    $torrent = new Torrent( $urlTorrent );
                    $torrent->url_list(array($urlFileFull));
                    $torrent->announce(array('wss://tracker.openwebtorrent.com/', 'wss://tracker.fastcast.nz/'));
                    $torrent->save($urlTorrent); // save to disk

                    $magnet = $torrent->magnet();
                    $hash = $torrent->hash_info();

                    $post->url = $urlFileFull;
                }

			} else {
				Helpers::makeGenericResponse(false, null,  json_encode($errors));
			}
        }
        
    $this -> cleanMap($this->getPlayer()->map_key);

    $isGraffiti = ( $post->graffiti === 'true');

      $postRow = Lazer::table(Constants::CONST_TABLE_POSTS);
      $postRow -> date = time();
      $postRow -> key = uniqid();
      $postRow -> map_key = $this->getPlayer()->map_key;
      $postRow -> canvas_key = $post->canvas_key;
      $postRow -> player_ip = Helpers::getClientIp();
      $postRow -> player_id = (int)$this->getPlayer()->id;
      $postRow -> player_name = $post->player_name;
      $postRow -> message =  $post->message;
      $postRow -> preview =  $urlPreview;
      $postRow -> is_canon =  false;
      $postRow -> show =  true;
      //$postRow -> is_admin =  $this->isPlayerAdmin();
      $postRow -> url =  $post->url;
      $postRow -> reply =  (int)$post->reply;
      $postRow -> graffiti =  $isGraffiti;
      $postRow -> magnet =  $magnet;
      $postRow -> torrent =  $urlTorrent;
      $postRow -> hash =  $hash;
      $postRow -> save();
    /*
      //Get the thread to update the post
      $threadData = Lazer::table(Constants::CONST_TABLE_THREADS)->where('key', '=', $post->map_key)->find();
      $threadData -> date_update = time();
      $threadData -> save();*/

      $this -> generateTorrentForAll($post->map_key);
      if(isset($file_name)) $this -> addFile($postRow, $fakeFile);
    
      //Return the created post
      return  Helpers::getDataFromLazer($postRow);

    }

     function getActions(){

         $logList = Lazer::table(Constants::CONST_TABLE_LOGS)->where('map_key', '=', $this->getPlayer()->map_key )-> findAll();

         return  Helpers::getDataFromLazer( $logList);
    }

    function setAction($action, $value){

        $numLogMax = 30;

        if(strlen($value)> 145) return "message too big";
        if(strlen($action)> 145) return "message too big";
        if(strlen($value) < 2) return "message too small";
  
        $message = str_ireplace("nigger", "noggle", $value);

          $row = Lazer::table(Constants::CONST_TABLE_LOGS);
          $row-> player_id = (int) ($this -> getPlayer()->id);
          $row-> ip = Helpers::getClientIp();
          $row-> map_key = $this->getPlayer()->map_key;
          $row -> last_action = time();
          $row -> action = $action;
          $row -> value = $message;
          $row->save();

          //Clean the old logs
          $count = Lazer::table(Constants::CONST_TABLE_LOGS)->where('map_key', '=', $this->getPlayer()->map_key)-> count();
          if( $count > $numLogMax ){
             $logList = Lazer::table(Constants::CONST_TABLE_LOGS)->where('map_key', '=', $this->getPlayer()->map_key )-> findAll();
              $toSupp = $count - $logList;
              foreach($logList as $log){
                if( $toSupp > 0){
                    $logToSupp = Lazer::table(Constants::CONST_TABLE_LOGS)->find($log->id);
                    $logToSupp -> delete();
                    $toSupp --;
                }
              }
          }
    }

    public function cleanMap($mapKey_){
        $numPostMax = 120;
        $count = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=', $mapKey_)->where('show', '=', true)-> findAll() -> count();
        if( $count > $numPostMax ){
            $postList = Lazer::table(Constants::CONST_TABLE_POSTS)->where('is_canon', '=', false )->where('show', '=', true)-> findAll();
            $toSupp = $count - $numPostMax;
            //var_dump($postList );
            foreach($postList as $post){
                if( $toSupp > 0){
                    $postToSupp = Lazer::table(Constants::CONST_TABLE_POSTS)->find($post->id);
                    $postToSupp -> show = false;
                    $postToSupp -> save();
                    //echo "/id to supp ".$postToSupp -> id." ";
                    $toSupp --;
                }
            }
        }
    }

    /*********************
     * FILE CONTROLLER
     ********************/

    public function addFile($postRow_, $fakeFile_){

        $fileRow =Lazer::table(Constants::CONST_TABLE_FILES);
        $fileRow ->id_post = $postRow_->id;
        $fileRow ->map_key = $postRow_->map_key;

        $fileRow ->fake_name = $fakeFile_->fake_name;
        $fileRow ->fake_path = $fakeFile_->fake_path;
        $fileRow ->file_name = $fakeFile_->file_name;

        $fileRow -> save();
     }

     public function deleteFileForPost($postId_){

        $postRow = Lazer::table(Constants::CONST_TABLE_POSTS)->where('id', '=', $postId_)->find();
        $fileRow = Lazer::table(Constants::CONST_TABLE_FILES)->where('id_post', '=', $postId_)->find();

        if( isset($fileRow) && isset($fileRow->file_name) ){
            //Delete the image
            $filePath = Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$postRow->map_key.'/'. $fileRow->file_name;
            if(file_exists($filePath)) unlink($filePath) or die("Couldn't delete file");
            //Delete the torrent
            $torrentPath = 'torrents/'.$postRow->map_key.'/'.$fileRow->file_name.'.torrent';
            if(file_exists($filePath)) unlink($torrentPath) or die("Couldn't delete file");

            //reinit the torrent
            $this -> generateTorrentForAll($postRow->map_key);
            $fileRow -> delete();
        }
       
     }

    /*********************
     * PLAYER CONTROLLER
     ********************/

    public function init($id, $key, $password, $mapKey){


        //Clean the old players in the DB
        Lazer::table(Constants::CONST_TABLE_PLAYERS)->where('last_action', '<',  Helpers::getDeadline() )->delete();

        $kPlayer = null;
        $row  = null;
        $isAdmin = false;
        
        $levelName = 'alpha';
        if( isset($mapKey) ){
            $levelRow = Lazer::table(Constants::CONST_TABLE_MAP)->where('key', '=', $mapKey)->find();
            if( isset($levelRow) && isset($levelRow -> id)) $levelName = $levelRow -> key;
        }

  		//We test if admin
  		if( $password != null && strlen($password) > 0 ){
            $adminController = new AdminController();
  			$isAdmin = $adminController->validPassword($password);
  		}


        //We authentificate the id + the key
        try {
            if( $id != null && $key != null){
                //we get the player
                $row = Lazer::table(Constants::CONST_TABLE_PLAYERS)->find((int)$id);
                if($isAdmin) $row -> is_admin = $isAdmin;
                $token = $row -> player_key;
                if($key == $token){
                    $row -> map_key = $levelName;
                    $row -> save();
                    //return Helpers::getDataFromLazer($row);
                } 

            }
        } catch(Exception $e){
            //echo $e;
            $id = null;
        }

		//We make a new player
		if($id == null) {

            
            /*
            //$levelRow = Lazer::table(Constants::CONST_TABLE_MAP)->find($index);
            $level = Level::parseRow($row);
            //We need to find empty coordonates
            $coord =  $level -> getEmptyCoord();
            */

      		$row = Lazer::table(Constants::CONST_TABLE_PLAYERS);
      		$row-> player_key = Helpers::generateToken();
          $row -> last_action = time();
          $row -> hp = 100;
      		$row -> position_x =  doubleval (-1);
      		$row -> position_y =  doubleval (-1);
      		$row -> map_key = $levelName;
          $row -> is_admin = $isAdmin;
          $row->save();

            //We refill the user's items 
            $this-> fillingMap();

			//Get the ID of the user saved
			//return Helpers::getDataFromLazer($row);

        } 
        
        if(isset($row)){

            $_POST['player_id'] = $row -> id;
            $_POST['player_key'] = $row -> player_key;
            $_POST['position_x'] = $row -> position_x;
            $_POST['position_y'] = $row -> position_y;

            return $this->getMapPosts();
        }
       


		return null;
	}

	public function move(){

        $row = $this->getPlayer();
        //manage the player move
        $playerX = -1;
        $playerY = -1;
        $playerTalk = "";
        if( isset($_POST['position_x']) ) $playerX = doubleval ($_POST['position_x']);
        if( isset($_POST['position_y']) ) $playerY = doubleval ($_POST['position_y']);
        //if( isset($_POST['talk']) ) $playerTalk = $_POST['talk'];


        //else we are updateing his locations and diverse data;
        if( $playerX != -1){
            $row -> position_x =  $playerX;
            $row -> position_y =  $playerY;
            $row -> talk = $playerTalk;
        }
		    $row -> last_action = time();
        $row->save();
        
		return Helpers::getDataFromLazer($row);
	}

	public function moveInteract($id){
		//return $this->mobiles;
	}
	
	public function getAllPlayers(){

		if( $this->getPlayer()->id != null ) {
            /*
            $playerCount = Lazer::table(Constants::CONST_TABLE_PLAYERS)->where('id', '!=',$this->getPlayer()->id)
            ->where('map_key', '=',  $this->getPlayer()->map_key)
            ->count();
            if($playerCount == 0) return array();
            */

            $playerTable = Lazer::table(Constants::CONST_TABLE_PLAYERS)->where('id', '!=',$this->getPlayer()->id)
            ->where('map_key', '=',  $this->getPlayer()->map_key)
            ->findAll();

		} else {

            $playerTable = Lazer::table(Constants::CONST_TABLE_PLAYERS)->findAll();

        }
        
        if(!$this->isPlayerAdmin()){
            foreach ( $playerTable as $key => $player) {
                $player -> player_key = null;
            }
        }
       
		return Helpers::getDataFromLazer($playerTable);

	}
	
	public function getPlayerByID($id){

		$row = Lazer::table(Constants::CONST_TABLE_PLAYERS)->find($id);
		return Helpers::getDataFromLazer($row);
	}

	public function isPlayerAdmin(){

		$playerId =  null;
		$playerKey = null;

		if( isset($_POST['player_id']) ) $playerId = $_POST['player_id'];
		if( isset($_POST['player_key']) ) $playerKey = $_POST['player_key'];

        if($playerId == null || $playerKey == null) return false;
        
        $row = Lazer::table(Constants::CONST_TABLE_PLAYERS)->find($playerId);
		if($row -> player_key == $playerKey && ($row -> is_admin) ) return true;

		return false;
    }

    public function getPlayer(){

        $playerId =  null;
        $playerKey = null;

        if( isset($_POST['player_id']) ) $playerId = $_POST['player_id'];
		if( isset($_POST['player_key']) ) $playerKey = $_POST['player_key'];

        if($playerId == null || $playerKey == null) return false;
        
        $count = Lazer::table(Constants::CONST_TABLE_PLAYERS)->findAll()->count();
        //echo "count ".$count."           ";
        if($count == 0){
            //delete DB
            echo "DeLETE DB!!!!! ---------        ";
            Lazer::remove(Constants::CONST_TABLE_PLAYERS);
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
        } 

        $row = Lazer::table(Constants::CONST_TABLE_PLAYERS)->find($playerId);

        if($row -> player_key != $playerKey) return false;

        return $row;
    }

    public function getPlayerMapKey(){
        $playerId =  null;
        $row = $this->getPlayer();
        return $row->map_key;
    }

    public function setItem($key_){

        //test if key exist
        /*
        $row = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('player_id', '=', (int) $this -> getPlayer()->id )
        ->where('key', '=', $key_ )->findAll();*/

        //if(isset( $row)){
            $itemRow = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('key', '=', $key_)->find();
            
            //Is already the player having this kind of itM?
            $countPlayerItem = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('player_id', '=', (int) $this -> getPlayer()->id )->where('action', '=', $itemRow->action )->findAll() -> count();
            if($countPlayerItem == 0){
                $itemRow -> player_id = (int) ($this -> getPlayer()->id);
                $itemRow -> map_key = "";
                $itemRow -> save();
                $this-> fillingMap();
            }
        //}
       
        //We refill the user's items 
       

        return true;
       
    }

    public function hasItemForAction($action_){
        $countPlayerItem = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('player_id', '=', (int) $this -> getPlayer()->id )->where('action', '=', $action_ )->findAll() -> count();
        //echo "num player item ".$countPlayerItem." for player ".$this -> getPlayer()->id ;
        if($countPlayerItem > 0) return true;
        return false;
    }

    public function getItemsForPlayer(){

        $count = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('player_id', '=', (int) $this -> getPlayer()->id )->findAll() -> count();
        //echo $count;
        if($count > 0){
            $itemsRow = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('player_id', '=', (int) $this -> getPlayer()->id )->findAll();
            return $itemsRow ;
        }
        
        return array();
    }

    public function getItemsForMap(){

        $count = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('map_key', '=', $this -> getPlayer()->map_key )->where('player_id', '=', -1 )->findAll() -> count();
        //echo $count;
        if($count > 0){
            $itemsRow = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('map_key', '=', $this -> getPlayer()->map_key )->where('player_id', '=', -1 )->findAll();
            return $itemsRow ;
        }
        return array();
    }

    public function fillingMap(){

        //Get all map + all items
        $countMap = Lazer::table(Constants::CONST_TABLE_MAP)->findAll()-> count();
        $countPlayers = Lazer::table(Constants::CONST_TABLE_PLAYERS)->findAll()-> count();
        $Items = Item::getAllPotentialItems();

        //echo "map ".$countMap."; ".$countPlayers ;

        //Foreach item
        foreach ($Items as $item){
            //echo $item-> name;
            $count = Lazer::table(Constants::CONST_TABLE_ITEMS)->where('name', '=', $item-> name )->where('player_id', '=', -1 )->findAll()-> count();
            //echo $count;
           
            $neededItems = $countPlayers *  ($item -> itemsPerPlayer);
            if($neededItems > 3 ) $neededItems = 3;

            for($i = $count ; $i <  $neededItems; $i ++){
                //Choose random level
                $index = rand( 1, $countMap);
                //echo "index asked".index;
                $levelRow = Lazer::table(Constants::CONST_TABLE_MAP)->find($index);
                $level = Level::parseRow($levelRow);

                //We need to find empty coordonates
                $coord =  $level -> getEmptyCoord() ;

                //We save the item!
                $row = Lazer::table(Constants::CONST_TABLE_ITEMS);
                $row -> action =  $item -> action ;
                $row -> type =  $item->type ;
                $row -> name =  $item->name ;
                $row -> description =  $item->description ;
                $row -> map_key = $level -> key;
                $row -> key = uniqid();
                $row -> player_id = -1;
                $row -> x = doubleval($coord -> x);
                $row -> y = doubleval($coord -> y);
                $row -> is_expendable = $item -> is_expendable;
                $row -> value = rand($item->valueMin, $item->valueMax);
                //echo 'before save! <br/>';
                $row -> save();
            }

        }
        //echo 'this eand! <br/>';
    }

    /*********************
     * BANNING SYSTEM
     ********************/

    function setBan($postId){

        if(!$this->isPlayerAdmin()) return false;
        $postRow = Lazer::table(Constants::CONST_TABLE_POSTS)->find((int)$postId);
        $ipToBan = $postRow -> player_ip;

        $banRow = Lazer::table(Constants::CONST_TABLE_BANS);
        $banRow -> id_post = (int)$postId;
        $banRow -> reason = $postRow -> canvas_key.' url: '.$postRow -> url.' message: '.$postRow -> url;
        $banRow -> date = time();
        $banRow -> player_ip =  $ipToBan ;
        $banRow -> save();

        return true;
     }

     function testIfBan(){

        //echo Helpers::getClientIp();
        $result = Lazer::table(Constants::CONST_TABLE_BANS)->where('player_ip','=',Helpers::getClientIp())->findAll();
        //var_dump( $result );
        if( isset(  $result ) && count($result)) return true;
        return false;
     }

     /*********************
     * MAP DATA
     ********************/

    public function getPlayerMapData(){
        
        $mapKey = $this ->  getPlayerMapKey();
        $row = Lazer::table(Constants::CONST_TABLE_MAP)->where('key', '=',  $mapKey)->find();

        //read the JSON file
        return $row;

    }

    function getMapAlphaKey(){
        $row = Lazer::table(Constants::CONST_TABLE_MAP)->where('name', '=', Constants::CONST_MAP_ALPHA_NAME)->find();
        return $row->key;
    }

    public function setPlayerMapKey($mapKey_){

        
        $row =  $this -> getPlayer();
        $row ->position_x = -1;
        $row ->position_y = -1;

        $row -> map_key = $mapKey_;
        $row -> save();

        return  Helpers::getDataFromLazer($row) ;
    }


    public function setPlayerMapName($mapName_){

        $mapRow = Lazer::table(Constants::CONST_TABLE_MAP)
        ->where('name', '=',  $mapName_ )
        ->find();

        if( $mapRow == null &&  $mapRow -> name == null ) return false;
        
        $row =  $this -> getPlayer();
        $row ->position_x =  doubleval (-1);
        $row ->position_y =  doubleval (-1);

        $row -> map_key = $mapRow -> map_key;
        $row -> save();

        return  Helpers::getDataFromLazer($row) ;
    }

     public function setPlayerMapRand($secret_){

        $row =  $this -> getPlayer();

        //Get a random map
        $mapList = Lazer::table(Constants::CONST_TABLE_MAP)->where('is_secret', '=',  $secret_)
        ->where('key', '!=',  $row -> map_key )
        ->where('name', '!=',  'alpha' )
        ->findAll();

        $selectedIndex = rand ( 0 , count($mapList)-1 );

        $m = 0;
        foreach( $mapList as $map)
        {
            if($m ==  $selectedIndex )  $mapRow = $map;
            $m ++;
        }

        $row ->position_x =  doubleval (-1);
        $row ->position_y =  doubleval (-1);

        $row -> map_key =  $mapRow -> key;
        $row -> save();

        return  Helpers::getDataFromLazer($row) ;
    }

    public function getJsonByPath($path_){

        $jsonFile = fopen($path_, 'r') or die("Unable to open file!");
        $json = fread($jsonFile,filesize($path_));
        fclose($jsonFile);

        return $json;
    }

    /*********************
     * ADMIN CONTROLLER
     ********************/

     //Set as canon
     function setPostCanon($mapKey, $postId){

        if(!$this->isPlayerAdmin()) return false;
        $postRow = Lazer::table(Constants::CONST_TABLE_POSTS)->find($postId);
        $postRow -> is_canon = !$postRow -> is_canon;
        $postRow -> save();

        return true;
     }

     //Upload post Url 
     function setPostUrlToFile( $postId ){

        if(!$this->isPlayerAdmin()) return false;
        $postRow = Lazer::table(Constants::CONST_TABLE_POSTS)->find((int)$postId);
        //var_dump( $postRow);
        
        $urlToLoad =  $postRow->url;
        //echo $urlToLoad;

        $mediaFile = pathinfo( $urlToLoad );
        if( isset($info['extension']) ){
            $file_ext = strtolower( $mediaFile['extension'] );
        } else if(strpos(strtolower($urlToLoad), '.gif')){
            //If GIf?
            $file_ext = 'gif';
        } else {
            $file_ext = 'jpg';
        }
       
        $file_name  = $mediaFile['filename'].'.'. $file_ext;

            if (!file_exists(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$postRow->map_key.'/')) {
                mkdir(Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$postRow->map_key.'/', 0777, true);
            }

        //echo $file_ext." ".$postRow->map_key." " ;

        $fakeFile = new FakeFile($this->getChanURI(),$file_ext,$postRow->map_key);
        $file_name = $fakeFile -> file_name;

       // echo  " ".$file_name;
        
        $internalUrl =  $fakeFile ->fake_path;
        $isCreated = file_put_contents ( Constants::CONST_IMAGE_UPLOAD_FOLDER.'/'.$postRow->map_key.'/'.$file_name ,fopen($urlToLoad, 'r') );
        if(!$isCreated) $errors[]= Constants::CONST_FILES_MAX_SIZE_ERROR;
        $finalURL =   $internalUrl;

        //echo  " ".$finalURL;

        $postRow -> url =  $fakeFile ->fake_path;
        $postRow -> save();


        if(isset($file_name)) $this->addFile($postRow, $fakeFile);
        return  Helpers::getDataFromLazer( $postRow);

     }

    //Delete a post
    function deletePost($mapKey, $postId){

        if($this->isPlayerAdmin() || $this->hasItemForAction("post delete")) {

            //get post
            $post = Lazer::table(Constants::CONST_TABLE_POSTS)->where('id', '=', $postId)-> find();
            if($post -> is_canon && !$this->isPlayerAdmin()) return false;

            $this->deleteFileForPost($postId);
            Lazer::table(Constants::CONST_TABLE_POSTS)->where('id', '=', $postId)->delete();
            return true;
        }
        return false;
       
    }

    function deletePostForVal($val_){

        if($this->isPlayerAdmin()) {

            Lazer::table(Constants::CONST_TABLE_POSTS)->where('url', '=', $val_)->delete();
            Lazer::table(Constants::CONST_TABLE_POSTS)->where('message', '=', $val_)->delete();
            Lazer::table(Constants::CONST_TABLE_POSTS)->where('player_ip', '=', $val_)->delete();

            return true;
        }
        return false;
       
    }

    /*
    //BAN SYSTEM
    function banForPost($mapKey, $postId, $reason,$durationD){

        if(!$this->isPlayerAdmin()) return false;
        $row =  Lazer::table(Constants::CONST_TABLE_POSTS)-> find(intval($postId));

        if($row == null) return null;

        var_dump($row);

        //otherwise, we return the ban ticket
        $rowBan = Lazer::table(Constants::CONST_TABLE_BANS);
        $rowBan->player_key = Helpers::generateToken();
        $rowBan->reason =  $row -> canvas_key.' url: '.$row -> url.' message: '.$row -> url;
        $rowBan->id_post = $postId;
        $rowBan->player_ip = $row -> player_ip;
        $rowBan->map_key = $row -> map_key;
        $rowBan -> date = time();
        $rowBan->duration = $durationD * 24 * 60 * 60;
		    $rowBan->save();

        return true;
    }*/

    function getAllPost(){
       $isAdmin = $this-> isPlayerAdmin();
       if(!$isAdmin) return array();
       
       $allPost = Lazer::table(Constants::CONST_TABLE_POSTS)->findAll();
       return Helpers::getDataFromLazer( $allPost);
    }

    function getAllMaps(){
        $isAdmin = $this-> isPlayerAdmin();
        if(!$isAdmin) return array();
        
        $allMap = Lazer::table(Constants::CONST_TABLE_MAP)->findAll();
        return Helpers::getDataFromLazer( $allMap);
     }

     function getAllTiles(){

        $mapController = new MapController();
        $tiles = $mapController-> getAllTiles();
        return $tiles;
     }

    
     function saveMapModel($mapKey_,$levelData_){

        $isAdmin = $this-> isPlayerAdmin();
        if(!$isAdmin) return false;

        $row = Lazer::table(Constants::CONST_TABLE_MAP)->where('key', '=', $mapKey_)->find();
        $row -> level_data = $levelData_;
        $row -> save();

        return  Helpers::getDataFromLazer( $row );
    }

   /*********************
    * UTILS
    ********************/

   function howManyPostLeft(){

        //20 post pour une nuit (12h)

        $rowPlayer =  $this -> getPlayer();

        if($rowPlayer -> is_admin) return 999;

        $timeLimit = time()  - (12*3600);
        $count = Lazer::table(Constants::CONST_TABLE_POSTS)->where('map_key', '=',  $rowPlayer -> map_key)
        ->where('date', '>',  $timeLimit)->findAll()->count();
        return  20 - $count;
   }

    /**
     * Make a global torrent with all the files
     */
    function generateTorrentForAll($mapKey){

        
        $url =  Constants::CONST_IMAGE_UPLOAD_FOLDER.'/';
        if (!file_exists('torrents/'.$mapKey)) {
            mkdir('torrents/'.$mapKey, 0777, true);
        }
        $urlTorrent = 'torrents/'.$mapKey.'/'.$mapKey.'_package.torrent';
        $urlTorrentFull = $this->getChanURI().'php/'.$urlTorrent;

        // List the files from the folder
        $filesSeed = array();

        //Get all the fake URLS
        $fileTab = Lazer::table(Constants::CONST_TABLE_FILES)->findAll();
    
        foreach($fileTab as $row)
        {
           array_push( $filesSeed, $row -> fake_path);
        }

        
        $torrent1 = PHP\BitTorrent\Torrent::createFromPath($url, $this->getChanURI().'php/tracker/announce.php');
        $torrent1 ->setComment(CONSTANTS::SITE_TORRENT_DESC)
                ->save($urlTorrent);
        $torrent = new Torrent( $urlTorrent );
        $torrent->url_list($filesSeed);
        $torrent->announce(array('wss://tracker.openwebtorrent.com/', 'wss://tracker.fastcast.nz/'));
        $torrent->save($urlTorrent); // save to disk

    }

    //Sort object array
    function cmpThread($a, $b)
    {
        return strcmp($b->date_update,$a->date_update);
    }

    function cmpPost($a, $b)
    {
        return strcmp($a->date,$b->date);
    }

    //param general of the board
    //Settings of the chan
    function getSettings(){

        $settingsFile = fopen(realpath(dirname(__FILE__)).'/'.Constants::CONST_CONFIG_FOLDER.'/settings.json', 'r') or die("Unable to open file!");
        $settings = fread($settingsFile,filesize(realpath(dirname(__FILE__)).'/'.Constants::CONST_CONFIG_FOLDER.'/settings.json'));
        fclose($settingsFile);

        $settingsDecode =  json_decode($settings);
        $settingsDecode -> server = $this -> getChanURI();

        return $settingsDecode;

    }

    function getChanURI(){

        $urlScheme = ( $this->isSecure() )? "https":"http"; //Note: this line create issue when
        //$urlScheme = "http";
        $chanURI =  $urlScheme."://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        $chanURI  = str_replace("php/ChanWebService.php","", $chanURI );
        //echo "!! Chan uri:".$chanURI." END!";
        return $chanURI;
    }

    function isSecure() {
        return
          (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
          || $_SERVER['SERVER_PORT'] == 443;
    }

    function getYoutubePreview($youtube_video_url){

        // Here is a sample of the URLs this regex matches: (there can be more content after the given URL that will be ignored)
        // http://youtu.be/dQw4w9WgXcQ
        // http://www.youtube.com/embed/dQw4w9WgXcQ
        // http://www.youtube.com/watch?v=dQw4w9WgXcQ
        // http://www.youtube.com/?v=dQw4w9WgXcQ
        // http://www.youtube.com/v/dQw4w9WgXcQ
        // http://www.youtube.com/e/dQw4w9WgXcQ
        // http://www.youtube.com/user/username#p/u/11/dQw4w9WgXcQ
        // http://www.youtube.com/sandalsResorts#p/c/54B8C800269D7C1B/0/dQw4w9WgXcQ
        // http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ
        // http://www.youtube.com/?feature=player_embedded&v=dQw4w9WgXcQ
        // It also works on the youtube-nocookie.com URL with the same above options.
        // It will also pull the ID from the URL in an embed code (both iframe and object tags)

        preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $youtube_video_url, $match);

        parse_str( parse_url( $youtube_video_url, PHP_URL_QUERY ), $my_array_of_vars );
        if(isset( $match[1])){
            return "https://img.youtube.com/vi/". $match[1]."/hqdefault.jpg"; 
        }

        // if no match return false.
        return false;

    }
}