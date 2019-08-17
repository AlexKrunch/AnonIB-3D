import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-pin-post-ui',
  templateUrl: './pin-post-ui.component.html',
  styleUrls: ['./pin-post-ui.component.css']
})
export class PinPostUiComponent implements OnInit {

  @Input() postModel: PostModel;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {

    if(changes != null && changes.postModel != null){
      this.postModel = changes.postModel.currentValue;
    }

  }

  closePost(){
    this.close.emit();
  }

}
