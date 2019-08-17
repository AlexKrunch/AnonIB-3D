<?php
/*

    __  __     __                    
   / / / /__  / /___  ___  __________
  / /_/ / _ \/ / __ \/ _ \/ ___/ ___/
 / __  /  __/ / /_/ /  __/ /  (__  ) 
/_/ /_/\___/_/ .___/\___/_/  /____/  
            /_/                      
Static function to help

*/

require_once "./Utils/Constants.php";

class Helpers
{
    /**
     * Construct won't be called inside this class and is uncallable from
     * the outside. This prevents instantiating this class.
     * This is by purpose, because we want a static class.
     */
    private function __construct() {}
    private static $initialized = false;

    private static function initialize()
    {
        if (self::$initialized)
            return;

        self::$initialized = true;
    }

    /**
    * Serialize the LarZer data in Array.
    */
    public static function getDataFromLazer($lazerObj)
    {
        self::initialize();

        $lazerObj = (array) $lazerObj;
        if(array_key_exists ( '' . "\0" . '*' . "\0" . 'data' ,   $lazerObj  ) && $lazerObj[ '' . "\0" . '*' . "\0" . 'data'] != null){

        	$lazerObj = (array) $lazerObj[ '' . "\0" . '*' . "\0" . 'data'];	

        } else if(array_key_exists ( '' . "\0" . '*' . "\0" . 'set' ,   $lazerObj  ) && $lazerObj[ '' . "\0" . '*' . "\0" . 'set'] != null){

        	$lazerObj = (array) $lazerObj[ '' . "\0" . '*' . "\0" . 'set'];

     	}

        return $lazerObj;
    }

    /**
    * Get the dead line to consider a player as inactive.
    * (surival of a video game version of the forum)
    */
    public static function getDeadline()
    {
        self::initialize();

		$currentTimeStamp = time();
		$deadLine = $currentTimeStamp - 3600;

        return $deadLine;
    }

     /**
    * Get the dead line to consider a player should be deleted.
    * (surival of a video game version of the forum)
    */
    public static function getDeletionline()
    {
        self::initialize();

		$currentTimeStamp = time();
		$deadLine = $currentTimeStamp - 3600*24;

        return $deadLine;
    }

    /**
    * make a generic response for Web services
    */
    public static function makeGenericResponse($isOk, $result, $error)
    {
        self::initialize();

        //prepare the result
		$response = array(
			'ok' => $isOk,
			'result' => $result,
			'error' => $error
        );
        
		header("Content-type: application/json");
        echo json_encode($response);
        exit();

    }

    /**
    * Get the user IP
    */
    public static function getClientIp() {
        // IP si internet partagé
        if (isset($_SERVER['HTTP_CLIENT_IP'])) {
            return $_SERVER['HTTP_CLIENT_IP'];
        }
        // IP derrière un proxy
        elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        // Sinon : IP normale
        else {
            return (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '');
        }
    }

    /**
    * CHECK IF BASE64 code is an image
    */
    public static function check_base64_image($base64) {
        
        $img = imagecreatefromstring(base64_decode($base64));
        if (!$img) {
            return false;
        }

        imagepng($img, 'tmp.png');
        $info = getimagesize('tmp.png');

        unlink('tmp.png');

        if ($info[0] > 0 && $info[1] > 0 && $info['mime']) {
            return true;
        }

    return false;
    }

    /*
    * Check Base64 size
    */
    public static function getBase64ImageSize($base64Image){ //return memory size in B, KB, MB
        try{
            $size_in_bytes = (int) (strlen(rtrim($base64Image, '=')) * 3 / 4);
            $size_in_kb    = $size_in_bytes / 1024;

            return $size_in_kb;
        }
        catch(Exception $e){
            return $e;
        }
    }

    /**
     * Generate random Token
     */
    public static function generateToken(){
        //Generate a random string.
        $token = openssl_random_pseudo_bytes(16);
        
        //Convert the binary data into hexadecimal representation.
        return bin2hex($token);
    }

    /**
     * Hash password
     */
    public static function hash_pw($plain_pw)
    {
        // (optional) change logic here for different hash algorithm
        //return password_hash($plain_pw, PASSWORD_DEFAULT);
        return md5($plain_pw);
    }

    /**
     * Verify hashed password
     */
    public static function verify_pw($plain_pw, $hashed_pw)
    {
        // (optional) change logic here for different hash algorithm
        //return password_verify($plain_pw, $hashed_pw);
        return (md5($plain_pw)==$hashed_pw);
    }


    /**
     * Get Real File Name
     */
    public static function getRealFileName($fileName_)
    {
       
        return md5($fileName_.'_'.Constants::CONST_IMAGE_SALT);
    }

}