<?
require_once 'Models/Rogue/Economy.php';
class Town {

public $id;
public $key;
public $name;

//Coordonate
public $lat;
public $alt;

//Geo of the town --> things that won't be imported
public $minerals;
public $energy; //uranium, gaz etc.
public $vegetable;
public $animals;
public $water;

//DailyProduction
public $mineralsProd;
public $energyProd; //uranium, gaz etc.
public $vegetableProd;
public $animalsProd;
public $waterProd;

public $microEconomy; //influence industry
public $money;
public $deathCoef = 10;
public $fertilyCoef = 100;

//Propertie that influence the whole town
public $old;
public $pib;
public $population;
public $culture; // books per habitants
public $weapons;
public $tools;
public $cyber;
public $deads;

//Influenced
public $hiearchy; // numb strat of the population
public $superficy;
public $crimeRate;
public $justiceEfficiency;
public $inequality;
public $terrorism;

//imported stuff
public $importMinerals;
public $importEnergy;
public $importVegetable;
public $importAnimals;
public $migrants;

//Building
public $rafineries;
public $factories;
public $banks;
public $internet;
public $shops; //--> link to ressources and tools
public $residences;
public $libraries;
public $cimetaries;
public $lakes;
public $ports; //--> at least one
public $discharges;


function __construct( ) {
   
}

/**
 * $difficulty_ : 1 to 100
 */
public function initGeo($name_, $difficulty_){

    $this ->key = uniqid();
    $this ->name = $name_;
    $this ->population = rand ( 25 , 75 ) ;

    //Geography
    $this ->lat = rand ( 0 , 100 );
    
    if( $this ->lat  < 50){
        $coefHardGeo = $this ->lat *2;
    } else {
        $coefHardGeo = (100 - ($this ->lat)) *2;
    }

    if($coefHardGeo == 0) $coefHardGeo = 1;
    if($coefHardGeo == 100) $coefHardGeo = 99;

    //echo 'coefHardGeo: '. $coefHardGeo.'<br/>----------------------<br/>';
    $coefEasyGeo = (100-$coefHardGeo);
    $coefHardGeo = $coefHardGeo;
   
    $this ->mineralsProd = $this ->minerals = $this ->randomDescendent($difficulty_, $coefEasyGeo);
    $this ->energyProd = $this ->energy = $this ->randomDescendent($difficulty_, $coefEasyGeo);
    $this ->vegetableProd = $this ->vegetable = $this ->randomDescendent($difficulty_,$coefHardGeo);
    $this ->waterProd = $this ->water = $this ->randomDescendent($difficulty_, $this ->lat);
    $this ->animalsProd = $this ->animals = $this ->randomDescendent($difficulty_,$coefHardGeo);

}

public function initEconomy( $economy_ ){

    $this -> microEconomy = new Economy($this, $this ->name.' MICRO' );
    $this -> microEconomy -> getPIB($this, $economy_);
    //$this -> microEconomy->print();
    $this -> money = 100;
}


/**
 * Init the politic (need a world setting for this)
 */
public function initPolitic(){

    
}

public function calcultatePopulation($world_){

    $pop = $this ->population;

    if($pop > 0){

        $needWater = $this ->water - $pop;
        $needVegetable = $this ->vegetable - $pop;
        $needAnimals = $this ->animals - $pop;
        $needMinerals = $this ->minerals - $pop;
        $needEnergy  = $this ->minerals - $pop;

        $moneyNeeded = 0;
        $moneyNeeded +=  $world_->macroEconomy->vegetablePrice * $needVegetable;
        $moneyNeeded +=  $world_->macroEconomy->animalsPrice * $needAnimals;
        $moneyNeeded +=  $world_->macroEconomy->waterPrice * $needWater;


        $this ->money -=  $moneyNeeded;
        echo '--> '.$this ->name.' pop:'.$pop;
       
        if($this ->money < 0){
            $pop -= $this ->deathCoef;
            echo '/ 💀Death: '.$this ->deathCoef;
        } else if($this ->money >= 0){
            $pop += $this ->fertilyCoef;
            echo '/ 🍼 New borns: '.$this ->fertilyCoef;
        }

        $moneyNeeded +=  $world_->macroEconomy->mineralsPrice * $needMinerals;
        $moneyNeeded +=  $world_->macroEconomy->energyPrice * $needEnergy;

        $this ->money -=  $moneyNeeded;

        echo '/ Money: $'.$this ->money.' <br/>';

        $this ->population = $pop;
    }

}


function randomAscendent($val_, $coef_){
    $val = rand ( 1 , $val_ ) / 100;
    return $val*$coef_;
}

function randomDescendent($val_, $coef_){
    $val = (100 - rand ( 1 , $val_ )) / 100;
    return $val*$coef_;
}

public function print(){
    echo '*******************************<br/>';
    echo '<b> Welcome Town '.$this ->name.'</b><br/>';
    echo '*******************************<br/>';
    echo 'lat: '.$this ->lat.'<br/>';
    echo 'minerals: '.$this ->minerals.' <b>($'.$this->microEconomy->mineralsPrice.')</b><br/>';
    echo 'energy: '.$this ->energy.' <b>($'.$this->microEconomy->energyPrice.')</b><br/>';
    echo 'vegetable: '.$this ->vegetable.' <b>($'.$this->microEconomy->vegetablePrice.')</b><br/>';
    echo 'water: '.$this ->water.' <b>($'.$this->microEconomy->waterPrice.')</b><br/>';
    echo 'animals: '.$this ->animals.' <b>($'.$this->microEconomy->animalsPrice.')</b><br/>';
    echo '------------------------------------------<br/>';
    echo 'PIB of the town: $'. round($this ->microEconomy ->PIB).'k<br/>';
    echo '<br/>';
}

}