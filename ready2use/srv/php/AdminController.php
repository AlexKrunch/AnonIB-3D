<?php
session_start();

require_once "Utils/Constants.php";
require_once 'Utils/Helpers.php';

Class AdminController {

    function validPassword($password){

        $passwordFile = file_get_contents(Constants::CONST_PASSWORD_FOLDER."/".Constants::CONST_PASSWORD_FILE, FILE_USE_INCLUDE_PATH);
        if( Helpers::verify_pw($password,  $passwordFile)){
            $_SESSION['superadmin'] = true;
            return true;
        } else {
            $_SESSION['superadmin'] = false;
            return false;
        }

    }

    function unlog(){
        $_SESSION['superadmin'] = false;
        return true;
    }

    function isAdminLogged(){
        if(!isset( $_SESSION['superadmin'])) return false;
        return $_SESSION['superadmin'];
    }

    function setPassword($password){

        if($this->isPassword()) return false;

        $hash = Helpers::hash_pw($password);

        //Test if the folder exist
        if (!file_exists(Constants::CONST_PASSWORD_FOLDER.'/')) {
            mkdir(Constants::CONST_PASSWORD_FOLDER, 0777, true);
        }

        //Record the hash
        $fp = fopen(Constants::CONST_PASSWORD_FOLDER."/".Constants::CONST_PASSWORD_FILE, 'w');
        fwrite($fp, $hash);
        fclose($fp);

        return true;

    }

    function isPassword(){

        if (!file_exists(Constants::CONST_PASSWORD_FOLDER.'/')) return false;
        if (!file_exists(Constants::CONST_PASSWORD_FOLDER.'/'.Constants::CONST_PASSWORD_FILE)) return false;

        return true;
    }

}