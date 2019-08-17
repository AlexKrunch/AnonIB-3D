import { Component, OnInit } from '@angular/core';
import {GameUIServiceService} from '../../services/game-uiservice.service'
import {ChanWebService} from '../../services/chan-web.service'
import { GenericResponseModel } from 'src/app/models/generic.response.model';
import{ AdminResponseModel} from '../../models/admin.response.model';

@Component({
  selector: 'app-cmd-ui',
  templateUrl: './cmd-ui.component.html',
  styleUrls: ['./cmd-ui.component.css']
})
export class CmdUiComponent implements OnInit {

  commandTyped: string;
  commandReplies: string[] = [];

  constructor(private gameUIServiceService : GameUIServiceService, private chanWebService: ChanWebService) { }

  ngOnInit() {
  }

  close(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

  sendCMD(){
    if(this.commandTyped) {
      this.commandReplies.unshift(">"+this.commandTyped);
      this.analysisCMD(this.commandTyped);
      this.commandTyped = "";
    }
  }
  /********************
   * COMMAND ANALYSIS
   * ******************/

   analysisCMD(cmd_){
     let cmdData = cmd_.split(" ");
     if(cmdData[0] == "adminconnect" && cmdData[1]){

        this.commandReplies.unshift("#### TRY TO CONNECT ADMIN #####");
        this.connectAdmin(cmdData[1]);

     }else if(cmdData[0] == "admininit" && cmdData[1]){

        this.commandReplies.unshift("#### TRY TO INIT ADMIN #####");
        this.setAdminPassword(cmdData[1]);

      }else if(cmdData[0] == "logout" && cmdData[1]){

        this.commandReplies.unshift("#### LOGOUT #####");
        this.logout();

      }else if(cmdData[0] == "admintest"){

        this.commandReplies.unshift("#### TEST ADMIN CONNECTION #####");
        this.isAdminConnected();

     } else {
        this.commandReplies.unshift("!command not recognized!");
     }
   }
   
   isAdminConnected(){
    this.chanWebService.isAdminConnected().subscribe( (data_: AdminResponseModel) => {
      if(data_.ok) {

        if(data_.result === "true"){
          this.commandReplies.unshift("***** Admin is connected *****");
        } else {
          this.commandReplies.unshift("***** Admin is not connected *****");
        }
       
        this.commandReplies.unshift(data_.result);
      } else {
        this.commandReplies.unshift("!error!");
      }
    })
   }
  
   connectAdmin(password_){
    this.chanWebService.connectAdmin(password_).subscribe( (data_: AdminResponseModel) => {
      if(data_.ok) {
        this.commandReplies.unshift("***** Admin connected *****");
        this.commandReplies.unshift(data_.result);
      } else {
        this.commandReplies.unshift("!error!");
      }
    })
   }
  
   setAdminPassword(password_){
    this.chanWebService.setAdminPassword(password_).subscribe( (data_: AdminResponseModel) => {
      if(data_.ok) {
        this.commandReplies.unshift("***** Set password successful *****");
        this.commandReplies.unshift(data_.result);
      } else {
        this.commandReplies.unshift("!error!");
      }
    })
   }
  
   logout(){
    this.chanWebService.logout().subscribe( (data_: AdminResponseModel) => {
      if(data_.ok) {
        this.commandReplies.unshift("***** Logout successful *****");
        this.commandReplies.unshift(data_.result);
      } else {
        this.commandReplies.unshift("!error!");
      }
    })
   }

}
