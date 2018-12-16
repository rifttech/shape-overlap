import Point2D from "./Point2D";

export default class Circle {
    constructor(private _origin: Point2D, private _radius: number){ }

    get origin(): Point2D {
        return this._origin;
    }

    get radius(): number {
        return this._radius;
    }

    get diameter(): number {
        return this._radius + this._radius
    }

    public static distance(c1: Circle, c2: Circle): number {
        return Math.sqrt(
            (c1.origin.x - c2.origin.x) * (c1.origin.x - c2.origin.x) +
            (c1.origin.y - c2.origin.y) * (c1.origin.y - c2.origin.y)
        );
    }
}