import { Component, OnInit, Input, Inject, EventEmitter, Output} from '@angular/core';
import {GameUIServiceService} from '../../services/game-uiservice.service'
import {PostModel} from '../../models/post.model';
import {PostStuffResponseModel} from '../../models/postStuff.response.model';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { UrlParser } from 'src/app/utils/urlParser';
import { PlayerInterfaceComponent } from '../../interfaces/player-interface/player-interface.component';
import { Router } from '@angular/router'; 
import { OfflineService } from 'src/app/services/offline.service';
import { PlayerModel } from 'src/app/models/player.model';
import {DOCUMENT} from '@angular/platform-browser';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-posting-ui',
  templateUrl: './posting-ui.component.html',
  styleUrls: ['./posting-ui.component.css']
})
export class PostingUIComponent extends PlayerInterfaceComponent implements OnInit {

  @Input() canvasKey: string;
  @Input() reply: number;
  @Output() onDestroyReply = new EventEmitter<number>();

  public postModel: PostModel;
  isLoading: boolean = false;
  postingFinished: boolean = false;
  hostFile: boolean = false;
  urlParse: UrlParser;

  //For files
  file;
  imagePath;
  fileBase64Url;

  constructor(private gameUIServiceService : GameUIServiceService,
    private chanWebService: ChanWebService,
    private router : Router,
    private offlineService: OfflineService,
    @Inject(DOCUMENT) private document: Document) {
    super();
  }

  ngOnInit() {
    this.postModel = new PostModel();
    this.urlParse = new UrlParser(this.postModel.url);
    this.postModel.canvas_key = this.canvasKey;
    this.postModel.reply = this.reply;
  }

  ngOnChanges(changes: any) {

    if(this.postModel != null && changes.canvasKey != null) this.postModel.canvas_key = changes.canvasKey.currentValue;
    if(this.isPhonePosting) this.hostFile = true;

  }

  changeHost(val_:boolean){
    this.hostFile = val_;
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert( "Only images are supported.");
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      //console.log(reader.result.toString());
      this.fileBase64Url = reader.result.toString(); 
    }
  }

  sendPost(){
    //this.gameUIServiceService.sendPost(this.postModel);
    console.log(this.file);

    if(this.fileBase64Url == null && !this.postModel.url && !this.postModel.message){
      alert("It's doesn't looks like a big post :( ");
      return;
    }
   
    this.isLoading = true;

    //Use this.
    if(this.hostFile) {

      //To host
      this.chanWebService.createAndUploadPaint( this.postModel, this.fileBase64Url ).subscribe(
      //Data success
      (data : PostStuffResponseModel) => {
        
        let postStuffResponse : PostStuffResponseModel = data;
        if( postStuffResponse.ok ) {
          this.destroyReply();
          //console.log("result "+JSON.stringify( postStuffResponse));
          this.gameUIServiceService.forceWS();
          this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);

        }
        this.isLoading = false;
        this.postingFinished = true;
        
    },
    error => {
       console.log(JSON.stringify(error));
       this.isLoading = false;
    }
   );

    } else {
      //Not hosting
      this.chanWebService.createPost( this.postModel ).subscribe(
        //Data success
        (data : PostStuffResponseModel) => {
  
          let postStuffResponse : PostStuffResponseModel = data;
          if( postStuffResponse.ok ) {
  
            //console.log("result "+JSON.stringify( postStuffResponse));
            this.destroyReply();
            //We clean the fields
            this.postModel.url = "";
            this.postModel.message = "";
            this.gameUIServiceService.forceWS();
            this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
          }
          this.isLoading = false;
          this.postingFinished = true;
          
      },
      error => {
         console.log(JSON.stringify(error));
         this.isLoading = false;
      }
     );
    }
    

  }

  cancelPost(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

  getPhoneLink(){
    let playerModel: PlayerModel = this.offlineService.getPlayerData();
    let phonePostingUrl = environment.clientUrl+"phone-poster/"+playerModel.id+"/"+playerModel.player_key+"/"+this.postModel.canvas_key;
    return phonePostingUrl;
 }

  destroyReply(){
    console.log("destroyReply()");
    this.reply = -1;
    this.onDestroyReply.emit(-1);
  }
}
