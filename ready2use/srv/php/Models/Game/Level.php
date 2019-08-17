<?php

class Level {

    public $name;
    public $key;
    public $theme = "medieval";

    public $x;
    public $y;

    public $width;
    public $height;
    public $data;

    public $door_key_n;
    public $door_key_e;
    public $door_key_s;
    public $door_key_w;

    public $is_safe = false;
    public $is_chan = false;
    public $is_secret = false;

    public $level_data;
    /*
    public $TILE_GROUND = 0;
    public $TILE_WALL = 1;
    public $TILE_WALL_DRAWABLE = 2;
    public $TILE_DOOR = 3;*/

    function __construct( $name, $width,  $height,  $is_chan, $is_secret) {
        $this-> name = $name;
        $this-> width = $width;
        $this-> height = $height;
        $this-> is_chan = $is_chan;
        $this-> is_secret = $is_secret;
        $this-> key = $name;
    }

    public function setKeyForDir($key_,$dir_){
        switch($dir_){

            case 0:
            $this -> door_key_n = $key_;
            break;

            case 1:
            $this -> door_key_e = $key_;
            break;

            case 2:
            $this -> door_key_s = $key_;
            break;

            case 3:
            $this -> door_key_w = $key_;
            break;
        }
    }

    public function getNumDoors(){
        $num = 0;
        if(isset($this -> door_key_n)) $num ++;
        if(isset($this -> door_key_e)) $num ++;
        if(isset($this -> door_key_s)) $num ++;
        if(isset($this -> door_key_w)) $num ++;
        return $num;
    }

    public function getDoorCoordKey($key_){

        $x = 0;
        $y = 0;

        //test N
        if($key_ == $this -> door_key_n){
            for($x = 0 ; $x < $this->width ; $x++ ){
                $tile = $this -> pickTile($this->width, $this->height,new Coord($x ,  $y));
                if($tile == Tile::getValueForName("gate")) return new Coord($x,$y);
            }
        } else  if($key_ == $this -> door_key_e){
            $x = $this->width - 1;
            for($y = 0 ; $y < $this->height ; $y++ ){
                $tile = $this -> pickTile( $this->width, $this->height, new Coord($x ,  $y));
                if($tile == Tile::getValueForName("gate")) return new Coord($x,$y);
            }
            
        } else  if($key_ == $this -> door_key_s){
            $y = $this->height - 1;
            for($x = 0 ; $x < $this->width ; $x++ ){
                $tile = $this -> pickTile($this->width, $this->height,new Coord($x ,  $y));
                if($tile == Tile::getValueForName("gate")) return new Coord($x,$y);
            }
        }else  if($key_ == $this -> door_key_w){
            for($y = 0 ; $y < $this->height ; $y++ ){
                $tile = $this -> pickTile($this->width, $this->height,new Coord($x ,  $y));
                if($tile == Tile::getValueForName("gate")) return new Coord($x,$y);
            }
        }

        return null;
    }

    public function placePlayerForKey($key_){

        $coord = $this -> getDoorCoordKey($key_);

        if($coord->y == 0) {
            return new Coord($coord->x , $coord->y+1);
        } else if($coord->x == $this->width-1) {
            return new Coord($coord->x-1 , $coord->y);
        }else if($coord->y == $this->height-1) {
            return new Coord($coord->x , $coord->y-1);
        }else if($coord->x == 0) {
            return new Coord($coord->x+1 , $coord->y);
        }

        return new Coord(1 , 1);
    }

    public function initLevelData(){

        //New version: all the level are the same
        $this->level_data = 
        [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
        1,0,0,1,0,0,0,0,0,1,0,4,0,0,1,0,0,1,
        1,0,0,1,0,0,13,0,0,1,0,1,0,0,1,0,0,1,
        1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,
        1,0,0,1,0,0,0,0,0,1,3,1,0,0,1,0,0,1,
        1,0,0,1,1,1,4,1,1,1,1,1,0,0,1,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,
        14,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ];

         $this-> width = 18;
        $this-> height = 15;


        /*
        //Create a middle room
        //Middle room looks cool everywhere
        $this->fillgrid(Tile::getValueForName("ground"),  $this->width, $this->height);

        //Place wall
        $this->makeWallForLevel();

        //place gates
        $coord = new Coord(0,0);

        if(isset( $this -> door_key_n)){
            $coord ->y = 0;
            $coord ->x = rand(1, $this->width-2);
            $this->placeToLevel(Tile::getValueForName("gate"),  $this->width, $this->height, $coord);
        }

        if(isset( $this -> door_key_e)){
            $coord ->y = rand(1, $this->height-2);
            $coord ->x = $this->width-1;
            $this->placeToLevel(Tile::getValueForName("gate"),  $this->width, $this->height, $coord);
        }

        if(isset( $this -> door_key_s)){
            $coord ->y = $this->height-1;
            $coord ->x = rand(1, $this->width-2);
            $this->placeToLevel(Tile::getValueForName("gate"),  $this->width, $this->height, $coord);
        }

        if(isset( $this -> door_key_w)){
            $coord ->y = rand(1, $this->height-2);
            $coord ->x = 0;
            $this->placeToLevel(Tile::getValueForName("gate"),  $this->width, $this->height, $coord);
        }*/

        //Display the level
        $this -> displayLevelData();
    }

