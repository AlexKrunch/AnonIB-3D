<?
class Tile {

    public $value;
    public $display;
    public $name;
    public $descitption;

    function __construct( $value, $display, $name, $descitption) {
        $this -> value = $value;
        $this -> display = $display;
        $this -> name = $name;
        $this -> descitption = $descitption;
    }

    public static function getAllTiles()
    {
       $tiles = array();
       array_push( $tiles, new Tile(0,".","ground","You can walk on it."));
       array_push( $tiles, new Tile(1,"█","wall","You cannot go thought it."));
       array_push( $tiles, new Tile(2,"#","drawable wall","Like a wall, but you can post on it."));
       array_push( $tiles, new Tile(3,"/","gate","An entrance to another level."));
       array_push( $tiles, new Tile(4,"D","door","You can open it."));
       array_push( $tiles, new Tile(5,"▓","fake wall","You can open it."));
      /* array_push( $tiles, new Tile(6,"*","trap","It can kill you."));
       array_push( $tiles, new Tile(7,";","grass","just green ground"));
       array_push( $tiles, new Tile(8,"±","shrine","Special items goes there."));
       array_push( $tiles, new Tile(9,"f","fire","You cannot cross."));
       array_push( $tiles, new Tile(10,"R","fast food","You can fullfil your health here"));*/
       array_push( $tiles, new Tile(11,"t","seed","You will found torrent of the board here"));
       //array_push( $tiles, new Tile(12,"A","Advertisement wall","It's used to display advertisement."));
       array_push( $tiles, new Tile(13,"s","Player start","It's the point of arrival of a player. All map need one"));
        array_push( $tiles, new Tile(14,"|","gate secret","An entrance to secret level."));
       return $tiles;
    }

    public static function getValueForName($name)
    {
        $tiles = Tile::getAllTiles();
        foreach ($tiles as $tile){
            if($tile->name == $name) return $tile->value;
        }

        return -1;
    }

    public static function getDisplayForVal($val)
    {
        $tiles = Tile::getAllTiles();
        foreach ($tiles as $tile){
            if($tile->value == $val) return $tile->display;
        }

        return -1;
    }
}