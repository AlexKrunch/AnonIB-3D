import { Injectable, EventEmitter } from '@angular/core';
import { InteractionModel } from '../models/interaction-model';
import { PlayerModel } from '../models/player.model';
import { PostModel} from '../models/post.model';
import { ConfigModel } from '../models/config.model';
import ItemModel from '../models/item.model';
import { GameDataModel } from '../models/game-data.model';

@Injectable({
  providedIn: 'root'
})
export class GameUIServiceService {

  public changeStateEmitter = new EventEmitter<number>();
  //public changePlayerDataEmitter = new EventEmitter<PlayerModel>();
  //public changeItemsDataEmitter = new EventEmitter<any>();
  public changeGameDataEmitter = new EventEmitter<GameDataModel>();
  public changeConfigEmitter = new EventEmitter<ConfigModel>();
  public sendInteractionsEmitter = new EventEmitter<InteractionModel>();
  public postArtCanvasEmitter = new EventEmitter<PostModel>();
  public deletePostEmitter  = new EventEmitter<PostModel>();

  public static get STATE_GAME_RUNNING():number { return 0; }
  public static get STATE_POSTING_UI():number { return 1; }
  public static get STATE_POST_VIEWER_UI():number { return 2; }
  public static get STATE_POSTING_LOADING():number { return 3; }
  public static get STATE_PAINTING_UI():number { return 4; }
  public static get STATE_CMD_UI():number { return 5; }
  public static get STATE_INFO_UI():number { return 6; }
  public static get STATE_ITEMS_UI():number { return 7; }
  public static get STATE_NO_PLAYER():number { return 8; }
  public static get STATE_PLAYER_UI():number { return 9; }

  public forceWSEmitter = new EventEmitter<any>();


  private gameState : number =  GameUIServiceService.STATE_GAME_RUNNING;

  constructor() {

  }

  public changeState( state_ : number){
    this.gameState = state_;
    this.changeStateEmitter.emit( this.gameState);
  }

  public sendInteraction(interact_ : InteractionModel){
    this.sendInteractionsEmitter.emit( interact_);
  }

  public sendPost(post_ : PostModel){
    this.postArtCanvasEmitter.emit( post_);
  }

  public updateGameData(gameData_ : GameDataModel){
    this.changeGameDataEmitter.emit( gameData_ );
  }

  /*
  public updatePlayerData(playerData_ : PlayerModel){
    this.changePlayerDataEmitter.emit( playerData_);
  }

  public updateItemsData(itemsData){
    console.log(itemsData);
    this.changeItemsDataEmitter.emit( {items: itemsData});
  }*/

  public updateConfigData(config_ : ConfigModel){
    this.changeConfigEmitter.emit( config_);
  }

  public forceWS(){
    this.forceWSEmitter.emit();
  }

  public deletePost(post_){
    this.deletePostEmitter.emit(post_);
  }

}
