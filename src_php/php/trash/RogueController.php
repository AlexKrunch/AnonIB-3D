<?
ini_set('display_errors', 1);
require_once 'Models/Rogue/World.php';

$world = new World();
$world->addTown("🇺🇸Alpha City", 99 );
$world->addTown("🇯🇵Neo Tokyo ネオ東京", 60 );
$world->addTown("🇭🇰Honk Kong Empire", 30 );
$world->addTown("🏴‍☠️Pirate Haven", 20 );
$world->addTown("🇷🇺Pапс город", 5 );

$world->initMacroEconomy();

echo '<h1>Cycling</h1><br/>';

for($i = 0; $i < 150; ++$i) {
$world->cycling();
}

/*
$jp = new Town("jp", 60 );
$b = new Town("b", 30 );
$gagged = new Town("gagged", 30 );
$h = new Town("h", 10 );
$op = new Town("op", 5 );*/



/*
Class RogueController {  


}*/