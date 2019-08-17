<?php

/*
    __  ___               ______            __             ____         
   /  |/  /___ _____     / ____/___  ____  / /__________  / / /__  _____
  / /|_/ / __ `/ __ \   / /   / __ \/ __ \/ __/ ___/ __ \/ / / _ \/ ___/
 / /  / / /_/ / /_/ /  / /___/ /_/ / / / / /_/ /  / /_/ / / /  __/ /    
/_/  /_/\__,_/ .___/   \____/\____/_/ /_/\__/_/   \____/_/_/\___/_/     
            /_/                                                                                                               

-create a new map
-change an old map
-get map data
-----------------
-get tile values

*/

ini_set('display_errors', 1);

require_once "Utils/Constants.php";
require_once "Imports/LazerImports.php";
require_once 'Utils/Helpers.php';

require_once 'Models/Game/Coord.php';
require_once 'Models/Game/Level.php';
require_once 'Models/Game/Tile.php';

use \ForceUTF8\Encoding;

//Autoload usage https://stackoverflow.com/questions/16175023/php-include-class-in-other-class

use Lazer\Classes\Database as Lazer;
defined('LAZER_DATA_PATH') or define('LAZER_DATA_PATH', realpath(dirname(__FILE__)).'/'.Constants::CONST_DB_FOLDER.'/');


