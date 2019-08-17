import { Component, OnInit } from '@angular/core';
import { MapModel } from 'src/app/models/map.model';
import { AllMapResponseModel }from 'src/app/models/all-map.response.model';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { AllTilesResponseModel } from 'src/app/models/all-tiles.response.model';
import { TileModel } from 'src/app/models/tile.model';
import {GenericResponseModel} from '../../models/generic.response.model';

@Component({
  selector: 'app-admin-map',
  templateUrl: './admin-map.component.html',
  styleUrls: ['./admin-map.component.css']
})
export class AdminMapComponent implements OnInit {

  maps: MapModel[];
  selectedMapKey: any;
  selectedTileVal: number =0;
  selectedMap: MapModel;
  mapData: string[] = [];
  allTiles: TileModel[];

  mapDataLines: string[][] = [];

  constructor(private chanWebService: ChanWebService) { }

  ngOnInit() {

    this.chanWebService.getAllMaps().subscribe( (data_: AllMapResponseModel) =>{
      this.maps = data_.result;
      if( this.maps.length > 0){

        //We looking for the alpha map
        this.maps.forEach(map => {
          if(map.name === "alpha"){
            this.selectedMapKey = map.key;
            this.onChangeMap(this.selectedMapKey);
          }
        });
      } 
    });

    this.chanWebService.getAllTiles().subscribe( (data_: AllTilesResponseModel) =>{
     
      this.allTiles = data_.result;
      this.selectedTileVal =  this.allTiles[0].value;

    });
  }

  onChangeMap(key_){

    this.selectedMapKey = key_;

    this.maps.forEach(map => {
      if(map.key == key_) {
        this.selectedMap = map;

        this.currentX = this.selectedMap.x;
        this.currentY = this.selectedMap.y;

        //Parsing the map datas
        this.mapData = this.selectedMap.level_data.split(",");
        this.mapDataLines = [];

        let n =0;
        for(let h = 0; h < this.selectedMap.height; h++){
          let mapDataWidth = [];
          for(let w = 0; w < this.selectedMap.width; w++){
            mapDataWidth.push(this.mapData[n]);
            n ++;
          }
          this.mapDataLines.push(mapDataWidth);
        }

      }
    });
  }

  onChangeTileBrush(val_){
    this.selectedTileVal = val_;
  }

  onChangeTileAt(x_,y_){
    console.log( this.selectedTileVal +","+x_+","+y_);
    let lineTemp = this.mapDataLines[y_]; 
    lineTemp[x_] =  this.selectedTileVal.toString() ;
    this.mapDataLines[y_] = lineTemp;
    console.log( this.mapDataLines);
  }

  saveMap(){
    let tempNewData : string = "" ;
    for(let y= 0; y < this.mapDataLines.length; y++){
      let line = this.mapDataLines[y];
      for(let x= 0; x < line.length; x++){
        tempNewData = tempNewData+line[x]+",";
      }
    }
   
    this.selectedMap.level_data = tempNewData ;
    console.log( this.selectedMap);
    this.chanWebService.saveMapModel( this.selectedMap ).subscribe( (data_: any) => {
      alert(JSON.stringify(data_));
    });

  }

  currentX: number;
  currentY: number;
  moveMap(dir_){

    switch(dir_){
      //North
      case 0:
        this.currentY --;
      break;

      //East
      case 1:
       this.currentX ++;
     break;

      //South
      case 2:
        this.currentY ++;
      break;

      //West
      case 3:
        this.currentX --;
      break;
    }

    this.selectedMap = null;

    this.maps.forEach(map => {
      if(map.x == this.currentX && map.y == this.currentY){
        this.onChangeMap(map.key);
      }
    });
  }

}
