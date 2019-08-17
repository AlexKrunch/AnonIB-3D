import {
    Engine, Scene,FreeCamera, Light,
    DirectionalLight, HemisphericLight, ShadowGenerator,
    Color4, Color3Gradient,
    Mesh, VideoTexture,
    Vector3, MeshBuilder,
    ArcRotateCamera, StandardMaterial, Texture,
    Color3, SpriteManager, Sprite
  } from 'babylonjs';

import { Game } from "./game";
import { MapMaker } from "./mapMaker";
import ItemModel from '../models/item.model';

export class Item {

    public objType : String = "item";
    private gameInstance : Game;
    private mapInstance : MapMaker;
    public itemMesh: Mesh;
    public dictKey : string;
    public itemModel : ItemModel;

    public spriteManagerPlayer : SpriteManager;
    public sprite : Sprite;

    constructor(type_, itemModel_, size_, x, y){

        this.itemModel = itemModel_;

        this.objType = type_;
        this.dictKey = this.objType+"_"+this.itemModel.name+"_"+itemModel_.key;
        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();
        
        
        this.itemMesh = MeshBuilder.CreateBox( this.dictKey, {height: size_*3, width: size_, depth: size_},  this.gameInstance.scene);
        this.itemMesh.checkCollisions = false;
        this.itemMesh.visibility = 0;
        this.itemMesh.position.y = (size_) *0.5;
        this.itemMesh.position.x = x;
        this.itemMesh.position.z = y;
        this.itemMesh.visibility = 0;
        
        /*let mat = new StandardMaterial("matBoxItem", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Random();
        mat.freeze();
        this.itemMesh.material = mat;*/
        //if(this.objType.toLowerCase().indexOf('gate') >= 0 ) this.itemMesh.visibility = 0.2;
        

        //sprite
        this.spriteManagerPlayer = new SpriteManager("itemManager","./assets/textures/cardboard_text.png", 1, {width: 288, height: 288}, this.gameInstance.scene);
        this.sprite = new Sprite("item"+itemModel_.id, this.spriteManagerPlayer);

        this.sprite.width = 6;
        this.sprite.height = 6;

        this.sprite.position.x =  x;
        this.sprite.position.z =  y;
        this.sprite.position.y = 3;


        this.mapInstance.registerNewItem(this.dictKey ,this);

    }

    public clean(){

        this.spriteManagerPlayer.dispose();
        if(this.itemMesh != null)this.itemMesh.dispose();
        this.sprite.dispose();

        this.spriteManagerPlayer = null;
        this.itemMesh = null;
        this.sprite = null;

    }

}