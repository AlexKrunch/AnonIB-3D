import { DomSanitizer } from '@angular/platform-browser';

export class UrlParser {

    public url: string;
    public type: number = 0;

    public static get TYPE_LINK():number { return 0; }
    public static get TYPE_IMG():number { return 1; }
    public static get TYPE_IMG_GIF():number { return 2; }
    public static get TYPE_MOVIE():number { return 3; }
    public static get TYPE_YOUTUBE():number { return 4; }
    public static get TYPE_MP3():number { return 5; }

    constructor(url_ : string){
        this.url = url_;
        this.type = this.getUrlType();
        return this;
    }

    public setUrl(url_: string){
        this.url = url_;
        this.type = this.getUrlType();
        return this;
    }

   public getUrlType(){

        if(this.url != undefined){
            let tempUrl = this.url.toLowerCase();
            if(tempUrl.indexOf("png") > -1 || tempUrl.indexOf("jpg")  > -1 || tempUrl.indexOf("jpeg")  > -1 || tempUrl.indexOf("webp")  > -1 ){
                return UrlParser.TYPE_IMG;
            } else if(tempUrl.indexOf("gif") > -1 ){
                return UrlParser.TYPE_IMG_GIF;
            } else if(tempUrl.indexOf(".mp4") > -1 || tempUrl.indexOf(".webm") > -1 ){
                return UrlParser.TYPE_MOVIE;
            } else if(tempUrl.indexOf("youtube.com") > -1 || tempUrl.indexOf("youtu.be") > -1 ){
                return UrlParser.TYPE_YOUTUBE;
            } else if(tempUrl.indexOf("mp3") > -1){
                return UrlParser.TYPE_MP3;
            }
        }

        return UrlParser.TYPE_LINK;
    }

    public getYoutubeId(){
        let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = this.url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return "";
        }
    }

    public getImage(){

        if(this.type === UrlParser.TYPE_YOUTUBE){
            //get the preview
            return "https://img.youtube.com/vi/"+this.getYoutubeId()+"/hqdefault.jpg";
        }

        return this.url;
    }

    public getSafeTubeURL(sanitizer_ : DomSanitizer){
        let tmpURl;
        if(this.type === UrlParser.TYPE_YOUTUBE){
            //get the preview
            tmpURl =  "https://www.youtube.com/embed/"+this.getYoutubeId();
           return sanitizer_.bypassSecurityTrustResourceUrl(tmpURl);
        }

        return this.url;
    }
}