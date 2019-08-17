import {
    Engine, Scene,FreeCamera, Light,
    DirectionalLight, HemisphericLight, ShadowGenerator,
    Color4, Color3Gradient,
    Mesh,
    Vector3, MeshBuilder,
    ArcRotateCamera, StandardMaterial, Texture,
    Color3, SpriteManager, Sprite
  } from 'babylonjs';

  import * as BABYLON from 'babylonjs';

import { Game } from "./game";
import { MapMaker } from "./mapMaker";
import { CanvasPlane } from "./canvasPlane";
import { Door } from './door';
import { Gate } from './gate';


export class Tile {

    public static get TILE_EMPTY():number { return -1; }
    public static get TILE_GROUND():number { return 0; }
    public static get TILE_WALL():number { return 1; }
    public static get TILE_GATES():number { return 3; }
    public static get TILE_DOOR():number { return 4; }
    public static get TILE_DOOR_SECRET():number { return 5; }
    public static get TILE_LADDER():number { return 66; }
    public static get TILE_GRASS():number { return 7; }
    //public static get TILE_ADVERTISEMENT():number { return 12; }
    public static get TILE_START():number { return 13; }
    public static get TILE_GATES_SECRET():number { return 14; }
    

    public static meshGroundInstance: Mesh;
    public static meshGrassInstance: Mesh;
    public static meshWallInstance: Mesh;

    private gameInstance : Game;
    private mapInstance : MapMaker;
    private box : BABYLON.Mesh;
    private door : BABYLON.Mesh;

    //Type of tile
    private tileCoordonates: number[];

    constructor(type_, size, x: number,y: number,z: number, val_: string) {

        let type = parseInt(type_);
        this.tileCoordonates = [x, y, z];
        x = x*size;
        y = y*size;
        z = z*size;

        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();

        if(type === Tile.TILE_WALL){

            this.box =  this.getMeshWall(size);
            this.box.position.y = size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;

            new CanvasPlane("canvas",this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_N);
            new CanvasPlane("canvas",this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_E);
            new CanvasPlane("canvas",this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_S);
            new CanvasPlane("canvas",this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_W);

        } else if(type === Tile.TILE_GROUND || type === Tile.TILE_START) {

            this.box = this.getMeshGround(size,"./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box,type);
        
        } else if(type === Tile.TILE_GRASS) {

            this.box = this.getMeshGrass(size,"./assets/textures/grass_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box,type);

        } else if(type === Tile.TILE_LADDER) {

            console.log("GOT LADDER!");
            this.box =  this.getMeshLadder(size);
            this.box.position.y = size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box,type);

        } else if(type === Tile.TILE_GATES || type ===  Tile.TILE_GATES_SECRET) {
            console.log("GOT GATES!");

            //Create the ground
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box,Tile.TILE_GROUND);

            this.door = this.getMeshGate(size,x,y,z,val_);
            this.door.position.y = size * 0.5 + y;
            this.door.position.x = x;
            this.door.position.z = z;

        } else if(type === Tile.TILE_DOOR) {
            console.log("GOT DOOR!");

            //Create the ground
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box,Tile.TILE_GROUND);

            this.door =  this.getMeshDoor(size,x,y,z,false);
            this.door.position.y = size * 0.5 + y;
            this.door.position.x = x;
            this.door.position.z = z;

        }  else if(type === Tile.TILE_DOOR_SECRET) {
                console.log("GOT DOOR!");
    
                //Create the ground
                this.box = this.getMeshGround(size,"./assets/textures/floor_dalle_text.jpg");
                this.box.position.y = -size * 0.5 + y;
                this.box.position.x = x;
                this.box.position.z = z;
                this.mapInstance.addMeshToCluster(this.box,Tile.TILE_GROUND);
    
                this.door = this.getMeshDoor(size,x,y,z,true);
                this.door.position.y = size * 0.5 + y;
                this.door.position.x = x;
                this.door.position.z = z;
        } else {
            console.log("type not found! type "+type);
        }
       

        /*
        
        this.gameInstance.shadowGen.getShadowMap().renderList.push( this.box );
        this.box.receiveShadows = true;*/
    }

    getMeshGround(size_,text_){

        if(!Tile.meshGroundInstance){

            let mesh = BABYLON.MeshBuilder.CreateBox("groundTile", {size: size_},  this.gameInstance.scene);
            mesh.checkCollisions = true;
    
            let mat = new StandardMaterial("matGround", this.gameInstance.scene);
            let textureBox = new Texture(text_, this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mat.diffuseTexture.scale(1/4) ;
            mesh.material = mat;
            Tile.meshGroundInstance  = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
        }

        return Tile.meshGroundInstance.clone("Box Ground");
    }

    getMeshGrass(size_,text_){

        if(!Tile.meshGrassInstance){

            let mesh = BABYLON.MeshBuilder.CreateBox("grassTile", {size: size_},  this.gameInstance.scene);
            mesh.checkCollisions = true;
    
            let mat = new StandardMaterial("matGrass", this.gameInstance.scene);
            let textureBox = new Texture(text_, this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mat.diffuseTexture.scale(1/4) ;
            mesh.material = mat;
            Tile.meshGrassInstance  = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
        }

        return Tile.meshGrassInstance.clone("Box Grass");
    }


    getMeshWall(size_){

        if(!Tile.meshWallInstance ){

            let mesh = MeshBuilder.CreateBox("myBox", {size: size_},  this.gameInstance.scene);
            mesh.checkCollisions = true;
            let mat = new StandardMaterial("matBox", this.gameInstance.scene);
            let textureBox = new Texture("./assets/textures/concrete_text.jpg", this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mesh.material = mat;
            Tile.meshWallInstance = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
           
        }

        return Tile.meshWallInstance.clone("groundTile");
    }
    /*
    getMeshAd(size_){

        let mesh = MeshBuilder.CreateBox("myBox", {size: size_},  this.gameInstance.scene);
        mesh.checkCollisions = true;
        let mat = new StandardMaterial("matBoxLadder", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Black();
        mesh.material = mat;
        mesh.convertToUnIndexedMesh();
        mat.freeze();

        return  mesh;
    }*/

    getMeshLadder(size_){
        let mesh = MeshBuilder.CreateBox("ladder", {size: size_},  this.gameInstance.scene);
        mesh.checkCollisions = true;
        let mat = new StandardMaterial("matBoxLadder", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Red();
        mesh.material = mat;
        mesh.convertToUnIndexedMesh();
        mat.freeze();
        return mesh;
    }

    getMeshDoor(size_,x_,y_,z_, secret_){
        let door = new Door(this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size_, x_, y_, z_, secret_);
        return door.doorMesh;
    }

    getMeshGate(size_,x_,y_,z_, key_){
        let gate = new Gate(this.tileCoordonates[0]+"_"+this.tileCoordonates[1]+"_"+this.tileCoordonates[2], size_, x_, y_, z_,key_);
        return gate.doorMesh;
    }

}