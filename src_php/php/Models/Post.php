<?

class Post {

    /*
     'id' => 'integer',
		   'key' => 'string',
		   'scale' => 'integer',
		   'date' => 'integer',
		   'player_ip' => 'string',
		   'player_id' => 'integer',
		   'is_canon' => 'boolean',
		   'nsfw' => 'boolean',
		   'player_name' => 'string',
		   'thread_key' => 'string',
		   'canvas_key' => 'string',
		   'message' => 'string',
		   'url' => 'string',
		   'magnet' => 'string',
		   'torrent' => 'string',
		   'hash' => 'string'
    */
 
 public $id;
 public $key;
 public $scale;
 public $date;
 public $reply;
 public $player_ip;
 public $player_id;
 public $is_canon;
 public $nsfw;
 public $player_name;
 public $map_key;
 public $canvas_key;
 public $message;
 public $url;
 public $magnet;
 public $hash;
 public $graffiti;

 function __construct( ) {

    $this ->url = "";
	$this ->map_key = "";
	$this ->message = "";
	$this ->magnet = "";
    $this ->hash = "";
	$this ->player_name = "anonymous";
	$this ->graffiti = 'false';
	$this ->reply = "";

 }

 function fillWithPostData(){

    if( isset($_POST['tmap_key']) ) $this -> map_key = $_POST['map_key'];
    if( isset($_POST['canvas_key']) )  $this -> canvas_key = $_POST['canvas_key'];
    
    if( isset($_POST['message']) )  $this -> message = $_POST['message'];
    if( isset($_POST['magnet']) )  $this -> magnet = $_POST['magnet'];
    if( isset($_POST['url']) )  $this -> url = $_POST['url'];
    if( isset($_POST['hash']) )  $this -> hash = $_POST['hash'];
	if( isset($_POST['graffiti']) )  $this -> graffiti = $_POST['graffiti'];
	if( isset($_POST['reply']) )  $this -> reply = $_POST['reply'];
    
 }

}