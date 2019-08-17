import {
    Engine, Scene,FreeCamera, Light,
    DirectionalLight, HemisphericLight, ShadowGenerator,
    Color4, Color3Gradient,
    Mesh, VideoTexture,
    Vector3, MeshBuilder,
    ArcRotateCamera, StandardMaterial, Texture,
    Color3, SpriteManager, Sprite
  } from 'babylonjs';

  import * as GUI from 'babylonjs-gui';

import { Game } from "./game";
import { MapMaker } from "./mapMaker";
import { PostModel } from '../models/post.model';
import { UrlParser } from '../utils/urlParser';

export class CanvasPlane {

    public objType : String = "canvas";
    private gameInstance : Game;
    private mapInstance : MapMaker;
    public dictKey : string;
    public sizeCanvas: number;

    public planeMesh: Mesh;
    public planeMeshGraffiti: Mesh;

    public isVirgin : boolean = true;

    constructor(objType_, dictKey, size, x, y, z, dir){

        //Manage diff percentage of size
        this.objType = objType_;
        this.sizeCanvas = size;
        let scaling: number = (objType_ === "canvas")? 0.9 : 1;
        this.sizeCanvas =   this.sizeCanvas * scaling;
        this.dictKey = this.objType+"_"+dictKey+"_"+dir;
        this.gameInstance = Game.getInstance();
        this.mapInstance = MapMaker.getInstance();

        this.planeMesh = MeshBuilder.CreatePlane( this.dictKey, {size:  this.sizeCanvas}, this.gameInstance.scene);
        this.planeMesh.position.y = (size * 0.5) +y;

        if(this.objType == "canvas"){
            this.mapInstance.registerNewCanvas(this.dictKey ,this);
        } else {
            this.mapInstance.registerNewAd(this.dictKey ,this);
        } 

        //Determine the orientation of the canvas
        //let dir = this.mapInstance.getCanvasOrientation( this.tileCoordonates[0], this.tileCoordonates[1]);
        //console.log("TILE DIR= "+dir);
        let canvasX: number;
        let canvasY: number;
        let canvasZ: number;
        let canvasAngle: number;
        let gapToTheWall = 0.1;
        /*
        canvasX = x;
        canvasY = (size * -0.5) - (size * 0.1) + y;*/
        
        switch(dir){

            case this.mapInstance.DIR_N:
                canvasX = x;
                canvasZ = (size * -0.5) - gapToTheWall + z;
                canvasAngle = 0;
            break;

            case this.mapInstance.DIR_E:
                canvasX = (size * -0.5) - gapToTheWall + x;
                canvasZ = z;
                canvasAngle = (Math.PI/180) * 90;
            break;

            case this.mapInstance.DIR_S:
                canvasX = x;
                canvasZ = (size * 0.5) + gapToTheWall + z;
                canvasAngle =  (Math.PI/180) * 180;
            break;

            case this.mapInstance.DIR_W:
                canvasX = (size * 0.5) + gapToTheWall + x;
                canvasZ = z;
                canvasAngle = (Math.PI/180)*270;
            break;
        }

        this.planeMesh.position.x = canvasX;
        this.planeMesh.position.z = canvasZ;
        this.planeMesh.rotate(BABYLON.Axis.Y, canvasAngle, BABYLON.Space.WORLD);

        let mat = new StandardMaterial("matCanvas", this.gameInstance.scene);
        mat.alpha = 0;
        this.planeMesh.material = mat;
        this.planeMesh.visibility = 0;
        this.planeMesh.material.freeze();
        this.planeMesh.freezeWorldMatrix();

        this.postModel = new PostModel();
        this.postModel.canvas_key = this.dictKey;
        
    }

    public postModel: PostModel;
    public postModelGraffiti: PostModel;
    private textureContext;
    private texture : BABYLON.DynamicTexture;
    private textureNonDynamic : BABYLON.Texture;

    private font_size = 70;
    private font = "bold " + this.font_size + "px Arial";
    private canvasScale = 900;

    //private postImageUrl: string;
    private postImage: HTMLImageElement;

    private postImageGraffitiUrl: string;
    private postImageGraffiti: HTMLImageElement;

    private mat: StandardMaterial;

    /*
    private displayUI: GUI.Rectangle;
    private uiAdvancedTexture: GUI.AdvancedDynamicTexture;
    private label : GUI.TextBlock;*/

    setPostData(postModel_: PostModel){

        this.initTextureObject();

       /* if(postModel_.graffiti) {
            this.postModelGraffiti = postModel_;
        } else {*/
            this.postModel = postModel_;
        //}

        let postImageUrl = this.postModel.url;

        if(this.postModel.preview == null || this.postModel.preview.length === 0){
            postImageUrl = new UrlParser(postModel_.url).getImage();
        } else {
            postImageUrl = this.postModel.preview;
        }

        //Launch picture loading
        if( postImageUrl.length > 0){

            if( postModel_.graffiti ){

                this.postImageGraffiti = new Image();
                this.postImageGraffiti.crossOrigin = "anonymous";
                this.postImageGraffiti.src =  postImageUrl;
                this.postImageGraffiti.onload = (event_) => {
                    this.imgLoaded();
                }

                this.postImageGraffiti.onerror = (event_) => {
                    
                    this.textureNonDynamic = new Texture("./assets/textures/404.png", this.gameInstance.scene);
                    this.mat.diffuseTexture = this.textureNonDynamic;
                    this.mat.diffuseTexture.hasAlpha = true;
                    this.planeMesh.material = this.mat;
                    this.planeMesh.material.freeze();
                }


            } else {

                this.postImage = new Image();
                this.postImage.crossOrigin = "anonymous";
                this.postImage.src =  postImageUrl;
                this.postImage.onload = (event_) => {
                    this.imgLoaded();
                }

                this.postImage.onerror = (event_) => {

                    this.textureNonDynamic = new Texture("./assets/textures/404.png", this.gameInstance.scene);
                    this.mat.diffuseTexture = this.textureNonDynamic;
                    this.mat.diffuseTexture.hasAlpha = true;
                    this.planeMesh.material = this.mat;
                    this.planeMesh.material.freeze();
                }
    
            }
           
            
           
        } else {
            //this.texture.drawText(this.postModel.message, null, null, this.font, "#ffffff", "#00000000", true);
            /*
            this.texture.drawText(this.postModel.message, null, this.canvasScale *0.5, this.font, "#ffffff", "#00000000", true);
            this.texture.drawText(this.postModel.message, null, (this.canvasScale *0.5) -4, this.font, "#000000", "#00000000", true);*/
        }

        this.planeMesh.visibility = 1;
        this.isVirgin = false;
        this.gameInstance.cleanLastMesh();

        //Add text as UI?
        
        if(this.postModel.message) {
                this.texture.drawText(this.postModel.message, null, this.canvasScale *0.5, this.font, "#7F7F7F", "#00000000", true);
                this.texture.drawText(this.postModel.message, null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);
        }
    }

