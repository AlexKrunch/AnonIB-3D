import {
  Engine, Scene,FreeCamera, Light,
  DirectionalLight, HemisphericLight, ShadowGenerator,
  Color4, Color3Gradient, Mesh, AbstractMesh,
  Vector3, MeshBuilder, ArcRotateCamera,
  StandardMaterial, Texture, Color3, PointLight,
} from 'babylonjs'

import * as GUI from 'babylonjs-gui';

import {
  GradientMaterial
}from 'babylonjs-materials'

import { MapMaker } from "./mapMaker";
import { PlayerMotor } from "./playerMotor";
import { Door } from "./door";
import { GameUIServiceService } from '../services/game-uiservice.service'
import { ChanWebService }from '../services/chan-web.service'
import { OfflineService }from '../services/offline.service'
import { Router} from '@angular/router';
import { InteractionModel } from '../models/interaction-model';

//Chan data
import{ GameDataResponseModel } from '../models/game-data.response.model';
import{ PlayerResponseModel } from '../models/player.response.model';
import { GameDataModel } from '../models/game-data.model';
import { PostModel } from "../models/post.model";
import { Item } from './item';
import { Gate } from './gate';
import {  GameUtils} from './gameUtils';
import { PlayerModel } from '../models/player.model';
import { CanvasPlane } from './canvasPlane';
import ItemModel from '../models/item.model';
import {Helpers} from '../utils/helpers';

export class Game {

  //Singleton data
  private static instance: Game;
  public canvas: HTMLCanvasElement;
  public engine: Engine;
  public scene: Scene;
  public camera: FreeCamera;
  private dLight: DirectionalLight;
  private hLight: HemisphericLight;
  private pLight: PointLight;
  public shadowGen: ShadowGenerator;
  private mapMaker : MapMaker;
  private playerMotor : PlayerMotor;
  public gameUIServiceService : GameUIServiceService;
  public offlineService : OfflineService;
  public chanWebService : ChanWebService;
  public router : Router;
  private ground: BABYLON.Mesh;
  public uiAdvancedTexture : GUI.AdvancedDynamicTexture;
  private postListRequestInterval;
  private postListRequestDelay : number = 10000;
  //private postListRequestDelay : number = 60000;

  private mapChanging = false;

  private playerModel :PlayerModel;
  private gameResponse : GameDataResponseModel;

  public mapKey = "";
  public clientUrl = "";
  public mapKeyOld = "";
  public activateJoystick = false;

  static getInstance() {
    return Game.instance;
  }

  constructor(canvasElement : string) {

      //Set the instance
      Game.instance = this;
      this.canvas = <HTMLCanvasElement> document.getElementById(canvasElement);
      this.engine = new Engine(this.canvas, true, null, false);
      // Listen for browser/canvas resize events
      window.addEventListener("resize", ()=> {
        this.engine.resize();
      });
      
  }

  setUIService(service_ : GameUIServiceService){
    this.gameUIServiceService = service_;
    this.gameUIServiceService.postArtCanvasEmitter.subscribe((post_) =>{
      this.postArtCanvas(post_);
    })

    this.gameUIServiceService.forceWSEmitter.subscribe(() =>{
      this.getPostList();
    })

    this.gameUIServiceService.deletePostEmitter.subscribe((post_) =>{
      console.log("deletePostEmitter:"+post_);
      this.deletePost(post_);
    })
  }

  setOfflineService(service_: OfflineService){
    this.offlineService = service_;
  }

  setWebService(service_ : ChanWebService){
    this.chanWebService = service_;
  }

  setRouter(router_){
    this.router = router_;
  }

  setMapKey(mapKey_){
    this.mapKey = mapKey_;
  }

  setClientUrl(clientUrl_){
    this.clientUrl = clientUrl_;
  }

