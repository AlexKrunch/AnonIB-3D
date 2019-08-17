import { Component, OnInit, Input, ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';
import {GameUIServiceService} from '../../services/game-uiservice.service'
import { InteractionModel } from '../../models/interaction-model';
import { PostModel } from 'src/app/models/post.model';
import { ChanWebService } from 'src/app/services/chan-web.service';
import {  PostStuffResponseModel } from '../../models/postStuff.response.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import 'pepjs'
import { Size } from 'babylonjs';

@Component({
  selector: 'app-painting-ui',
  templateUrl: './painting-ui.component.html',
  styleUrls: ['./painting-ui.component.css']
})
export class PaintingUiComponent implements OnInit {

  @Input() canvasKey: string;
  @Input() urlBgPicture: string;
  @Input() reply: number;
  @Output() onDestroyReply = new EventEmitter<number>();
  @ViewChild('paintingCanvas') elementCanvas:ElementRef;

  public imageBg;
  public context: CanvasRenderingContext2D;
  public isLoading : boolean = false;
  postModel: PostModel;
  private canvasPercent = 0;
  private isFinalExport: boolean = false;


  constructor(private gameUIServiceService : GameUIServiceService, private chanWebService: ChanWebService,
    private deviceService: DeviceDetectorService) { }

  ngOnInit() {

    this.postModel = new PostModel();
    this.postModel.map_key = "";
    this.postModel.canvas_key = this.canvasKey;
    this.postModel.message = "";
    this.postModel.graffiti = true;
    this.postModel.reply = this.reply;

    if(this.urlBgPicture != null){
      this.imageBg = new Image();
      this.imageBg.crossOrigin = "Anonymous";
      this.imageBg.src = this.urlBgPicture;
      console.log('this.urlBgPicture: '+this.urlBgPicture);
      this.imageBg.onload = () => {
        this.redraw();
      };
    }
   
    //is Mobile? We need to make teh mouse move with pepjs
   // if(!this.deviceService.isDesktop()){

    this.elementCanvas.nativeElement.addEventListener( "pointerdown", ( event_ ) => {
      this.paint = true;
      this.canvasMouseDown( event_ );
    });

      this.elementCanvas.nativeElement.addEventListener( "pointermove", ( event_ ) => {
        this.canvasMouseMove( event_ );
      });

      this.elementCanvas.nativeElement.addEventListener( "pointerup", ( event_ ) => {
        this.canvasMouseUp( event_ );
      });

    //}
  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.elementCanvas.nativeElement).getContext('2d');
  }

  closeCanvas(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }
  
  getImg(){
    let data: string = this.elementCanvas.nativeElement.toDataURL("image/png");
    data += "snffch";
    return data;
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
    return blob;
 }



  sendImg(){

    if( (this.clickX.length +this.clickY.length) < 200){
      alert("It's doesn't looks like a big drawing :( ");
      return;
    } 

    this.isFinalExport = true;
    this.redraw();

    this.chanWebService.createAndUploadPaint( this.postModel, this.getImg() ).subscribe(
      //Data success
      (data : PostStuffResponseModel) => {
        //console.log("data:"+data);
        let postStuffResponse : PostStuffResponseModel = data;
        if( postStuffResponse.ok ) {

          //console.log("result "+JSON.stringify( postStuffResponse));
          this.destroyReply();
          this.closeCanvas();
          this.gameUIServiceService.forceWS();
          this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);

        }
        this.isLoading = false;
        this.isFinalExport = false;
        
    },
    error => {
       //console.log(JSON.stringify(error));
       this.isLoading = false;
       this.isFinalExport = false;
       this.redraw();
    }
   );

    
  }

  /*****************
   * EVENT DEALING WITH PAINTING
   *****************/

  clickX = new Array();
  clickY = new Array();
  clickDrag = new Array();
  paint;

  clickDurationCurrent = 0;
  clickDurationList = new Array();

  //Colors
  colorRed = "#df4b26";
  colorPink = "#ff8cd4";
  colorBlack = "#000000";
  colorPurple = "#cb3594";
  colorGreen = "#659b41";
  colorYellow = "#ffcf33";
  colorBrown = "#986928";
  colorBlue = "#0066ff";
  colorWhite = "#ffffff";
  curColor = this.colorRed;
  clickColor = new Array();

  selectedColor = "#000000";

  clickSize = new Array();
  strokeSize: number = 10;

   canvasMouseDown( event_ ){

    let mouseX = event_.offsetX + (event_.offsetX * this.canvasPercent);
    let mouseY =  event_.offsetY + (event_.offsetY* this.canvasPercent);  
    this.paint = true;
    this.addClick(mouseX , mouseY , false);
    this.redraw();

   }

   canvasMouseUp( event_ ){
    this.paint = false;
    this.clickDurationList.push(this.clickDurationCurrent);
    this.clickDurationCurrent = 0;
   }

   canvasMouseMove( event_ ){

    if(this.paint){
      let mouseX = event_.offsetX + (event_.offsetX* this.canvasPercent);
      let mouseY = event_.offsetY + (event_.offsetY* this.canvasPercent);
      this.addClick(mouseX , mouseY, true);
      this.redraw();
      this.clickDurationCurrent += 1;
    }
   }

   addClick(x, y, dragging){

    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
    //console.log(this.selectedColor);
    this.clickColor.push(this.curColor);
    this.clickSize.push(this.strokeSize);
    }

   redraw(){

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
    this.context.lineJoin = "round";
    this.context.lineWidth = 10;

    //set bg image if it exist
    
    if(this.imageBg && !this.isFinalExport){

      let ratio;
      let newWidth;
      let newHeight;
      let newX = 0;
      let newY = 0;

      if(this.imageBg.height > this.imageBg.width) {

          ratio = this.elementCanvas.nativeElement.height / this.imageBg.height;
          newWidth = this.imageBg.width * ratio;
          newHeight = this.imageBg.height * ratio;
          newX = (newWidth -  this.elementCanvas.nativeElement.width) * (-0.5);

      } else {

          ratio =   this.elementCanvas.nativeElement.width / this.imageBg.width;
          newWidth = this.imageBg.width * ratio;
          newHeight = this.imageBg.height * ratio;
          newY = (newHeight -  this.elementCanvas.nativeElement.height ) * (-0.5);

      }

      this.context.drawImage(this.imageBg, newX, newY,newWidth,  newHeight );
    }
        
    for(var i=0; i < this.clickX.length; i++) {
      this.context.beginPath();
      if(this.clickDrag[i] && i > 0){
        this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
       }else{
        this.context.moveTo(this.clickX[i], this.clickY[i]);
       }
       this.context.lineTo(this.clickX[i], this.clickY[i]);
       this.context.closePath();
       this.context.strokeStyle = this.clickColor[i];
       this.context.lineWidth = this.clickSize[i];
       this.context.stroke();
    }
  }

  /*****************
   * DEALING with painting style
   *****************/

   changeColor(color_){
      this.curColor = color_;
   }

   clear(){
     
    if(this.clickDurationList.length > 0){
      let lastDuration = this.clickDurationList.pop();
      this.clickColor = this.clickColor.slice(0, this.clickColor.length-lastDuration-1);
      this.clickX =  this.clickX.slice(0, this.clickX.length-lastDuration-1);
      this.clickY = this.clickY.slice(0, this.clickY.length-lastDuration-1);
      this.clickDrag = this.clickDrag.slice(0, this.clickDrag.length-lastDuration-1);
      this.clickSize = this.clickSize.slice(0, this.clickSize.length-lastDuration-1);
      this.redraw();
    }
    
   }

   destroyReply(){
    this.reply = -1;
    this.onDestroyReply.emit(-1);
  }

}
