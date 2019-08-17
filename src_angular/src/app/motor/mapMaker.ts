import {
    Engine, Scene,FreeCamera, Light,
    DirectionalLight, HemisphericLight, ShadowGenerator,
    Color4, Color3Gradient,
    Mesh,
    Vector3, MeshBuilder,
    ArcRotateCamera, StandardMaterial, Texture,
    Color3, SpriteManager, Sprite, Layer
  } from 'babylonjs';
 
 import { Tile } from "./tile";
 import { Game } from "./game";
 import { CanvasPlane } from "./canvasPlane";
 import { Door } from "./door";
 import { Item } from "./item";
 import { Gate } from "./gate";
 import { PostModel } from '../models/post.model';
 import { MapModel } from '../models/map.model';
 import { GameUtils, } from './gameUtils';
import ItemModel from '../models/item.model';
import { GameDataModel } from '../models/game-data.model';
import {PlayerMotor} from  './playerMotor';
import { PlayerModel } from '../models/player.model';
import { PlayerMesh } from './playerMesh';

import * as GUI from 'babylonjs-gui';
import { AdvertisementModel } from '../models/advertisement.model';

export class MapMaker {

    private gameInstance : Game;
    private static _instance : MapMaker;

    public static get TILE_SIZE():number { return 10; }

    //Game data
    private mapModel : MapModel;
    private mapData : string[];

    public gameData: GameDataModel;

    public players: any[];
    public posts: PostModel[];
    public items: ItemModel[] = [];

    public anonList: PlayerMesh[] = [];
    public itemMesh: Item[] = [];

    public TileGroundMeshes : Mesh[] = [];
    public TileWallMeshes : Mesh[] = [];

    public DIR_N = 0;
    public DIR_E = 1;
    public DIR_S = 2;
    public DIR_W = 3;

    //Canvas PLane dictionnary
    public canvasDict: { [id: string] : CanvasPlane; } = {};
    public advertisementDict: { [id: string] : CanvasPlane; } = {};
    public doorDict: { [id: string] : Door; } = {};
    public gateDict: { [id: string] : Gate; } = {};
    public itemDict: { [id: string] : Item; } = {};

    static getInstance() {
        return this._instance;
    }

    constructor() {

        this.gameInstance = Game.getInstance();
        MapMaker._instance = this;
    }

    loadMapData(map_: MapModel){
       
        Tile.meshGrassInstance = null;
        Tile.meshGroundInstance = null;
        Tile.meshWallInstance = null;

        this.mapModel = map_;
        this.buildMap();
    }

    cleanMap(){
        
        this.TileGroundMeshes = [];
        this.TileWallMeshes = [];
        this.canvasDict = {};
        this.advertisementDict = {};
        this.doorDict = {};
        this.gateDict = {};
        this.itemDict = {};

    }

