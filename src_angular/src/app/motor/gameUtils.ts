import {MapModel} from '../models/map.model';
import { Game } from "./game";
import { ConfigModel } from '../models/config.model';

export class GameUtils {

    //Doc for https://en.wikipedia.org/wiki/QWERTY
    //Key code list https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    
    public static setKeyBoardMapping(gameInstance_ : Game){

         let conf_: ConfigModel = gameInstance_.offlineService.getConfig();
        if( conf_.key_mapping == null ) {
            let language : string = navigator.language;
            GameUtils.setKeyMappingFromLang(gameInstance_, language);
        } else {
            GameUtils.setKeyForMapping(gameInstance_ , conf_.key_mapping);
        }

    }

    public static setKeyMappingFromLang(gameInstance_ : Game, lang_ :string){

        if(lang_.toLowerCase().indexOf("fr") >= 0){
            GameUtils.setKeyForMapping(gameInstance_, "ZSQD");
        } else {
            GameUtils.setKeyForMapping(gameInstance_, "WSAD");
        }
       
    }

    public static setKeyForMapping(gameInstance_ : Game, mapping_ :string){
        console.log("setKeyMapping() lang_= "+mapping_);

        let config : ConfigModel =  gameInstance_.offlineService.getConfig();

        if(mapping_ === "ZSQD"){
            //If Azerty
            gameInstance_.camera.keysUp = [90]; // Z
            gameInstance_.camera.keysDown = [83]; // S
            gameInstance_.camera.keysLeft = [81]; // Q
            gameInstance_.camera.keysRight = [68]; // D
        } else {
             //If Qwerty
             gameInstance_.camera.keysUp = [87]; // w
             gameInstance_.camera.keysDown = [83]; // S
             gameInstance_.camera.keysLeft = [65]; // A
             gameInstance_.camera.keysRight = [68]; // D
             
        }
       
        config.key_mapping = mapping_;
        gameInstance_.offlineService.saveConfig(config);
        gameInstance_.gameUIServiceService.updateConfigData(config);
        //gameInstance_.offlineService.saveKeyboard(lang_.toLowerCase());
    }

    public static switchKeyMapping(gameInstance_ : Game){

        let conf_: ConfigModel = gameInstance_.offlineService.getConfig();
        if( conf_.key_mapping == null ) {
            let language : string = navigator.language;
            GameUtils.setKeyMappingFromLang(gameInstance_, language);
        } else {
            if( conf_.key_mapping === "ZSQD") GameUtils.setKeyForMapping(gameInstance_ , "WSAD");
            if( conf_.key_mapping === "WSAD") GameUtils.setKeyForMapping(gameInstance_ , "ZSQD");
            
        }
    }

}