export class MapModel {
    /*
    "id":6,
    "key":"5cc5c91ded507",
    "name":"alpha",
    "theme":"medieval",
    "x":5,
    "y":1,
    "door_key_n":"5cc5c91ded8d7",
    "door_key_e":null,
    "door_key_s":"5cc5c91ded9cb",
    "door_key_w":"5cc5c91dedcd5",
    "level_data":"1,3,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,3,1,1,",
    "is_safe":false,
    "is_chan":true
    */
    id: number;
    key: string;
    name: string;
    theme: string;

    x: number;
    y: number;

    door_key_n: string;
    door_key_e: string;
    door_key_s: string;
    door_key_w: string;

    level_data: string;

    height: number;
    width: number;
   
}
