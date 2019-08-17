import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../motor/game';
import { GameUIServiceService } from '../../services/game-uiservice.service'
import { InteractionModel } from '../../models/interaction-model';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { OfflineService } from 'src/app/services/offline.service';
import { PostModel } from '../../models/post.model';
import { PlayerModel } from 'src/app/models/player.model';
import { ConfigModel } from 'src/app/models/config.model';
import { GameDataModel } from 'src/app/models/game-data.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gl-view',
  templateUrl: './gl-view.component.html',
  styleUrls: ['./gl-view.component.css']
})
export class GlViewComponent implements OnInit {

  public gameState : number;
  public currentinteraction: InteractionModel;
  public pinnedPostModel : PostModel;
  public playerData : PlayerModel = new PlayerModel();
  public gameDataModel : GameDataModel = new GameDataModel();
  public config : ConfigModel = new ConfigModel();
  public game : Game;
  public isMobile: boolean = false;
  public adDisplay: boolean = true;

  public currentMapKey: string = "alpha";
  public clientURL: string = "";
  public chanList: string[];

  public reply: number = -1;

  constructor(private gameUIServiceService : GameUIServiceService,
    private chanWebService: ChanWebService,
    private offlineService: OfflineService,
    private router: Router,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService) {

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.params.subscribe( params => {
        this.currentMapKey = params['map'];
        console.log(this.currentMapKey);
      });

      this.clientURL = environment.clientUrl;
    }

  ngOnInit() {

    this.clientURL = environment.clientUrl;
    this.chanList = this.offlineService.getChanData();
    console.log( this.chanList);

    this.gameUIServiceService.changeStateEmitter.subscribe( (state_)=> {
      this.changeGameState(state_);
      if(state_ === GameUIServiceService.STATE_NO_PLAYER) this.router.navigate(['/']);
    });

    this.gameUIServiceService.sendInteractionsEmitter.subscribe( (inter_)=> {
      this.receiveInteraction(inter_ );
    });

    
    this.gameUIServiceService.changeGameDataEmitter.subscribe( (gameData_: GameDataModel)=> {
      this.gameDataModel = gameData_;

      if(this.currentMapKey !== this.gameDataModel.player.map_key){
        this.currentMapKey =  this.gameDataModel.player.map_key;
        this.adDisplay = true;
      }
      
    });

    this.gameUIServiceService.changeConfigEmitter.subscribe( (config_: ConfigModel)=> {
      this.config =config_;
    });

    this.isMobile = this.deviceService.isMobile();


    // Create our game class using the render canvas element
    this.game = new Game('renderCanvas');
    //alert("desktop: "+this.deviceService.isDesktop()+" mobile:"+this.deviceService.isMobile()+" tablet: "+this.deviceService.isTablet());
    if(!this.deviceService.isDesktop()){
      this.game.activeJoystick();
      /*alert("desktop: "+this.deviceService.isDesktop+" mobile:"+this.deviceService.isDesktop+" tablet: "+
      this.deviceService.isTablet);*/
    } 
    
    this.game.setUIService(this.gameUIServiceService);
    this.game.setWebService(this.chanWebService); 
    this.game.setOfflineService(this.offlineService); 
    this.game.setClientUrl( this.clientURL );
    this.game.setMapKey(this.currentMapKey);
    this.game.setRouter(this.router);
    this.game.initGame();
  }

  @ViewChild('renderCanvas') renderCanvas: ElementRef;

  ngAfterViewInit(): void {
    
    //console.log(window.screen);
    this.renderCanvas.nativeElement.width = (window.screen.width);
    this.renderCanvas.nativeElement.height = (window.screen.availHeight);
    //console.log(JSON.stringify(window.screen));

    window.onresize = ()=>{
      this.renderCanvas.nativeElement.height = (window.screen.availHeight);
      this.renderCanvas.nativeElement.width = (window.screen.width);
    }
}

 

  changeGameState(state_: number){
    this.gameState = state_;
    //console.log("this.gameState ="+this.gameState );
  }

  receiveInteraction(inter_ : InteractionModel){
    this.currentinteraction = inter_;
  }

  /***** INTERACTION! ******/
  openUrl(){
    //window.open(this.currentinteraction.value, "_blank");
    this.gameState = 2;
  }

  openCMD(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_CMD_UI);
  }

  climbLadder(){
    this.game.climbObject();
  }

  openDoor(){
    this.game.openDoor();
  }

  openPostingUI(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_POSTING_UI);
  }

  openPaintingUI(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_PAINTING_UI);
  }

  openInfoUI(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_INFO_UI);
  }

  openPlayerUI(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_PLAYER_UI);
  }

  onPin(event_){
    if(this.pinnedPostModel != null) this.pinnedPostModel = null;
    this.pinnedPostModel = event_;
    console.log( this.pinnedPostModel );
  }

  unPin(event_){
    //console.log( "unpin");
    this.pinnedPostModel = null
  }

  closeAd(event_){
    this.adDisplay = false;
  }

  changeMapping(){
    this.game.switchKeyMapping();
  }

  passGate(val_){
    this.game.passGet(val_);
  }

  getItem(key_){
    //console.log("get item");
    this.game.getItem(key_);
  }

  addReply(id_){
    this.reply = id_;
  }

  destroyReply(){
    this.reply = -1;
  }

  @ViewChild('renderCanvas') elementCanvas:ElementRef;
  savePhoto(){

    alert("try to write picture");
    let canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    console.log(canvas);
  
    //let photoUrl = canvas.getContext('2d').getImageData(0,0,600,600)
    let data = canvas.toDataURL('image/png');
      
    //document.location.href = photoUrl;
    console.log(data);
    let w=window.open('about:blank','Screen Capture');
    w.document.write("<img src='"+data+"' alt='from canvas'/>");

  }

  gotTo(url_){
    window.open(url_, '_blank');
  }

  changeTalk(e_){
    console.log(e_);
    this.game.changeTalk(e_);
  }


  ngOnDestroy(){
    /*
    this.gameUIServiceService.changeStateEmitter.unsubscribe();
    this.gameUIServiceService.sendInteractionsEmitter.unsubscribe();
    this.gameUIServiceService.changeGameDataEmitter.unsubscribe();
    this.gameUIServiceService.changeConfigEmitter.unsubscribe();*/
    delete this.game;

  }
}
