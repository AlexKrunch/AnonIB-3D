import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { OfflineService } from 'src/app/services/offline.service';
import { PlayerResponseModel } from '../../models/player.response.model';
import { PlayerModel } from '../../models/player.model';
import { GameDataResponseModel } from 'src/app/models/game-data.response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  anonId: number;
  anonToken: string;
  password: string;

  errorWs: string;
  isLoading: boolean = false;
  isTOSAccepted: boolean = false;
  playerData: PlayerModel; 

  constructor(private chanWebService: ChanWebService, private offlineService: OfflineService,
    private router: Router) { }

  ngOnInit() {

    let playerData_ = this.offlineService.getPlayerData();
      if(playerData_ != null){
        this.anonId = playerData_.id;
        this.anonToken = playerData_.player_key;
        this.isTOSAccepted = true;
      }

  }

  //Call the WS
  createUser(){
    console.log("createUser");
    this.isLoading = true;
    this.chanWebService.createUser( this.anonId, this.anonToken, this.password, "" ).subscribe(
      //Data success
      (data : GameDataResponseModel) => {
        this.isLoading = false;
        if(data.ok){
          this.playerData = data.result.player;
          this.offlineService.savePlayer(this.playerData);
        } else {
          this.errorWs = data.error;
        }
      }
    );
  }

  //Call the WS
  createNewUser(){
    
    this.anonId = 0;
    this.anonToken ="";

    this.createUser();
  }

  validAndLaunchGame(){
    this.router.navigateByUrl('/ch/alpha');
  }

  validAndLaunchAdmin(){
    this.router.navigateByUrl('/admin-post');
  }

  acceptTOS(){
    this.isTOSAccepted = true;
  }

}
