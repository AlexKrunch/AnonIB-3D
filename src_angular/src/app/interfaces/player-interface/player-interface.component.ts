import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import ItemModel from 'src/app/models/item.model';
import {Constants} from 'src/app/utils/constants';
import { GameDataModel } from '../../models/game-data.model';

@Component({
  selector: 'app-player-interface',
  templateUrl: './player-interface.component.html',
  styleUrls: ['./player-interface.component.css']
})
export class PlayerInterfaceComponent implements OnInit {

  @Input() gameDataModel: GameDataModel = new GameDataModel();
  @Input() isPhonePosting: boolean;

  constructor() { }

  ngOnInit() {
   if( this.gameDataModel == null) this.gameDataModel = new GameDataModel();
  }


  //test
  canDelete(){

    if(this.gameDataModel.player.is_admin) return true;

    for (let item of this.gameDataModel.itemsPlayer) {
     if(item.action.toLowerCase().indexOf(Constants.ITEM_KEY_DELETE_SPONGE) >= 0 ) return true;
    }

    return false;

  }

  canFav(){
    
    if(this.gameDataModel.player.is_admin) return true;

    for (let item of this.gameDataModel.itemsPlayer) {
     if(item.action.toLowerCase().indexOf(Constants.ITEM_KEY_VARNISH) >= 0 ) return true;
    }

    return false;

  }

  canUpload(){

    if(this.gameDataModel.player.is_admin || this.isPhonePosting) return true;

    for (let item of this.gameDataModel.itemsPlayer) {
     if(item.action.toLowerCase().indexOf(Constants.ITEM_KEY_UPLOAD_RING) >= 0 ) return true;
    }

    return false;
  }

  isAdmin(){
    if(this.gameDataModel.player.is_admin) return true;

    return false;
  }

}
