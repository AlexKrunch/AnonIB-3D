import { Component, OnInit, Input, EventEmitter,  Output} from '@angular/core';
import {PostModel} from '../../models/post.model';
import {GameUIServiceService} from '../../services/game-uiservice.service'
import { UrlParser } from 'src/app/utils/urlParser';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { GenericResponseModel } from 'src/app/models/generic.response.model';
import { PostListResponseModel } from 'src/app/models/post-list.response.model';
import { GameDataModel } from '../../models/game-data.model';
import { PlayerInterfaceComponent } from '../../interfaces/player-interface/player-interface.component';

@Component({
  selector: 'app-post-viewer-ui',
  templateUrl: './post-viewer-ui.component.html',
  styleUrls: ['./post-viewer-ui.component.css']
})
export class PostViewerUiComponent extends PlayerInterfaceComponent implements OnInit {

  @Input() postModel: PostModel;
  @Input() gameData: GameDataModel;
  @Output() pin = new EventEmitter<boolean>();
  @Output() onReply = new EventEmitter<number>();
  imgValue : string;
  urlParse : UrlParser;
  postModelList: PostModel[] = [];

  constructor(private gameUIServiceService : GameUIServiceService, private chanWebService : ChanWebService ) {
    super();
  }

  ngOnInit() {

    if(this.postModel){
      this.imgValue = new UrlParser(this.postModel.url).getImage();
      this.chanWebService.getReplyPostList(this.postModel.id).subscribe( (data_: PostListResponseModel) =>{
        console.log(data_);
        if(data_.result){
          if(data_.result.length && data_.result.length >0){
            if(data_.result[0].id != null) this.postModelList = data_.result;
          }

        }
      })
    } 
  }

  ngOnChanges(changes: any) {

    if(changes != null && changes.postModel != null){
      this.postModel = changes.postModel.currentValue;
      if(this.postModel != null || this.postModel != undefined) this.imgValue = new UrlParser(this.postModel.url).getImage();
    }

  }

  closePost(){
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

  pinPost(postModel_){
    this.pin.emit(postModel_);
  }

  private postToDelete;
  deletePost(postModel_){

    this.postToDelete = postModel_;
    console.log("this.postToDelete:"+this.postToDelete);
    this.chanWebService.deletePost(postModel_.id,postModel_.map_key).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        this.gameUIServiceService.deletePost( this.postToDelete);
        this.gameUIServiceService.forceWS();
        this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
      });
  }

  canonPost(id_, thread_){
    this.chanWebService.canonPost(id_, thread_).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        this.gameUIServiceService.forceWS();
        this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
      });
  }

  banPost(){
    
  }

  setPostUrlToFile(id_){
    this.chanWebService.setPostUrlToFile(id_).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        alert(data);
      });
  }

  reply(postModel_: PostModel){
    console.log(postModel_.id);
    this.onReply.emit(postModel_.id);
    this.gameUIServiceService.changeState(GameUIServiceService.STATE_GAME_RUNNING);
  }

}
