export class PostModel {

    id: number;
    reply: number;
    player_id: number;
    player_name: string;
    name: string;
    key: string;
    canvas_key: string;
    date: number;
    map_key: string = "";
    message: string = "";
    url: string = "";
    preview: string = "";
    nsfw: boolean = false;
    graffiti: boolean = false;
    is_canon: boolean = false;

    magnet: string;
    torrent: string;
    hash: string;
    player_ip: string;

    was_deleted: boolean = false;

}