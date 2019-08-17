import { GameDataModel } from './game-data.model';
import { GenericResponseModel } from "./generic.response.model";

export class GameDataResponseModel extends GenericResponseModel {

    result : GameDataModel;
    
}