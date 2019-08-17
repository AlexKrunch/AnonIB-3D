<?

require_once 'Models/Rogue/Town.php';

class Economy {

    public $name;
    public $mineralsPrice;
    public $energyPrice; //uranium, gaz etc.
    public $vegetablePrice;
    public $animalsPrice;
    public $waterPrice;

    private $world;

    public $PIB;

    public $priceCoef = 100;
    public $pibCoef = 10000;

    function __construct( $world_, $name_) {

        $this->world = $world_;
        $this->name = $name_;

        //We calculate the
        $this->mineralsPrice = (1 / $world_->minerals)*$this->priceCoef;
        $this->energyPrice = (1/ $world_->energy)*$this->priceCoef;
        $this->vegetablePrice = (1/ $world_->vegetable)*$this->priceCoef;
        $this->animalsPrice = (1/ $world_->animals)*$this->priceCoef;
        $this->waterPrice = (1/ $world_->water)*$this->priceCoef;

    }

    public function getPIB($town, $macroEco){

        $minerals = ($town->minerals)*$macroEco->mineralsPrice;
        $energy = ($town->energy)*$macroEco->energyPrice;
        $vegetable = ($town->vegetable)*$macroEco->vegetablePrice;
        $animals = ($town->animals)*$macroEco->animalsPrice;
        $water = ($town->water)*$macroEco->waterPrice;

        $this->PIB = ($minerals+ $energy+$vegetable+ $animals+$water);
        return $this->PIB;
    }

    public function print(){

        echo '*******************************<br/>';
        echo '<b> '.$this ->name.' ECONOMY </b><br/>';
        echo '*******************************<br/>';
        echo 'mineralsPrice: $'.$this ->mineralsPrice.'<br/>';
        echo 'energyPrice: $'.$this ->energyPrice.'<br/>';
        echo 'vegetablePrice: $'.$this ->vegetablePrice.'<br/>';
        echo 'animalsPrice: $'.$this ->animalsPrice.'<br/>';
        echo 'waterPrice: $'.$this ->waterPrice.'<br/>';
        echo '<br/>';
    }

}