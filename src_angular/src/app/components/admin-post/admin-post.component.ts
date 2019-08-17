import { Component, OnInit } from '@angular/core';
import { ChanWebService } from 'src/app/services/chan-web.service';
import { AllPostResponseModel } from 'src/app/models/all-post.response.model';
import { PostModel } from 'src/app/models/post.model';
import {GenericResponseModel} from 'src/app/models/generic.response.model'


@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  public posts: PostModel[] = [];
  valToDelete: string = "";
  p: number = 1;

  constructor(private chanWebService: ChanWebService) { }

  ngOnInit() {
    this.updatePost();
  }

  updatePost(){
    this.chanWebService.getAllPost().subscribe( (data_: AllPostResponseModel) =>{
      this.posts = data_.result.reverse();
    })
  }

  private postToDelete;
  
  deletePost(postModel_){

    this.postToDelete = postModel_;
    console.log("this.postToDelete:"+this.postToDelete);
    this.chanWebService.deletePost(postModel_.id,postModel_.map_key).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        //alert(JSON.stringify(data));
        //this.updatePost();
        this.posts.find((post_)=>{
          return (post_.id ==  this.postToDelete.id);
        }).was_deleted = true;

      });
  }

  deleteVal(){
    this.chanWebService.deletePostForVal(this.valToDelete).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        alert(JSON.stringify(data));
        this.updatePost();
      });
  }

  setBan(id_){
    this.chanWebService.setBan(id_).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        alert(JSON.stringify(data));
        this.updatePost();
      });
  }

  canonPost(id_, thread_){
    this.chanWebService.canonPost(id_, thread_).subscribe(
      //Data success
      (data : GenericResponseModel) => {
        alert(JSON.stringify(data));
        this.updatePost();
      });
  }

  banPost(){
    
  }

}
