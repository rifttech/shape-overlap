import Point2D from "./Point2D";
export default class Rect {
    /**
     * Rectange
     * @param origin top left point 
     * @param width 
     * @param height 
     */
    constructor (private origin: Point2D, private _width: number, private _height: number){

    }

    get xMin(): number {
        return this.origin.x
    }

    get xMax(): number {
        return this.origin.x + this._width;
    }

    get yMin(): number {
        return this.origin.y - this._height;
    }

    get yMax(): number {
        return this.origin.y
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}