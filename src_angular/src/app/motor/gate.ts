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

export class Gate {

    public objType : String = "gate";
    private gameInstance : Game;
    private mapInstance : MapMaker;
    public doorMesh: Mesh;
    public dictKey : string;

    public gateKey : string;

    constructor(dictKey, size, x, y, z, key_){

        this.dictKey = this.objType+"_"+dictKey;
        this.gateKey = key_;
        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();

        this.doorMesh = MeshBuilder.CreateBox( this.dictKey, {size: size},  this.gameInstance.scene);
        this.doorMesh.checkCollisions = true;
        
        let mat = new StandardMaterial("matGateDoor", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Red();
   
            
        mat.freeze();
        this.doorMesh.material = mat;

        this.doorMesh.position.y = y;
        this.doorMesh.position.x = x;
        this.doorMesh.position.z = z;

        this.mapInstance.registerNewGate(this.dictKey ,this);

    }
}