    //Dealing with post img loaded
    public imgLoaded(){


        let ratio;
        let newWidth;
        let newHeight;
        let newX = 0;
        let newY = 0;

        if(this.postImage != null){
            if(this.postImage.height > this.postImage.width) {

                
                ratio = (this.objType === "canvas")? this.canvasScale / this.postImage.height :this.canvasScale / this.postImage.width;
                newWidth = this.postImage.width * ratio;
                newHeight = this.postImage.height * ratio;
                newX = (newWidth - this.canvasScale) * (-0.5);

            } else {

                ratio = (this.objType === "canvas")? this.canvasScale / this.postImage.width:  this.canvasScale / this.postImage.height;
                newWidth = this.postImage.width * ratio;
                newHeight = this.postImage.height * ratio;
                newY = (newHeight - this.canvasScale) * (-0.5);

            }

            this.textureContext.drawImage(this.postImage,newX, newY,newWidth, newHeight);
        }
        
        //If graffiti
        if(this.postImageGraffiti != null) {

            ratio =  this.canvasScale / this.postImageGraffiti.width;
            console.log("ratio= "+ratio);
            newWidth = this.postImageGraffiti.width * ratio;
            newHeight = this.postImageGraffiti.height * ratio;
            //newY = (newHeight - this.canvasScale) * (-0.5);

            this.textureContext.drawImage(this.postImageGraffiti,0, 0,newWidth, newHeight);
        }

        if(this.postModel.url.toLocaleLowerCase().indexOf(".gif") > 0 ){

            this.texture.drawText(".GIF", null, this.canvasScale *0.5, this.font, "#000000", "#00000000", true);
            this.texture.drawText(".GIF", null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);

        } else if(new UrlParser(this.postModel.url).getUrlType() === UrlParser.TYPE_YOUTUBE) {

            this.texture.drawText(">VID", null, this.canvasScale *0.5, this.font, "#000000", "#00000000", true);
            this.texture.drawText(">VID", null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);

        } else if(this.postModel.message) {
            
            this.texture.drawText(this.postModel.message, null, this.canvasScale *0.5, this.font, "#7F7F7F", "#00000000", true);
            this.texture.drawText(this.postModel.message, null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);
            
            
        }
        /* else if(this.postModelGraffiti && this.postModelGraffiti.message) {
            this.texture.drawText(this.postModelGraffiti.message, null, this.canvasScale *0.5, this.font, "#7F7F7F", "#00000000", true);
            this.texture.drawText(this.postModelGraffiti.message, null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);

        }*/

        if(this.postModel.is_canon){
            this.texture.drawText("Δ",(newX) + 8, (newY) + 80, this.font, "#000000", "#00000000", true);
            //mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
        }
       
        this.texture.update();
        this.planeMesh.material = this.mat;
        this.planeMesh.material.freeze();
    }

    private initTextureObject(){

        this.planeMesh.material.unfreeze();

        if( this.mat == null){
            this.mat = new StandardMaterial("mat", this.gameInstance.scene);
            this.texture = new BABYLON.DynamicTexture("DynamicText",{width:this.canvasScale, height:this.canvasScale}, this.gameInstance.scene,false);
            this.texture.hasAlpha = true;
            this.textureContext = this.texture.getContext();
            this.mat.diffuseTexture = this.texture;
            this.planeMesh.material = this.mat;
        }
    }


    public deletePostData(){
        //console.log("deletePostData= "+this.postModel.url+"; canvas_key: "+this.postModel.canvas_key);
        this.postModel = new PostModel();
        this.postModel.canvas_key = this.dictKey;
        this.isVirgin = true;
        let mat = new StandardMaterial("matCanvas", this.gameInstance.scene);
        mat.alpha = 0;
        this.planeMesh.material.unfreeze();
        this.planeMesh.material = mat;
        this.planeMesh.material.freeze();
    }

    public setInterfaceVisible(val_){
        /*
        //if(this.displayUI != null){
            
            //this.displayUI.isVisible = val_;
            if(this.postModel != null && this.postModel.message && this.uiAdvancedTexture != null){

                if(val_){

                    //this.uiAdvancedTexture.addControl(this.displayUI);
                    //this.uiAdvancedTexture.addControl(this.label);
                    this.displayUI.isVisible = true;
        
                } else {
                    
                    //this.uiAdvancedTexture.removeControl(this.displayUI);
                    //this.uiAdvancedTexture.removeControl(this.label);
                    this.displayUI.isVisible = false;
                  
                }
            }
        //}
        */
    }

}