export default class ItemModel {

    /*
    'id' => 'integer',
			'player_id' => 'integer',
			'action' => 'string',
			'type' => 'string',
			'name' => 'string',
			'description' => 'string',
			'map_key' => 'string',
			'x' => 'double',
			'y' => 'double',
			'is_expendable' => 'boolean',
			'value' => 'integer'
    */

    public id: number;
    public key: string;
    public name: string;
    public action: string;
    public type: string;
    public description: string;
    public map_key: string;
    public value: number;
    public x: number;
    public y: number;
    public is_expendable: boolean;

}