  initGame() {

    console.log( "initGame() ");
    //we get the player profile
    let playerMod: PlayerModel = this.offlineService.getPlayerData();

        this.playerModel = playerMod;
        this.chanWebService.createUser(playerMod.id, playerMod.player_key, "", this.mapKey).subscribe(
          //Data success
          (data : GameDataResponseModel) => {

            this.gameResponse = data;

            if(  this.gameResponse.ok ) {

              this.playerModel = this.gameResponse.result.player;
              this.offlineService.saveChan( this.playerModel.map_key );
              this.setMapKey(this.playerModel.map_key);
              this.offlineService.savePlayer( this.playerModel );

              //Launch the game
              this.createScene();
              this.run();
              
              //Get the playerData
              if(this.postListRequestInterval == null){
                this.postListRequestInterval = setInterval(() => {
                  this.getPostList();
                }, this.postListRequestDelay );
              }
              this.getPostList();

            } else {
              alert("Profile not found!");
            }
           
        },
      );
     
  }

  createScene() {
    console.log("createScene()");
    if( this.scene != null)  this.scene.dispose();
       // We need a scene to create all our geometry and babylonjs items in
      this.scene = new Scene(this.engine);
      this.playerMotor = PlayerMotor.getInstance();
      this.playerMotor.initMotor();
      if(this.activateJoystick) this.playerMotor.activeJoystick();
      if(!this.mapMaker){
          this.mapMaker = new MapMaker();
      }
      this.mapMaker.loadMapData( this.gameResponse.result.map[0]);

      this.initAtmosphere();
      this.initOptimisation();
     
  }

  /************************
  * SCENE VISUAL STUFF
  * ligth / optimization / ground / skybox
  * and other shit
  ***********************/

