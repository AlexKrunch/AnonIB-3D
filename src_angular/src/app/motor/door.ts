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

export class Door {

    public objType : String = "door";
    private gameInstance : Game;
    private mapInstance : MapMaker;
    public doorMesh: Mesh;

    public dictKey : string;
    public sizeCanvas: number;
    public doorOpen = false;

    public openedY: number;
    public closedY: number;

    public closeDoorInterval;
    public clooseDoorDelay = 600000;
    public isSecret: boolean = false;

    constructor(dictKey, size, x, y, z, secret_){

        this.sizeCanvas = size;
        this.isSecret = secret_;

        this.dictKey = this.objType+"_"+dictKey;
        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();

        this.closedY =  size * 0.5 + y;
        this.openedY =  -size * 0.5 + y;

        this.doorMesh = MeshBuilder.CreateBox( this.dictKey, {size: this.sizeCanvas},  this.gameInstance.scene);
        this.doorMesh.checkCollisions = true;
        
        let mat = new StandardMaterial("matBoxDoor", this.gameInstance.scene);
        if(!this.isSecret){
           
            mat.diffuseColor = BABYLON.Color3.Green();
        }else {
            let textureBox = new Texture("./assets/textures/concrete_text.jpg", this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
        }
        mat.freeze();
        this.doorMesh.material = mat;

        this.doorMesh.position.y = this.closedY + y;
        this.doorMesh.position.x = x;
        this.doorMesh.position.z = z;

        this.mapInstance.registerNewDoor(this.dictKey ,this);

    }

    public openDoor(){
        this.doorOpen = true;
        this.updateDoor();
        /*
        this.closeDoorInterval = setInterval(() => {
            this.closeDoor();
            clearInterval( this.closeDoorInterval);
        }, this.clooseDoorDelay );*/

        this.doorMesh.dispose();
    }

    public closeDoor(){
        this.doorOpen = false;
        this.updateDoor();
    }

    public updateDoor(){
        console.log("open door   this.doorMesh.position.y="+  this.doorMesh.position.y);
        this.doorMesh.position.y = (this.doorOpen)? this.openedY:this.closedY;
        console.log("open door   this.doorMesh.position.y="+  this.doorMesh.position.y);
    }
}