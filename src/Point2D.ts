/**
 * Point2D describes point in 2d space
 */
export default class Point2D {

    constructor(private _x: number, private _y: number){}
    
    get x(): number{
        return this._x;
    }

    get y(): number{
        return this._y;
    }

    public equals(other: Point2D): boolean {
        return (this.x === other.x) && (this.y === other.y);
    }
}