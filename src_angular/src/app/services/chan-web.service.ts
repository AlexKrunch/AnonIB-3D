import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{ GameDataResponseModel } from '../models/game-data.response.model';
import{ PostStuffResponseModel } from '../models/postStuff.response.model';
import{ AdminResponseModel} from '../models/admin.response.model';
import{ GenericResponseModel } from '../models/generic.response.model';
import{ PostListResponseModel} from '../models/post-list.response.model';

import { PostModel } from '../models/post.model';
import { ActionModel } from '../models/action.model';
import { AllPostResponseModel } from '../models/all-post.response.model'
import { AllMapResponseModel } from '../models/all-map.response.model'
import { PlayerResponseModel } from '../models/player.response.model';
import {AllTilesResponseModel} from '../models/all-tiles.response.model';
import { PlayerModel } from '../models/player.model';
import { MapModel } from '../models/map.model';
import { OfflineService } from './offline.service';
import { AdvertisementModel } from '../models/advertisement.model';


@Injectable({
  providedIn: 'root'
})
export class ChanWebService {

  serverUrl : string = environment.apiUrl;
  //playerData : PlayerModel;

  constructor(private http:HttpClient, private offlineService: OfflineService) {}

/***********************
 * CHAN/POST WEBSERVICE
 **********************/

  //Init the server URL for the WS
  setServerUrl( url ){
      this.serverUrl =  url;
  }

  //Get thread posts list
  getMapPostList(playerX_, playerY_, name_, talk_){
    let body = new HttpParams();
    body = this.addPlayerParams(body);
    body = body.append('action', 'getMapPosts');
    body = body.append('position_x', playerX_);
    body = body.append('position_y', playerY_);
    body = body.append('name', name_);
    body = body.append('talk', talk_);
    return this.http.post<GameDataResponseModel>(this.serverUrl+'ChanWebService.php',body);
  }

//Get thread posts list
getCanvasPostList(mapKey, canvasKey){
    let body = new HttpParams();
    body = this.addPlayerParams(body);
    body = body.append('action', 'getPostsByCanvas');
    body = body.append('map_key', mapKey);
    body = body.append('canvas_key', canvasKey);
    return this.http.post<PostListResponseModel>(this.serverUrl+'ChanWebService.php',body);
}

//Get thread posts list
getReplyPostList(id_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'getReplies');
  body = body.append('post_id', id_);
  return this.http.post<PostListResponseModel>(this.serverUrl+'ChanWebService.php',body);
}

//Create post
createPost(post_ : PostModel){

    let body = new HttpParams();
    body = this.addPlayerParams(body);
    body = body.append('action', 'createPost');
    body = body.append('url', post_.url);
    body = body.append('message', post_.message);
    body = body.append('canvas_key', post_.canvas_key);
    body = body.append('map_key', post_.map_key);
    body = body.append('reply', post_.reply.toString());

    //body = body.set('action' , 'createThread');
    return this.http.post<PostStuffResponseModel>(this.serverUrl+'ChanWebService.php',body);

}

createLog(action_: ActionModel){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'setAction');
  body = body.append('player_action', action_.action);
  body = body.append('value', action_.value);
  return this.http.post<any>(this.serverUrl+'ChanWebService.php',body);
}

createAndUploadPaint(post_ : PostModel, imageData_ ){
  
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'createPost');
  body = body.append('message', post_.message);
  body = body.append('canvas_key', post_.canvas_key);
  body = body.append('map_key', post_.map_key);
  body = body.append('reply', post_.reply.toString());
  body = body.append('image_data', imageData_);
  body = body.append('graffiti', post_.graffiti.toString());

  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  //http://j-query.blogspot.com/2011/02/save-base64-encoded-canvas-image-to-png.html

  //body = body.set('action' , 'createThread');
  return this.http.post<PostStuffResponseModel>(this.serverUrl+'ChanWebService.php',body);
}

/***********************
 * PLAYER WEBSERVICE
 **********************/

//Get thread posts list
/*setMap(mapKey){

  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('map_key', mapKey);
  body = body.append('action', 'changeMapPlayer');
  return this.http.post<PlayerResponseModel>(this.serverUrl+'ChanWebService.php',body);

}*/