Class MapController {

    /***************************
     * SAVING AND GETTIGNS DATA
    ***************************/

    function createLevel($level) {

		$row = Lazer::table(Constants::CONST_TABLE_MAP);
		$row = $level ->fillRow($row);
		$row->save();
    }

    function placePlayerFromTo($to_,$from_){

        $row = Lazer::table(Constants::CONST_TABLE_MAP)->where('key', '=', $to_)->find();
        $level = Level::parseRow($row);

        //get the future player coordonates
        $coord =  $level -> placePlayerForKey($from_);

        //return Coord
        return $coord;
    }

    function getAllTiles(){
        return Tile::getAllTiles();
    }

    /**************************
     * MAP PROCEDURAL GENERATION
     *************************/

    function generateWorld(){

        //importnat VARS
        $gridData;
        $gridWidth = 2;
        $gridHeight = 2;

        $levelToPlace;
        $levelNumMax;
        $levelWidthMax;
        $levelHeightMax;

        //1. generate the dungeon grid
        $gridData = $this->fillgrid(null, $gridWidth, $gridHeight);

        $levelToPlace = array();

        array_push($levelToPlace, new Level(Constants::CONST_MAP_ALPHA_NAME, 15, 13, true, true));
        array_push($levelToPlace, new Level("request", 15, 13, true, false) );
        array_push($levelToPlace, new Level("conspi", 15, 13, true, false) );
        array_push($levelToPlace, new Level("art", 15, 13, true, false) );

        array_push($levelToPlace, new Level("lulz", 15, 13, true, true) );
        /*
        $size = Level::getDim(26);
        array_push($levelToPlace, new Level("tripletrap", $size->x, $size->y, true));
        $size = Level::getDim(26);
        array_push($levelToPlace, new Level("pol", $size->x, $size->y, true) );
        $size = Level::getDim(26);
        array_push($levelToPlace, new Level("senpai", $size->x, $size->y, true));
        $size = Level::getDim(26);
        array_push($levelToPlace, new Level("varg", $size->x, $size->y, true) );
        $size = Level::getDim(26);
        array_push($levelToPlace, new Level("crypto", $size->x, $size->y, true) );*/

        //2. place the main level on this grid
        /*
        foreach ($levelToPlace as $lvl){
            $coord = $this->pickPointFromGrid($gridData , $gridWidth, $gridHeight );
            if(isset($coord)){
                $gridData = $this->placeToGrid($gridData, $lvl, $gridWidth, $gridHeight, $coord );
                $lvl -> x = $coord-> x;
                $lvl -> y = $coord-> y;
            } 
        }*/

        //Genrate room for missing points
        /*
        $emptyCoord = $this->getCoordsFor($gridData, NULL, $gridWidth, $gridHeight);

        for($l = 0; $l <  count($levelToPlace); $l++){
            $index = rand(0, count($emptyCoord)-1 );
            $coord = $emptyCoord[$index];
            $level = new Level("???", rand(2,7), rand(2,7), false );
            $gridData = $this->placeToGrid($gridData,  $level , $gridWidth, $gridHeight, $coord);
            array_splice($emptyCoord, $index, 1);
            $level-> x = $coord-> x;
            $level-> y = $coord-> y;
            if(count($emptyCoord) < 1) break;
        }*/

        $this->displayGrid($gridData, $gridWidth, $gridHeight, true);


        //3. each level need to have at least 1 door
        /*
        $allLevels =  $this->getAllLevels($gridData);
        foreach ($allLevels as $lvl){

            $dir = 0;
            $numDoors = rand(1,2);

            for( $dir; $dir < 3; $dir ++ ){

                //CAUTION level found are the door on the other direction!!!
                
                $levelFound = null;
                $oppDir;
                $coord = new Coord($lvl-> x, $lvl-> y);

                //South
                if($dir == 2 ){

                    $levelFound = $this->getLevelForDir($gridData, $gridWidth, $gridHeight, $coord,$dir);
                    if(isset( $levelFound->door_key_N ))  $levelFound = null;
                    $oppDir = 0;
                
                }
                
                //West
                if($dir == 3 ){

                    $levelFound = $this->getLevelForDir($gridData, $gridWidth, $gridHeight, $coord,$dir);
                    if(isset( $levelFound->door_key_E ))  $levelFound = null;
                    $oppDir = 1;

                }

                //North
                if($dir == 0){

                    $levelFound = $this->getLevelForDir($gridData, $gridWidth, $gridHeight, $coord,$dir);
                    if(isset( $levelFound->door_key_S ))  $levelFound = null;
                    $oppDir = 2;
                
                }

                //East
                if($dir == 1 ){

                    $levelFound = $this->getLevelForDir($gridData, $gridWidth, $gridHeight, $coord,$dir);
                    if(isset( $levelFound->door_key_W ))  $levelFound = null;
                    $oppDir = 3;

                }

                if( isset($levelFound) && $numDoors > 0){
                    $levelFound -> setKeyForDir($lvl->key, $oppDir);
                    $lvl-> setKeyForDir($levelFound->key, $dir);
                    $numDoors --;
                }
            }  

            //echo $lvl->name." has ".$lvl->getNumDoors()." doors<br/>";

        }*/

        //Get the level
        foreach ($levelToPlace as $lvl){
            $lvl -> initLevelData();
            $this->createLevel($lvl);
        }

    }

    /****************************
     *  UTILS for PROCEDURAL
     * Generation
    ****************************/

    function fillgrid($defaultTile_,  $width_, $height_){

        $newGrid = array();
        for ($i = 0; $i < ($height_*$width_); $i++) {
            array_push($newGrid,$defaultTile_);
        }
    
        return $newGrid;
    }
    
    function pickPointFromGrid($gridData,  $width_, $height_ ){
      
        for ($i = 0; $i < 10; $i++) {
    
            $x = rand ( 0 , $width_-1);
            $y = rand ( 0 , $height_-1);
    
            //is grid coordonate occupped?
            $val = $gridData[ ($y*$height_) + $x];
            if( !isset($val)) return new Coord($x, $y);
        }
    
        return NULL;
    }
    
    function placeToGrid($gridData, $data, $width_, $height_, $coord){
        $gridData[ ( $coord->y *$width_) + $coord->x] =  $data;
        return  $gridData;
    }
    
    function  getLevelForCoord($gridData_, $coord_, $width_, $height_){
        return  $gridData_[ ( $coord_->y *$width_) + $coord_->x];
    }
    
    
    
    function getCoordsFor($gridData, $data, $width_, $height_){
        $listData = array();
    
        for ($y = 0; $y < $height_; $y++) {
    
            for ($x = 0; $x < $width_; $x++) {
                if( $gridData[ ($y*$width_) + $x]  == $data) array_push($listData, new Coord($x, $y));
            }
    
        }
        return $listData;
    }
    
    /**
     * Get all the levels from the griddata
     * Return Level[] array;
     */
    function getAllLevels($gridData){
        $levels = array();
        foreach ($gridData as $lvl){
            if(isset($lvl)) array_push($levels,$lvl);
        }
        return  $levels;
    }
    
    function displayGrid($gridData_,  $width_, $height_, $is_null){
    
        for ($y = 0; $y < $height_; $y++) {
    
            for ($x = 0; $x < $width_; $x++) {
                if( !isset($gridData_[($y*$width_) + $x]) || !isset($gridData_[ ($y*$width_) + $x] -> name)){
                    echo ".";
                } else {
                    $name = $gridData_[ ($y*$width_) + $x] -> name;
                    echo substr($name,0,1);
                }
            }
    
            echo "<br/>";
    
        }
    }
    
    function getLevelForDir($gridData_, $width_, $height_, $coord_,$dir_){
    
        switch($dir_){
    
            case 0:
                for ($y = $coord_->y -1; $y >= 0; $y--) {
                    $coord = new Coord( $coord_->x,$y);
                    $level = $this->getLevelForCoord($gridData_, $coord, $width_, $height_);
                    if(isset($level)) return $level;
                }
            break;
    
            case 1:
    
            for ($x = $coord_->x +1; $x < $width_; $x++) {
                $coord = new Coord( $x,$coord_->y);
                $level = $this->getLevelForCoord($gridData_, $coord, $width_, $height_);
                if(isset($level)){
                    return $level;
                } 
            }
            break;
    
    
            case 2:
                for ($y = $coord_->y +1; $y <  $height_; $y++) {
                    $coord = new Coord( $coord_->x,$y);
                    $level = $this->getLevelForCoord($gridData_, $coord, $width_, $height_);
                    if(isset($level)) return $level;
                }
            break;
    
            case 3:
            
            for ($x = $coord_->x -1; $x >= 0; $x--) {
                $coord = new Coord( $x,$coord_->y);
                $level = $this->getLevelForCoord($gridData_, $coord, $width_, $height_);
                if(isset($level)) return $level;
            }
            break;
        }
    
        return null;
    
    }
}