    buildMap(){
        this.cleanMap();
        //console.log("buildMap="+ this.mapModel );
        this.mapData = this.getMapData();

        let x = 0;
        let y = 0;
        let l = 0; //layer

        let playerPos = {x: -1, y: -1};

        //Generate a layer
        for(let n = 0; n <   this.mapData.length; n++){
                //console.log(this.mapData[n]);
                if(parseInt(this.mapData[n]) != Tile.TILE_GATES && parseInt(this.mapData[n]) != Tile.TILE_GATES_SECRET){
                    new Tile(this.mapData[n] , MapMaker.TILE_SIZE,x,l,y, null);

                   if(parseInt(this.mapData[n]) === Tile.TILE_START){
                        playerPos.x = x;
                        playerPos.y = y;
                   } 
                } else if(parseInt(this.mapData[n]) == Tile.TILE_GATES) {

                    console.log("x: "+x+"; y:"+y+"; width:"+this.mapModel.width+"; heihgt: "+ this.mapModel.height);
                    /*
                    let key = "";
                    if(y == 0){
                        key = this.mapModel.door_key_n;
                    } else  if(x == this.mapModel.width-1){
                        key = this.mapModel.door_key_e;
                    } else  if(y == this.mapModel.height-1){
                        key = this.mapModel.door_key_s;
                    } else  if(x == 0){
                        key = this.mapModel.door_key_w;
                    }*/

                    //console.log("GATE x: "+x+"; y:"+y+"; width:"+this.mapModel.width+"; heihgt: "+ this.mapModel.height+" key:"+key);

                    //Managing gates
                    new Tile(this.mapData[n], MapMaker.TILE_SIZE,x,l,y, "???");

                }else if(parseInt(this.mapData[n]) == Tile.TILE_GATES_SECRET) {
                    //Managing gates
                    new Tile(this.mapData[n], MapMaker.TILE_SIZE,x,l,y, "secret");
                }
                //console.log("new tile-> type:"+this.tileDict[n]+" x:"+x+"y:"+y);
                x += 1;
                if(x >=   this.mapModel.width){
                    x = 0;
                    y += 1;
                } 

        }

        let player = new PlayerModel();
        if(this.gameData != null) 
        player = this.gameData.player;
        player.position_x = playerPos.x;
        player.position_y = playerPos.y;
      
        PlayerMotor.getInstance().setPlayerPos(player);

        if(this.gameData != null) this.updateNonStaticData(this.gameData);

    }

    /********************
     * UPDATE NON STATIC DATA
     * players, items and others
     ********************/
    updateNonStaticData(gameData_ :GameDataModel){

        this.itemDict = {};

        this.gameData = gameData_;

        //Post
        //Update teh posts DATA
        if(this.gameData.posts != undefined){
            this.posts = this.gameData.posts;
            for (let post of this.gameData.posts) {
                if(post !== null && post.canvas_key !== null){
                    let canvas = this.getCanvasByKey(post.canvas_key);

                        if(canvas!= null && canvas.isVirgin){
                            //if(post.graffiti && canvas.postModelGraffiti == null){
                                canvas.setPostData(post);
                            /*
                            } else if(!post.graffiti && canvas.postModel.id == null){
                                canvas.setPostData(post);
                            }*/
                        }
                }
            }
        }

        //items
        this.itemMesh.forEach((item_: Item) =>{
            if(item_ != null && item_ != undefined){
                item_.clean();
                item_ = null;
            }
        });
        this.itemMesh = [];
        this.items = this.gameData.itemsMap;

        for(let i = 0; i <  this.items.length; i++){
            let itemModel: ItemModel =  this.items[i];
            let itemMesh = new Item("item",itemModel, MapMaker.TILE_SIZE*0.2, itemModel.x * MapMaker.TILE_SIZE ,itemModel.y * MapMaker.TILE_SIZE);
            this.itemMesh.push(itemMesh);

        }

        //PLayers
        /*
        this.anonList.forEach((playerMesh: PlayerMesh) =>{
            playerMesh.clean();
            playerMesh = null;
        });

        let anonListNew = [];
        let anonListOld = this.anonList;
        let characters = this.gameData.players;

        for(let c = 0; c <  characters.length; c++){
            let chara: PlayerModel = characters[c];
            let anon: PlayerMesh = null;
            //Is this anon exist?
            for(let a= 0; a <anonListOld.length; a ++){
                
                if(anonListOld[a].playerModel.id === chara.id){
                    //if yes we move it
                    anon = anonListOld[a];
                    anon.updatePlayerModel(chara);
                    //+ clean the array
                    anonListOld.splice(a,1);
                    break;
                }
            }

            //If no we create if
            if(anon === null){
                anon = new PlayerMesh("player",chara, MapMaker.TILE_SIZE);
            }
            anonListNew.push(anon);
        }
         //after this we clean all the all anons.
        
        anonListOld.forEach((playerMesh: PlayerMesh) =>{
            //playerMesh.dispose();
            playerMesh.clean();
            playerMesh = null;
        });

        this.anonList = anonListNew;*/

        this.anonList.forEach((playerMesh: PlayerMesh) =>{
            //playerMesh.dispose();
            playerMesh.clean();
            playerMesh = null;
        });
        this.anonList = [];

        let characters = this.gameData.players;
        for(let c = 0; c <  characters.length; c++){
            let chara: PlayerModel = characters[c];
            let anon: PlayerMesh = new PlayerMesh("player",chara, MapMaker.TILE_SIZE);
            this.anonList.push(anon);
        }


    }

