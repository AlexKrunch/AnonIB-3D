import {
  Engine, Scene,FreeCamera, Light,
  DirectionalLight, HemisphericLight, ShadowGenerator,
  Color4, Color3Gradient, Mesh,
  Vector3, MeshBuilder, ArcRotateCamera,
  StandardMaterial, Texture, Color3
} from 'babylonjs'

import { Game } from "./game";
import { GameUtils } from "./gameUtils";
import { Helpers } from "../utils/helpers";
import { GameUIServiceService } from '../services/game-uiservice.service';
import { PlayerModel } from '../models/player.model';
import { MapMaker } from './mapMaker';

export class PlayerMotor {

    private gameInstance : Game;
    private static _instance : PlayerMotor;
    public playerBox : BABYLON.Mesh;

    //Properties for cam
    private playerHeight = 4; // The player eyes height
    private speed = 1;
    private inertia = 0.9;
    private angularSensibility = 1000;
    private angularSensibilityMobile = 13000;
    public playerModel : PlayerModel;

    private playerRotation;
    private joystickMoveSpeedY = 18;
    private joystickMoveSpeedX = 0.9;
    private isJoystick = false;

    static getInstance() {
        return this._instance || (this._instance = new this());
    }

    constructor() {

    }

    initMotor(){
        this.gameInstance = Game.getInstance();
        this.gameInstance.gameUIServiceService.changeStateEmitter.subscribe((state_)=>{
            console.log(state_);
            if(state_ === GameUIServiceService.STATE_GAME_RUNNING) {
                this.activateMotion(true);
            } else {
                this.activateMotion(false);
            }
        });

        this.gameInstance.camera = new BABYLON.FreeCamera('freeCamera', new BABYLON.Vector3(0, 5,-10), this.gameInstance.scene);
       this.activateMotion(true);
    }

    activateMotion(val_: boolean){
        if(val_){

            //Free cam
            this.gameInstance.camera.attachControl(this.gameInstance.scene.getEngine().getRenderingCanvas());

            // Activate gravity !
            //https://doc.babylonjs.com/babylon101/cameras,_mesh_collisions_and_gravity
            this.gameInstance.scene.gravity = new BABYLON.Vector3(0, -0.7, 0);
            this.gameInstance.camera.applyGravity = true;

            this.gameInstance.camera.ellipsoid = new BABYLON.Vector3(2.5, this.playerHeight, 2.5);
            this.gameInstance.camera.ellipsoidOffset = new BABYLON.Vector3(0, this.playerHeight, 0);
            this.gameInstance.camera.checkCollisions = true;
            
            GameUtils.setKeyBoardMapping(this.gameInstance);

            this.gameInstance.camera.speed = this.speed;
            this.gameInstance.camera.inertia = this.inertia;
            this.gameInstance.camera.angularSensibility = ( Helpers.isMobile())? this.angularSensibilityMobile : this.angularSensibility;

        } else {
            this.gameInstance.camera.detachControl(this.gameInstance.scene.getEngine().getRenderingCanvas());
        }
    }

    /*******************
     * PLACE THE PLAYER
     ******************/

     setPlayerPos(playerData_){

        //console.log(this.playerRotation );
        this.playerModel = playerData_;

        //convert teh X + y in position
        //console.log("playerPosY= "+this.playerModel.position_x+"; playerPosX= "+this.playerModel.position_y);

        //Placing the player
        this.gameInstance.camera.position.x = this.playerModel.position_x * MapMaker.TILE_SIZE;
        this.gameInstance.camera.position.z = this.playerModel.position_y * MapMaker.TILE_SIZE;

        if(this.playerRotation != null) this.gameInstance.camera.rotation = this.playerRotation;
     }

     savePlayerRotation(){
        //We memorize the player rotation
        this.playerRotation = this.gameInstance.camera.rotation;
     }

     getPlayerPos(){

        if(this.playerModel == null){
            this.playerModel = new PlayerModel();
            this.playerModel.position_x = -1;
            this.playerModel.position_y = -1;
        } else {
            this.playerModel.position_x =  this.gameInstance.camera.position.x / MapMaker.TILE_SIZE;
            this.playerModel.position_y  =  this.gameInstance.camera.position.z / MapMaker.TILE_SIZE;
        }
       

        return this.playerModel;
    }
    
    public activeJoystick(){

            this.isJoystick = true;
            let rightJoystick = new BABYLON.VirtualJoystick(false);
            
            this.gameInstance.scene.onBeforeRenderObservable.add(()=>{
                if(rightJoystick.pressed){

                    //OLD position
                    let moveY = rightJoystick.deltaPosition.y * (this.gameInstance.engine.getDeltaTime()/1000) * this.joystickMoveSpeedY;
                    
                    this.gameInstance.camera.position.z += moveY * Math.cos(  this.gameInstance.camera.rotation.y );
                    this.gameInstance.camera.position.x += moveY * Math.sin(  this.gameInstance.camera.rotation.y );

                    let moveX = rightJoystick.deltaPosition.x * (this.gameInstance.engine.getDeltaTime()/1000) * this.joystickMoveSpeedX;
                    this.gameInstance.camera.rotation.y += moveX;
                }
            });
        
    }
}