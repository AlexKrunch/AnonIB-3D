import { Component, OnInit, Input } from '@angular/core';
import { GameDataModel } from '../../models/game-data.model';
import { GameUIServiceService } from 'src/app/services/game-uiservice.service';

@Component({
  selector: 'app-player-ui',
  templateUrl: './player-ui.component.html',
  styleUrls: ['./player-ui.component.css']
})
export class PlayerUiComponent implements OnInit {

  @Input() gameDataModel: GameDataModel;

  constructor(private gameUIServiceService: GameUIServiceService) { }

  ngOnInit() {
  }

  close(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

}
