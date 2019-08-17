import ItemModel from './item.model';

export class PlayerModel {

    public id: number;
    public name: string;
    public talk: string;
    public is_admin: boolean;
    public player_key: string;
    public map_key: string;
    public last_action: number;
    public hp: number;
    public position_x: number;
    public position_y: number;
    public position_z: number;

}