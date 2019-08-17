import { Component, OnInit } from '@angular/core';
import { ChanWebService } from 'src/app/services/chan-web.service';
import {ActivatedRoute} from "@angular/router";
import { PlayerInterfaceComponent } from 'src/app/interfaces/player-interface/player-interface.component';
import { PlayerModel } from 'src/app/models/player.model';
import { OfflineService } from 'src/app/services/offline.service';

@Component({
  selector: 'app-phone-poster',
  templateUrl: './phone-poster.component.html',
  styleUrls: ['./phone-poster.component.css']
})
export class PhonePosterComponent implements OnInit {

  public playerId: string;
  public playerKey: string;
  public playerModel: PlayerModel;
  public canvasKey: string;

  constructor(private offlineService : OfflineService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
     this.playerId = params['id'];
     this.playerKey = params['key'];
     this.canvasKey = params['canvas'];

     //set the player model, at it to offline
     this.playerModel = new PlayerModel();
     this.playerModel.id = Number(this.playerId);
     this.playerModel.player_key = this.playerKey;
      this.offlineService.savePlayer( this.playerModel);
    });
  }

  ngOnInit() {

  }

}
