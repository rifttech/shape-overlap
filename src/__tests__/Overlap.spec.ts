import overlap from "../Overlap";
import Rect from "../Rect";
import Point2D from "../Point2D";
test("overlap", () => {

    let rectA = new Rect(new Point2D(-10,7), 7, 4)
    let rectB = new Rect(new Point2D(1,4), 6, 4)
    expect(overlap(rectA, rectB)).toBeFalsy();
    
    rectA = new Rect(new Point2D(-10,7), 7, 4)
    rectB = new Rect(new Point2D(-3,3), 3, 6)
    expect(overlap(rectA, rectB)).toBeTruthy();

    rectA = new Rect(new Point2D(-10, 7), 7, 4)
    rectB = new Rect(new Point2D(-5, 9), 4, 3)
    expect(overlap(rectA, rectB)).toBeTruthy();

    rectA = new Rect(new Point2D(2, 4), 5, 3)
    rectB = new Rect(new Point2D(4, 8), 5, 3)
    expect(overlap(rectA, rectB)).toBeFalsy();
});