  initAtmosphere(){

    //Scene atmoshpere
    this.scene.clearColor = new Color4(226/255, 244/255, 1);
    this.scene.ambientColor = new Color3(0.3, 0.3, 0.3);

    this.scene.autoClear = false; // Color buffer
    this.scene.autoClearDepthAndStencil = false;


    // Hemispheric light to enlight the scene
    this.hLight = new HemisphericLight("hemi", new Vector3(0, 0.5, 0), this.scene);
    this.hLight.intensity = 0.85;

    this.pLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 450, 1), this.scene);
    this.pLight.intensity = 1.5;

    //texture
    this.ground = Mesh.CreateGround("ground", 1000, 1000, 2, this.scene);
    this.ground.checkCollisions = true;
    this.ground.position.y = - 0.1;

    let mat = new StandardMaterial("matVolcano", this.scene);
    let texture = new Texture("./assets/textures/volcanic_text.jpg", this.scene);
    mat.diffuseTexture = texture;
    this.ground.material = mat;

    //Set UIManager
    this.uiAdvancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");


    let skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, this.scene);
    let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./assets/textures/skybox", this.scene);
      skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skybox.material = skyboxMaterial;
  }

 private shadowGenerator: BABYLON.ShadowGenerator;

 public setShadow(mesh_ : Mesh){
   /*
    if(this.shadowGenerator == null){
      this.shadowGenerator = new BABYLON.ShadowGenerator(256, this.pLight);
      //this.shadowGenerator.useBlurExponentialShadowMap = true;
      this.shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    }

    this.shadowGenerator.getShadowMap().renderList.push(mesh_);
    mesh_.receiveShadows = true;*/
 }

  initOptimisation(){
     //Optimization
     this.scene.blockMaterialDirtyMechanism = true;
    /*
     BABYLON.SceneOptimizer.OptimizeAsync(this.scene, BABYLON.SceneOptimizerOptions.LowDegradationAllowed(),
     ()=> {
       // On success
     }, ()=> {
       // FPS target not reached
     });*/
  }

  //Render process
  run() : void {
    this.engine.runRenderLoop(()=> {
      if(this.scene != null){
        this.scene.render();
        this.renderInteraction();
      }
    });
  }

  /************************
  * EXECUTE INTERACTION
  ***********************/

  //Render Interaction
  private nameLastMesh: string;
  private meshToClimb: AbstractMesh;
  private doorToOpen: Door;
  private itemToGet: Item;
  private gateTopass: Gate;
  private lastCanvas: CanvasPlane;

  public cleanLastMesh(){
    this.nameLastMesh = "";
    if(this.lastCanvas != null) this.lastCanvas.setInterfaceVisible(false);
  }

  interactionDelay: number = 18;
  interactionTimer: number = 0;

  renderInteraction(){

    if(this.interactionTimer <=0) {

    let width = this.scene.getEngine().getRenderWidth();
    let height = this.scene.getEngine().getRenderHeight();
    let pickInfo = this.scene.pick(width / 2, height / 2, null, false, this.camera);

    //Get info on the pointed object
    if (pickInfo.hit && this.nameLastMesh !== pickInfo.pickedMesh.name) {

      let newInter : InteractionModel = new InteractionModel();
      newInter.type = InteractionModel.TYPE_NONE;
      this.meshToClimb = null;
      this.doorToOpen = null;

      this.mapMaker.cleanLines();

      this.nameLastMesh = pickInfo.pickedMesh.name;
      newInter.description = pickInfo.pickedMesh.name;
      if(pickInfo.pickedMesh.name !== undefined){

        if (pickInfo.pickedMesh.name.indexOf("canvas") >= 0) {

          let canvas = this.mapMaker.getCanvasByKey(pickInfo.pickedMesh.name);
          if(canvas != null){

            if(canvas.isVirgin){
              newInter.type = InteractionModel.TYPE_CANVAS_VIRGIN;
              /*
            } else if(canvas.postModelGraffiti == null){
              newInter.type = InteractionModel.TYPE_CANVAS_TO_GRAFF;
              this.mapMaker.drawlines(canvas.dictKey);*/
            } else {
              newInter.type = InteractionModel.TYPE_CANVAS_FULL;
              this.mapMaker.drawlines(canvas.dictKey);
              this.mapMaker.displayUI(canvas.dictKey);

            }
            //newInter.type = (canvas.isVirgin)? InteractionModel.TYPE_CANVAS_VIRGIN : InteractionModel.TYPE_CANVAS_FULL;
            newInter.value = canvas.postModel;
            this.cleanLastMesh();
            canvas.setInterfaceVisible(true);
            this.lastCanvas = canvas;
          }

        } else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("ladder") >= 0){
          newInter.type = InteractionModel.TYPE_CLIMB_LADDER;
          this.meshToClimb = pickInfo.pickedMesh;

        /*
        } else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("advertisement") >= 0){

          let canvas = this.mapMaker.getAdByKey(pickInfo.pickedMesh.name);
          if(canvas != null){
            newInter.type = InteractionModel.TYPE_AD;
            newInter.value = canvas.postModel;
            this.cleanLastMesh();
            canvas.setInterfaceVisible(true);
            this.lastCanvas = canvas;
          }*/

        } else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("door") >= 0){

            //console.log("pick gate"+pickInfo.pickedMesh.name);
            let door: Door = this.mapMaker.getDoorByKey(pickInfo.pickedMesh.name);
            newInter.type = InteractionModel.TYPE_OPEN_DOOR;
            this.doorToOpen = door;

        } else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("item") >= 0){

            //console.log(pickInfo.pickedMesh.name);
            let item: Item = this.mapMaker.getItemByKey(pickInfo.pickedMesh.name);
            if( item != null && item.itemModel != null){
              newInter.type = InteractionModel.TYPE_GET_ITEM;
              newInter.value = item.itemModel;
              this.itemToGet = item;
            }
         
        }else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("gate") >= 0){

          let gate: Gate = this.mapMaker.getGateByKey(pickInfo.pickedMesh.name);
          newInter.type = InteractionModel.TYPE_PASS_GATE;
          newInter.value = gate.gateKey;
          this.gateTopass = gate;

        }
        /*else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("panel") >= 0){
          newInter.type = InteractionModel.TYPE_PANEL;
          newInter.value = "http://snuffchan.com/blog/donations/";
          //this.panel = gate;
        }*/

      }

      this.nameLastMesh = pickInfo.pickedMesh.name;
      this.gameUIServiceService.sendInteraction(newInter);
    }

    this.interactionTimer = this.interactionDelay;

    } else {
      this.interactionTimer --;
    }
  }

  //Climb obj
  climbObject(){
    this.camera.position.x = this.meshToClimb.position.x;
    this.camera.position.z = this.meshToClimb.position.z;
    this.camera.position.y = this.meshToClimb.position.y + MapMaker.TILE_SIZE;
  }

  //Climb obj
  openDoor(){
    //console.log(this.doorToOpen);
    //console.log(this.nameLastMesh );
    this.nameLastMesh = "";
    this.doorToOpen.openDoor();
  }

  //Post
  postArtCanvas(canvas_: PostModel){
    console.log(canvas_);
    this.mapMaker.setPictureOnCanvas(canvas_);
  }
  

  public switchKeyMapping(){
    GameUtils.switchKeyMapping(this);
  }

  public activeJoystick(){
    this.activateJoystick = true;
    if(this.playerMotor  != null) this.playerMotor.activeJoystick();
  }

  /************************
  * WEB SERVICE MANAGEMENT
  ***********************/

 private gameDataModel : GameDataModel;
 private posts : PostModel[];
 private items : ItemModel[];
 private isError :  boolean  = false;
 private errorMessage : string;
 private isPostLoaded : boolean  = false;
 private isFirstLaunch : boolean  = true; // test if player axist at first launch

 public getPostList(){

  if(!this.mapChanging){
    let playerTempModel = this.playerMotor.getPlayerPos();
    this.chanWebService.getMapPostList( playerTempModel.position_x, playerTempModel.position_y, this.playerModel.name, this.playerTalk).subscribe(
      //Data success
      (data : GameDataResponseModel) => {

        let gameResponse : GameDataResponseModel = data;

        if( gameResponse.ok ) {

          if(Helpers.isPT()){
            let postsLeft = gameResponse.result.postsLeft - 18;
            if(postsLeft < 0) postsLeft= 0;
            gameResponse.result.postsLeft = postsLeft;
          }

          this.updateGameData(gameResponse.result);
          this.mapMaker.updateNonStaticData(gameResponse.result);
          this.isFirstLaunch = false;

        } else {

          this.isError = true;
          this.errorMessage = "Unknown error.";
        }
     },
     error => {
        //console.log(JSON.stringify(error));
        this.isError = true;
        if(this.isFirstLaunch){
          this.gameUIServiceService.changeState(GameUIServiceService.STATE_NO_PLAYER);
        }
        this.errorMessage = JSON.stringify(error);
       
     }
    );
  }
  }

  
  public updateGameData(gameDataModel_){
    console.log("updateGameData()");
    this.gameDataModel = gameDataModel_;
    this.mapMaker.updateNonStaticData( this.gameDataModel );
    this.gameUIServiceService.updateGameData(this.gameDataModel);

    //Update the player
    this.playerModel = this.gameDataModel.player;
    /*
    if(this.playerModel.map_key != this.mapKey){
      this.generateMap(this.playerModel.map_key);
      this.mapMaker.loadMapData(this.gameDataModel.map[0]);
      this.mapKey = this.playerModel.map_key;
    }*/

    this.items = this.gameDataModel.itemsPlayer;
    this.offlineService.savePlayer( this.playerModel);
    this.isPostLoaded = true;
    this.isError = false;
  }

  public passGet(getName_){
    //this.playerMotor.savePlayerRotation();
    this.mapChanging = true;
    this.chanWebService.changeMapRandom( (getName_ === "secret") ).subscribe((data_: GameDataResponseModel) =>{
      if(data_.ok){
        //this.createScene();
        this.scene.dispose();
        this.mapMaker = null;
        delete this.mapMaker;
        this.offlineService.saveChan(data_.result.player.map_key);
        //this.router.navigateByUrl('/ch/'+data_.result.player.map_key);
        window.location.href = this.clientUrl+'/ch/'+data_.result.player.map_key;
        //console.log("change to :"+data_.result.player.map_key);
        //this.updateGameData(data_.result);
      }
    })
  }

  public getItem(key_){
    this.chanWebService.getItem(key_).subscribe(data_ =>{
      if(data_.ok){
        this.updateGameData(data_.result);
      }
    })
  }

  public deletePost(post_){
  
    let canvas: CanvasPlane = this.mapMaker.getCanvasByKey(post_.canvas_key);
    if(canvas != null){
      console.log("Post found and deleted= "+post_);
      canvas.deletePostData();
    }
  }

  private playerName = "" ;
  public changeName(name_){
    this.playerName = name_;
  }

  private playerTalk = "" ;
  public changeTalk(talk_){
    this.playerTalk = talk_;
  }

  /*
  public changeMapForPlayer(mapKey_){
    this.chanWebService.setMap(mapKey_).subscribe((data_)=>{
      console.log(data_);
    })
  }*/

  }