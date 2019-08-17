import { PostModel } from './post.model';
import { PlayerModel } from './player.model';
import ItemModel from './item.model';
import {MapModel} from './map.model';
import {ActionModel} from './action.model';

export class GameDataModel {

    player: PlayerModel = new PlayerModel();
    players: PlayerModel[];
    posts: PostModel[];
    postsLeft: number;
    itemsPlayer: ItemModel[]= [];
    itemsMap: ItemModel[];
    map: MapModel[];
    actions: ActionModel[];
    
}