     /********************
     * MANAGE UI
     ********************/

     private linesReplyTo;
     private linesReplyFrom;

     drawlines(key_){

        let currentPost =  this.canvasDict[key_].postModel;
        if(this.linesReplyFrom != null) this.linesReplyFrom.dispose();
        if(this.linesReplyTo != null) this.linesReplyTo.dispose();


        //https://doc.babylonjs.com/babylon101/parametric_shapes
        let  pointsTo = [];
        let  pointsFrom = [];

        pointsTo.push( this.canvasDict[key_].planeMesh.position);
        pointsFrom.push( this.canvasDict[key_].planeMesh.position);

        for (let keyDict in this.canvasDict) {
            let canvas : CanvasPlane = this.canvasDict[keyDict];
            if (!canvas.isVirgin) {
                let found = false;
                if(canvas.postModel.id === currentPost.reply){
                    pointsTo.push(canvas.planeMesh.position);
                    found = true;
                } else  if(canvas.postModel.reply === currentPost.id){
                    pointsFrom.push(canvas.planeMesh.position);
                    found = true;
                }

                if(found){
                    for (let keyDict2 in this.canvasDict) {
                        let canvas2 : CanvasPlane = this.canvasDict[keyDict2];
                        if (!canvas2.isVirgin) {
                            if(canvas2.postModel.id === canvas.postModel.reply){
                                pointsTo.push(canvas2.planeMesh.position);
                            }else if(canvas2.postModel.reply === canvas.postModel.id){
                                pointsFrom.push(canvas2.planeMesh.position);
                            }
                        }
                    }
                }
            }
        }
        this.linesReplyTo = BABYLON.MeshBuilder.CreateLines("lines", {points: pointsTo}, this.gameInstance.scene);
        this.linesReplyFrom = BABYLON.MeshBuilder.CreateLines("lines", {points: pointsFrom}, this.gameInstance.scene);
        /*
        this.linesReplyTo.Color4 = BABYLON.Color3.Blue;
        this.linesReplyFrom.Color4 = BABYLON.Color3.Green;
        */

     }

     cleanLines(){
        if(this.linesReplyFrom != null) this.linesReplyFrom.dispose();
        if(this.linesReplyTo != null) this.linesReplyTo.dispose();
     }

     private cubeUI: Mesh;
     private uiAdvancedTexture: any;
     private rectUI: BABYLON.GUI.Rectangle;
     private label: BABYLON.GUI.TextBlock;

     displayUI(key_){

        /*
        //To hard for memory
        let canvas: CanvasPlane =  this.canvasDict[key_];

        if( this.cubeUI  == null){
            this.cubeUI = MeshBuilder.CreateBox("meshUI", {size: MapMaker.TILE_SIZE *0.5},  this.gameInstance.scene);
            //this.cubeUI.visibility = 0; 
        } 

        this.cubeUI.position.y = MapMaker.TILE_SIZE *0.5;
        this.cubeUI.position.x = canvas.planeMesh.position.x *  MapMaker.TILE_SIZE;
        this.cubeUI.position.z = canvas.planeMesh.position.z *  MapMaker.TILE_SIZE;

        if(this.uiAdvancedTexture == null){
            this.uiAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
            this.rectUI = new BABYLON.GUI.Rectangle();
            
            this.rectUI.fontFamily = "Courier New, Courier, monospace";
            this.rectUI.cornerRadius = 10;
            this.rectUI.color = "Grey";
            this.rectUI.background = "#161616";
            this.uiAdvancedTexture.addControl(this.rectUI);
            this.label = new BABYLON.GUI.TextBlock();
            this.rectUI.addControl(this.label);
            this.rectUI.linkWithMesh(this.cubeUI);  
            this.rectUI.linkOffsetY = 0;
            this.rectUI.linkOffsetX = 0;
            this.rectUI.width = 0.2;
            this.rectUI.height = 0.3;
        }

        this.label.text = canvas.postModel.message;
        */
     }

