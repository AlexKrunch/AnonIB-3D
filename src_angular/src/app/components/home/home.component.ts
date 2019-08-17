import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';
import { OfflineService } from 'src/app/services/offline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isMobile:boolean = false;
  public isTOSAccepted: boolean = false;
  
  constructor(public deviceService: DeviceDetectorService, private router: Router,
    private offlineService: OfflineService) { }

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
    let url = location.href;
    if(url.indexOf(environment.clientUrl) < 0){
      window.location.href = environment.clientUrl;
    }

    let playerData_ = this.offlineService.getPlayerData();
    if(playerData_ != null){
      this.isTOSAccepted = true;
    }
  }

  launchGame(){
    this.router.navigateByUrl('/ch/alpha');
  }

}
