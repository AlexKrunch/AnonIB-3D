import { Injectable } from '@angular/core';
import { PlayerModel } from '../models/player.model';
import * as localforage from "localforage";
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  PLAYER_KEY: string = "player_one_data2";
  PLAYER_NAME_KEY: string = "player_name";
  KEYBOARD_KEY: string = "keyboard";
  CONFIG_KEY: string = "config_key";
  CHAN_KEY: string = "CHAN_KEY3";

  constructor() {
  }

  getPlayerData(){
    let data = localStorage.getItem(this.PLAYER_KEY);
    if(data != null ) return JSON.parse(data);
    return new PlayerModel();
  }

  savePlayer(player_ : PlayerModel){
    return localStorage.setItem(this.PLAYER_KEY, JSON.stringify(player_));
  }

  getPlayerName(){
    let data = localStorage.getItem(this.PLAYER_NAME_KEY);
    if(data != null ) return data;
    let name = Math.random().toString(36).substr(2, 9);
    this.savePlayerName(name);
    return name;
  }

  savePlayerName(playerName_){
    return localStorage.setItem(this.PLAYER_NAME_KEY, JSON.stringify(playerName_));
  }

  getConfig(){
    let data = localStorage.getItem(this.CONFIG_KEY);
    console.log("getConfig"+data);
    if(data != null ) return JSON.parse(data);
    return new ConfigModel();
  }

  saveConfig(config_: ConfigModel){
    localStorage.setItem(this.CONFIG_KEY,  JSON.stringify(config_));
  }

  getChanData(){
    let data = localStorage.getItem(this.CHAN_KEY);
    if(data != null ) return JSON.parse(data);
    return ['alpha'];
  }

  saveChan(chan_ : string){
    let listChan: string[] = this.getChanData();
    for(let c = 0; c < listChan.length; c++){
      if(listChan[c] == chan_) return;
    }
    listChan.push(chan_);
    return localStorage.setItem(this.CHAN_KEY, JSON.stringify(listChan));
  }
  
  /*
  getKeyboard(){
    return localStorage.getItem(this.KEYBOARD_KEY);
  }

  saveKeyboard(keyboard_){
    console.log("saveKeyboard()"+keyboard_);
    return  localStorage.setItem(this.KEYBOARD_KEY, keyboard_);
  }*/
}