changeMapPlayerName(mapName){

  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('map_name', mapName);
  body = body.append('action', 'changeMapPlayerName');
  return this.http.post<PlayerResponseModel>(this.serverUrl+'ChanWebService.php',body);

}

changeMapRandom(isSecret_){

  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('secret', isSecret_);
  body = body.append('action', 'changeMapRandom');
  return this.http.post<GameDataResponseModel>(this.serverUrl+'ChanWebService.php',body);

}

getItem(itemKey){

  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('item_key', itemKey);
  body = body.append('action', 'setPlayerItem');
  return this.http.post<PlayerResponseModel>(this.serverUrl+'ChanWebService.php',body);

}

addPlayerParams(body_: HttpParams){
  let playerData: PlayerModel = this.offlineService.getPlayerData();
  body_ = body_.append('player_id',playerData.id.toString());
  body_ = body_.append('player_key',playerData.player_key);
  return body_;
}

createUser(anonId, anonToken, password, mapKey){
  let body = new HttpParams();
    body = body.append('action', 'initPlayer');
    if(anonId) body = body.append('player_id', anonId);
    if(anonToken) body = body.append('player_key', anonToken);
    if(password) body = body.append('player_password', password);
    if(mapKey) body = body.append('map_key', mapKey);
    return this.http.post<GameDataResponseModel>(this.serverUrl+'ChanWebService.php',body);
}


getAds(){
  return this.http.get<AdvertisementModel[]>('./assets/amaz/amaz.json');
}

/***********************
 * ADMIN WEBSERVICE
 **********************/

deletePost(postId_,threadId_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'deletePost');
  body = body.append('post_id', postId_.toString());
  body = body.append('map_key', threadId_);

  return this.http.post<GenericResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }


 
 setPostUrlToFile(postId_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'setPostUrlToFile');
  body = body.append('post_id', postId_.toString());

  return this.http.post<GenericResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 deletePostForVal(val_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'deletePostForVal');
  body = body.append('val',val_);

  return this.http.post<GenericResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 setBan(id_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'setBan');
  body = body.append('post_id',id_);

  return this.http.post<GenericResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 canonPost(postId_,threadId_){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'setPostCanon');
  body = body.append('post_id', postId_.toString());
  body = body.append('map_key', threadId_);

  return this.http.post<GenericResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 isAdminConnected(){
  let body = new HttpParams();
  body = body.append('action', 'testAdminSession');
  return this.http.post<AdminResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 connectAdmin(password_){
  let body = new HttpParams();
  body = body.append('action', 'validAdmin');
  body = body.append('password', password_);
  return this.http.post<AdminResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 setAdminPassword(password_){
  let body = new HttpParams();
  body = body.append('action', 'setAdminPassword');
  body = body.append('password', password_);
  return this.http.post<AdminResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 logout(){
  let body = new HttpParams();
  body = body.append('action', 'unLog');
  return this.http.post<AdminResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 getAllPost(){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'getAllPost');
  return this.http.post<AllPostResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

 getAllMaps(){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'getAllMaps');
  return this.http.post<AllMapResponseModel>(this.serverUrl+'ChanWebService.php',body);
 }

getAllTiles(){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'getAllTiles');
  return this.http.post<AllTilesResponseModel>(this.serverUrl+'ChanWebService.php',body);
}

saveMapModel(map_: MapModel){
  let body = new HttpParams();
  body = this.addPlayerParams(body);
  body = body.append('action', 'saveMapModel');

  body = body.append('id', map_.id.toString());
  body = body.append('key', map_.key);
  body = body.append('name', map_.name);
  body = body.append('theme', map_.theme);
  body = body.append('x', map_.x.toString());
  body = body.append('y', map_.y.toString());
  body = body.append('door_key_n', map_.door_key_n);
  body = body.append('door_key_e', map_.door_key_e);
  body = body.append('door_key_s', map_.door_key_s);
  body = body.append('door_key_w', map_.door_key_w);

  body = body.append('level_data', map_.level_data);

  body = body.append('height', map_.height.toString());
  body = body.append('width', map_.width.toString());

  return this.http.post<any>(this.serverUrl+'ChanWebService.php',body);
}


}
