import { Component, OnInit } from '@angular/core';
import { GameUIServiceService } from 'src/app/services/game-uiservice.service';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {

  constructor(private gameUIServiceService: GameUIServiceService) { }

  ngOnInit() {
  }

  closeCanvas(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

}
