<?

class Item {

    public $name;
    public $description;
    public $player_id; // owner ID
    public $map_key;
    public $key;

    public $action;
    public $type;
    public $itemsPerPlayer;
    //weapon
    //potion
    //paint
    //sponge
    //ring
    //armor

    //Influence it has
    public $is_expendable = true;
    public $numOfUse;
    public $value;
    //----------------
    public $valueMin;
    public $valueMax;
    

    function __construct() {
    }

    public static function getAllPotentialItems()
    {
       $items = array();

       $item = new Item();
       $item-> name = "sponge";
       $item-> action = "post delete";
       $item-> type = "posting";
       $item-> description = "The sponge give you the ability to make disappear a post that isn't canon";
       $item-> is_expendable = true;
       $item-> valueMin = 1;
       $item-> valueMax = 3;
       $item-> itemsPerPlayer = 1;
       array_push( $items ,$item);

        /*
       $item = new Item();
       $item-> name = "ring of upload";
       $item-> action = "upload";
       $item-> type = "posting";
       $item-> description = "Give you the ability to upload picture when you post";
       $item-> is_expendable = false;
       $item-> valueMin = 10;
       $item-> valueMax = 18;
       $item-> itemsPerPlayer = 1;
       array_push( $items ,$item);
       
       $item = new Item();
       $item-> name = "pen";
       $item-> action = "drawing";
       $item-> type = "posting";
       $item-> description = "Give you the ability to draw";
       $item-> is_expendable = true;
       $item-> valueMin = 1;
       $item-> valueMax = 10;
       $item-> itemsPerPlayer = 10;
       array_push( $items ,$item);

       $item = new Item();
       $item-> name = "black powder";
       $item-> action = "canon";
       $item-> type = "posting";
       $item-> description = "Set a post as canon";
       $item-> is_expendable = true;
       $item-> valueMin = 1;
       $item-> valueMax = 5;
       $item-> itemsPerPlayer = 3;
       array_push( $items ,$item);

       $item = new Item();
       $item-> name = "knife";
       $item-> action = "harm";
       $item-> type = "fight";
       $item-> description = "You can kill enemies from the dungeon or even other anons";
       $item-> is_expendable = true;
       $item-> valueMin = 99;
       $item-> valueMax = 100;
       $item-> itemsPerPlayer = 1;
       array_push( $items ,$item);

       $item = new Item();
       $item-> name = "rope";
       $item-> action = "bound";
       $item-> type = "fight";
       $item-> description = "You bound certain enemies and anons";
       $item-> is_expendable = true;
       $item-> valueMin = 2;
       $item-> valueMax = 4;
       $item-> itemsPerPlayer = 1;
       array_push( $items ,$item);*/

       return $items;
    }
}