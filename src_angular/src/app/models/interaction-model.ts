export class InteractionModel {

    public description: string;
    public value: any;
    public type: number;

    public static get TYPE_NONE():number { return 0; }
    public static get TYPE_CANVAS_FULL():number { return 1; }
    public static get TYPE_CANVAS_VIRGIN():number { return 2; }
    public static get TYPE_CLIMB_LADDER():number { return 3; }
    public static get TYPE_OPEN_DOOR():number { return 4; }
    public static get TYPE_GET_ITEM():number { return 5; }
    public static get TYPE_PASS_GATE():number { return 6; }
    public static get TYPE_PANEL():number { return 7; }
    public static get TYPE_CANVAS_TO_GRAFF():number { return 8; }
    public static get TYPE_AD():number { return 9; }

}