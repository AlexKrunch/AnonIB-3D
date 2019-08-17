import { Component, OnInit ,Input} from '@angular/core';
import { GameDataModel } from '../../models/game-data.model';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { post } from 'selenium-webdriver/http';
import { ActionModel } from 'src/app/models/action.model';
import {GameUIServiceService} from '../../services/game-uiservice.service'
import { Helpers } from 'src/app/utils/helpers';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {

  @Input() gameDataModel: GameDataModel = new GameDataModel();
  messageToPost: string = "";

  constructor(private chanWS: ChanWebService,
    private gameUIServiceService : GameUIServiceService,) { }

  ngOnInit() {

  }

  postMessage(){
    let action = new ActionModel();
    action.value = this.messageToPost;
    action.action = "talk";
    this.messageToPost = "";
    this.chanWS.createLog(action).subscribe(
      //Data success
      (data : any) => {
        console.log(data);
        this.gameUIServiceService.forceWS();
       
      }
    );
   
  }

}
