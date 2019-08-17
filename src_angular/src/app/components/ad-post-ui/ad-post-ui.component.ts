import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ChanWebService } from 'src/app/services/chan-web.service';
import {AdvertisementModel} from '../../models/advertisement.model';

@Component({
  selector: 'app-ad-post-ui',
  templateUrl: './ad-post-ui.component.html',
  styleUrls: ['./ad-post-ui.component.css']
})
export class AdPostUiComponent implements OnInit {

  lang: string;
  country: string= "us";

  currentURL: string;
  currentImg: string;
  currentDesc: string;
  currentAlt: string;

  myInterval;
  adsFiltered: AdvertisementModel[];
  adIndex = 0;

  @Output() close = new EventEmitter<boolean>();

  constructor( private chanWebService: ChanWebService) { }

  ngOnInit() {
    this.lang = navigator.language;

        /*
        if(this.lang.toLowerCase().indexOf("us")> -1){
            this.country = "us";
        } else if(this.lang.toLowerCase().indexOf("fr")> -1){
            this.country = "fr";
        }*/

        //Map made! We load the money maker
       this.chanWebService.getAds().subscribe( (ads: AdvertisementModel[]) =>{
           //console.log(ads);

           this.adsFiltered = new Array();
            for(let a = 0; a < ads.length; a++){
                if(ads[a].loc === this.country){
                  this.adsFiltered.push(ads[a]);
                }
            }
            console.log(  this.adsFiltered);
            this.adIndex = Math.floor(Math.random() * Math.floor(this.adsFiltered.length));
            this. displayAd();
            /*this.myInterval = setInterval(()=>{
              this.updateAd();
            }, 15000);*/
        });
  }

  displayAd(){
    let ad : AdvertisementModel = this.adsFiltered[this.adIndex];
    this.currentURL = ad.url;
    this.currentImg = ad.picture;
    this.currentDesc = ad.name;
  }

  updateAd(){
    this.adIndex ++;
    console.log(this.adsFiltered);
    if( this.adIndex >=  this.adsFiltered.length)  this.adIndex = 0;
    if(this.adsFiltered.length > 0) this.displayAd();
  }

  gotTo(url_){
    window.open(url_, '_blank');
  }


}