    function makeWallForLevel(){

        //North wall
        $y = 0;
        for ($x = 0 ; $x <= $this-> width ; $x++){
            $coord = new Coord($x,$y);
            $this->placeToLevel(Tile::getValueForName("wall"),  $this->width, $this->height, $coord);
        }

        //South wall
        $y = $this->height-1;
        for ($x = 0 ; $x < $this-> width ; $x++){
            $coord = new Coord($x,$y);
            $this->placeToLevel(Tile::getValueForName("wall"),  $this->width, $this->height, $coord);
        }

        //West
        $x = 0;
        for ($y = 0 ; $y < $this-> height ; $y++){
            $coord = new Coord($x,$y);
            $this->placeToLevel(Tile::getValueForName("wall"),  $this->width, $this->height, $coord);
        }

        //Est
        $x = $this->width-1;
        for ($y = 0 ; $y < $this-> height ; $y++){
            $coord = new Coord($x,$y);
            $this->placeToLevel(Tile::getValueForName("wall"),  $this->width, $this->height, $coord);
        }
    }

    public function displayLevelData(){
        echo "# MAP ".$this->name." num tiles:".count($this->level_data)."<br/>";

        $x = 0;
        $y = 0;

        foreach($this->level_data as $data){
            //echo "x:".$x."y:".$y."<br/>";
            /*
            if(!isset( $data ) || $data == Tile::getValueForName("wall") ){
                echo "#";
            } else if($data == Tile::getValueForName("ground")) {
                 echo ".";
            } else if($data == Tile::getValueForName("door")) {
                //echo "x:".$x."y:".$y."<br/>";
                echo "D";
            }*/

            echo Tile::getDisplayForVal($data);

            $x ++;
            if($x >= $this ->  width){
                $x = 0;
                $y ++;
                echo "<br/>";
            }
        }
    }

    //Level Data management
    function fillgrid($defaultTile_,  $width_, $height_){

       $this->level_data = array();
        for ($i = 0; $i < $height_*$width_; $i++) {
            array_push( $this->level_data ,$defaultTile_);
        }
    
    }

    function placeToLevel($data, $width_, $height_, $coord){

        $this->level_data [ ( $coord->y *$width_) + $coord->x] =  $data;
    }

    function pickTile($width_, $height_, $coord){
        return $this->level_data [ ( $coord->y *$width_)+ $coord->x];
    }

    //Fill a data base row
    public function fillRow($row_){
        
        echo "Write level: ".$this-> name."; for key".$this-> key." with ".count($this-> level_data)." data";
        $row_ -> key = $this-> key;
        $row_ -> name = $this-> name;
        $row_ -> theme = $this-> theme;
        /*
        $row_ -> x = $this-> x;
        $row_ -> y = $this-> y;
        */
        $row_ -> width = $this-> width;
        $row_ -> height = $this-> height;
        if(isset( $this-> door_key_n))$row_ -> door_key_n = $this-> door_key_n;
        if(isset( $this-> door_key_e)) $row_ -> door_key_e = $this-> door_key_e;
        if(isset( $this-> door_key_s)) $row_ -> door_key_s = $this-> door_key_s;
        if(isset( $this-> door_key_w)) $row_ -> door_key_w = $this-> door_key_w;

        $dataString = "";

        foreach( $this-> level_data as $data ){
            $dataString = $dataString.$data.",";
        }
        $dataString  = $dataString .substr(0, strlen($dataString) - 1);
        $row_ -> level_data  = $dataString;

        $row_ -> is_safe = $this-> is_safe;
        $row_ -> is_chan = $this-> is_chan;
         $row_ -> is_secret = $this-> is_secret;

        //var_dump( $row_);

        return $row_;
    }

    //Get Ground tiles
    public function getEmptyCoord(){
        $coords = array();

        $x = 0;
        $y = 0;
        foreach( $this-> level_data as $data ){

            if((int) $data == Tile::getValueForName("ground")){
                $coord = new Coord($x,$y);
                array_push($coords,$coord);
            }

            $x ++;
            if($x >= $this-> width){
                $y ++;
                $x = 0;
            }
        }

        return $coords[rand( 0, count( $coords )-1)];
    }

    //Fill a data base row
    public static function parseRow($row_){

        $level = new Level("",0,0,false, false);
        
        $level -> key = $row_ -> key;
        $level -> name = $row_ -> name;
        $level -> theme = $row_ -> theme;
        $level -> is_secret = $row_ -> is_secret;
        $level -> x = $row_ -> x;
        $level -> y = $row_ -> y;
        $level -> width = $row_ -> width;
        $level -> height = $row_ -> height;
        if(isset( $row_-> door_key_n)) $level -> door_key_n = $row_-> door_key_n;
        if(isset( $row_-> door_key_e)) $level -> door_key_e = $row_-> door_key_e;
        if(isset( $row_-> door_key_s)) $level -> door_key_s = $row_-> door_key_s;
        if(isset( $row_-> door_key_w)) $level -> door_key_w = $row_-> door_key_w;

        //parse the data
        $level -> level_data = explode(",",$row_ -> level_data);

        $level  -> is_safe = $row_-> is_safe;
        $level  -> is_chan = $row_-> is_chan;

        return $level ;
    }

    //Fill a data base row
    public static function getDim($num){

        $minTile = 4;
        if($num <  $minTile ) $num =  $minTile;
        $width = rand ( $minTile , $num - $minTile );
        $height =  $num - $width;

        return new Coord( $width, $height);
    }

}