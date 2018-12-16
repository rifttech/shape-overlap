import * as overlap from "../Overlap";
import Rect from "../Rect";
import Point2D from "../Point2D";
import Circle from "../Circle";
test("overlap rect", () => {
    let rectA = new Rect(new Point2D(-10,7), 7, 4)
    let rectB = new Rect(new Point2D(1,4), 6, 4)
    expect(overlap.rectOverlap(rectA, rectB)).toBeFalsy();
    
    rectA = new Rect(new Point2D(-10,7), 7, 4)
    rectB = new Rect(new Point2D(-3,3), 3, 6)
    expect(overlap.rectOverlap(rectA, rectB)).toBeTruthy();

    rectA = new Rect(new Point2D(-10, 7), 7, 4)
    rectB = new Rect(new Point2D(-5, 9), 4, 3)
    expect(overlap.rectOverlap(rectA, rectB)).toBeTruthy();

    rectA = new Rect(new Point2D(2, 4), 5, 3)
    rectB = new Rect(new Point2D(4, 8), 5, 3)
    expect(overlap.rectOverlap(rectA, rectB)).toBeFalsy();
});

test("overlap circle", () => {
    let c1 = new Circle(new Point2D(0,0),10)
    let c2 = new Circle(new Point2D(5,0), 5)
    expect(overlap.circleOverlap(c1, c2)).toBeTruthy();

    c1 = new Circle(new Point2D(5,5),3)
    c2 = new Circle(new Point2D(9,5), 1)
    expect(overlap.circleOverlap(c1, c2)).toBeTruthy();

    c1 = new Circle(new Point2D(3,4),5)
    c2 = new Circle(new Point2D(14,18), 8)
    expect(overlap.circleOverlap(c1, c2)).toBeFalsy();
});