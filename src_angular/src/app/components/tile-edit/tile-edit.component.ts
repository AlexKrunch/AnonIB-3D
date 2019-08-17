import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TileModel } from 'src/app/models/tile.model';

@Component({
  selector: 'app-tile-edit',
  templateUrl: './tile-edit.component.html',
  styleUrls: ['./tile-edit.component.css']
})
export class TileEditComponent implements OnInit {

  @Input() tileValue;
  @Input() tileBrush;
  
  @Input() x;
  @Input() y;
  @Output() valueChange = new EventEmitter();

  @Input() allTiles: TileModel[] = [];
  public tileDisplay: string = "";

  constructor() { }

  ngOnInit() {
  }

  paint(){
    //this.tileValue = this.tileBrush;
    this.valueChange.emit( {x: this.x, y:this.y});
    //this.updateDisplay();
  }
  
  ngOnChanges(){
    this.updateDisplay();
  }

  updateDisplay(){
    if(this.allTiles != null) {
      this.allTiles.forEach(tile => {
        if(tile.value == this.tileValue){
          this.tileDisplay = tile.display;
          return;
        }
      });
    }
  }
}
