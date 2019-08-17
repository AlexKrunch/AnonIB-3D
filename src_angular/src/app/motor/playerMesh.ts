import {
    Engine, Scene,FreeCamera, Light,
    DirectionalLight, HemisphericLight, ShadowGenerator,
    Color4, Color3Gradient,
    Mesh, VideoTexture,
    Vector3, MeshBuilder,
    ArcRotateCamera, StandardMaterial, Texture,
    Color3, SpriteManager, Sprite
  } from 'babylonjs';

//import * as GUI from 'babylonjs-gui';

import { Game } from "./game";
import { MapMaker } from "./mapMaker";
import { PlayerModel } from '../models/player.model';

export class PlayerMesh {

    public objType : String = "player";
    private gameInstance : Game;
    private mapInstance : MapMaker;
    public playerMesh: Mesh;
    public dictKey : string;
    public playerModel : PlayerModel;

    public spriteManagerPlayer : SpriteManager;
    public sprite : Sprite;

    public  uiAdvancedTexture: any;
    public  rectUI: BABYLON.GUI.Rectangle;
    public label: BABYLON.GUI.TextBlock;
    public size;


    constructor(type_, playerModel_: PlayerModel, size_,){

        this.size = size_;

        this.playerModel = playerModel_;
        this.objType = type_;
        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();

        if(this.playerModel.hp < 1 ){
            this.spriteManagerPlayer = new SpriteManager("playerManager","./assets/textures/anon_sprite_dead.png", 1, {width: 288, height: 288}, this.gameInstance.scene);
            this.sprite = new Sprite("player_"+playerModel_.id, this.spriteManagerPlayer);
        } else {
            this.spriteManagerPlayer = new SpriteManager("playerManager","./assets/textures/anon_sprite.png", 1, {width: 290, height: 290}, this.gameInstance.scene);
            this.sprite = new Sprite("player_"+playerModel_.id, this.spriteManagerPlayer);
        }
       

        this.sprite.width = 6;
        this.sprite.height = 6;

        this.sprite.position.x =  this.playerModel .position_x * size_;
        this.sprite.position.z =  this.playerModel .position_y * size_;
        this.sprite.position.y = 3;

        //Display player UI
        this.playerMesh = MeshBuilder.CreateBox( this.dictKey+"_"+playerModel_.id, {size: size_*0.5},  this.gameInstance.scene); 
        this.playerMesh.position.y = size_ *0.5;
        this.playerMesh.position.x = this.playerModel.position_x * size_;
        this.playerMesh.position.z = this.playerModel.position_y * size_;
        this.playerMesh.visibility = 0;

        /*
        this.uiAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        this.uiAdvancedTexture.is3D = false;
        this.rectUI = new BABYLON.GUI.Rectangle();
        this.rectUI.width = 0.1;
        this.rectUI.height = 0.05;
        this.rectUI.fontFamily = "Courier New, Courier, monospace";
        this.rectUI.cornerRadius = 10;
        this.rectUI.color = "Grey";
        this.rectUI.background = "#161616";
        this.uiAdvancedTexture.addControl(this.rectUI);
        this.label = new BABYLON.GUI.TextBlock();
        this.label.text = "#"+this.playerModel.id+"\n💬"+this.playerModel.talk;
        this.rectUI.addControl(this.label);
        this.rectUI.linkWithMesh( this.playerMesh);  
        this.rectUI.linkOffsetY = -60;
        this.rectUI.linkOffsetX = 0;
        this.uiAdvancedTexture.freeze = true;*/

        return this;

    }

    public updatePlayerModel(model_: PlayerModel){

        this.playerModel = model_;
        let y = this.size  *0.5;
        let x = this.playerModel.position_x * this.size ;
        let z = this.playerModel.position_y * this.size ;

        //this.playerMesh.locallyTranslate(new BABYLON.Vector3(x, y, z));
        
        let ySprite = 3;

        if(this.sprite != null){
            this.sprite.position.x =  x;
            this.sprite.position.z =  z;
            this.sprite.position.y = ySprite;
        }

        if(this.playerMesh != null){
            this.playerMesh.position.x =  x;
            this.playerMesh.position.y =  y;
            this.playerMesh.position.z =  z;
        }

        //this.label.text = "#"+this.playerModel.id+"\n💬"+this.playerModel.talk;
    }

    public clean(){

        this.spriteManagerPlayer.dispose();
        if(this.playerMesh != null) this.playerMesh.dispose();
        this.sprite.dispose();

        this.spriteManagerPlayer = null;
        this.playerMesh = null;
        this.sprite = null;
        /*
        this.rectUI.dispose();
        this.label.dispose();
        this.uiAdvancedTexture.dispose();*/

    }

}