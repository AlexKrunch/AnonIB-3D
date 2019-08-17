import { Component, OnInit, Input } from '@angular/core';
import { UrlParser } from 'src/app/utils/urlParser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-display',
  templateUrl: './media-display.component.html',
  styleUrls: ['./media-display.component.css']
})
export class MediaDisplayComponent implements OnInit {

  @Input() url : string;
  urlParse : UrlParser;
  safeTubeURL;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    if(this.url != null){
      this.urlParse = new UrlParser(this.url);
      this.safeTubeURL =  this.urlParse.getSafeTubeURL(this.sanitizer);
    }
  }

}