    clearUI(){
         
    }

    /********************
     * UTILS
     ********************/


    //Get potential Canvas orientation
    public getCanvasOrientation( x, z){

        let potentialDir: Number[] = [];
        if( this.getTileAt(x,z-1) === '0') potentialDir.push(this.DIR_N);
        if( this.getTileAt(x+1,z) === '0' ) potentialDir.push(this.DIR_E);
        if( this.getTileAt(x,z+1) === '0' ) potentialDir.push(this.DIR_S);
        if( this.getTileAt(x-1,z) === '0' ) potentialDir.push(this.DIR_W);

        if(potentialDir.length === 0) {
            //console.log("NO ORIENTATION FOUND");
            return -1;
        }
        //We choose a random direction
        let indexChoosed = Math.floor(Math.random() * potentialDir.length);
        return potentialDir[indexChoosed];

    }

    //Return the value of a tile
    public getTileAt( x, y ){

        //Out of bounds
        if(x < 0 || x > this.mapModel.width || y< 0 || y > this.mapModel.height) return -1;
        let indexTile = (y*this.mapModel.width )+ x;
        return  this.mapData[indexTile];

    }

    public registerNewCanvas(key_,canvas_){
        if( this.canvasDict[key_] === undefined)  this.canvasDict[key_] = canvas_;
    }

    public registerNewAd(key_,canvas_){
        if( this.advertisementDict[key_] === undefined) this.advertisementDict[key_] = canvas_;
    }

    public registerNewDoor(key_,door_){
        if( this.doorDict[key_] === undefined) this.doorDict[key_] = door_;
    }

    public registerNewItem(key_,item_){
        if( this.itemDict[key_] === undefined) this.itemDict[key_] = item_;
    }

    public getCanvasByKey(key_){
        return this.canvasDict[key_];
    }

    public registerNewGate(key_,gate_){
        this.gateDict[key_] = gate_;
    }

    public getDoorByKey(key_){
        return this.doorDict[key_];
    }

    public getAdByKey(key_){
        return this.advertisementDict[key_];
    }

    public getGateByKey(key_){
        return this.gateDict[key_];
    }

    public getItemByKey(key_){
        return this.itemDict[key_];
    }

    public setPictureOnCanvas(post_: PostModel){
        let canvas = this.canvasDict[post_.canvas_key];
        console.log(this.canvasDict);
        if(canvas !== undefined){
            console.log("canvas to change: "+post_.canvas_key+"; to post url: "+post_.url);
           canvas.setPostData(post_);
        } else {
            console.log("no canvas");
        }
    }

    /********************
     * PERF MAnAGEMENT
     ********************/

     public addMeshToCluster(mesh_,type_){
        switch(type_){

            case Tile.TILE_GROUND: 
                this.TileGroundMeshes.push(mesh_);
            break;

            case Tile.TILE_WALL: 
                this.TileWallMeshes.push(type_);
            break;
        }
     }

     public createClusters(){
        BABYLON.Mesh.MergeMeshes(this.TileWallMeshes);
        BABYLON.Mesh.MergeMeshes(this.TileGroundMeshes);
     }

     /********************
     * PARSING MAP
     ********************/
    
    public getMapData(){
        return this.mapModel.level_data.split(",");
    }

    /*
    public getTileMapScaling(val_){
        val_ = (val_/this.mapModel.width)* MapMaker.TILE_SIZE;
        return val_;
    }*/

 }