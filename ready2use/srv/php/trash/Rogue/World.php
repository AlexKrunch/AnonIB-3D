<?
require_once 'Models/Rogue/Town.php';
require_once 'Models/Rogue/Economy.php';

class World {

    public $towns;

    public $minerals;
    public $energy;
    public $vegetable;
    public $animals;
    public $water;

    public $macroEconomy; //influence import and pib

    function __construct( ) {

        //Creat the list of towns
        $this->towns = array();
    }

    function addTown($name_, $difficulty_){

        $city = new Town();
        $city->initGeo($name_, $difficulty_); 
        //$city->print();
        array_push( $this->towns, $city);

    }

    function initMacroEconomy(){

        $mineralsWorld = 0;
        $energyWorld = 0;
        $vegetableWorld = 0;
        $animalsWorld = 0;
        $waterWorld = 0;

        foreach ($this->towns as $town){
            $mineralsWorld += $town->minerals;
            $energyWorld += $town->energy;
            $vegetableWorld += $town->vegetable;
            $animalsWorld += $town->animals;
            $waterWorld += $town->water;
        }

        //Make the mean
        $this->minerals =  $mineralsWorld / sizeof( $this->towns);
        $this->energy =  $energyWorld / sizeof( $this->towns);
        $this->vegetable =  $vegetableWorld / sizeof( $this->towns);
        $this->animals =  $animalsWorld / sizeof( $this->towns);
        $this->water =  $waterWorld / sizeof( $this->towns);

        $this->macroEconomy = new Economy($this, 'World Global');
        $this->macroEconomy->print();

        foreach ($this->towns as $town){
            $town-> initEconomy( $this->macroEconomy );
            $town-> print();
        }
    }

    function cycling(){
        echo '-------------------------<br/>';
        foreach ($this->towns as $town){
            $town->calcultatePopulation($this);
        }

    }



}