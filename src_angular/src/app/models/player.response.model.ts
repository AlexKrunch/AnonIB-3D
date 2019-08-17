import { GenericResponseModel } from "./generic.response.model";
import { PlayerModel } from "./player.model";

export class PlayerResponseModel extends GenericResponseModel {

    /*
    'id' => 'integer',
			'name' => 'string',
			'is_admin' => 'boolean',
		    'token' => 'string',
		    'hp' => 'integer',
		    'money' => 'integer',
		    'CONST_MAP_ALPHA_KEY' => 'string',
		    'last_action' => 'integer',
		    'position_x' => 'double',
		    'position_y' => 'double',
		    'position_z' => 'double'
    */

    public result: PlayerModel;

}