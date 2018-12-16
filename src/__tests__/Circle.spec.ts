import Circle from "../Circle";
import Point2D from "../Point2D";

test("Circle::new", () => {
    let circle = new Circle(new Point2D(1,1), 10);
    expect(circle.radius).toBe(10);
    expect(circle.diameter).toBe(20);
});

test("Circle::distance", () => {
    let circle1 = new Circle(new Point2D(0,0), 5);
    let circle2 = new Circle(new Point2D(5,0), 5);
    expect(Circle.distance(circle1, circle2)).toBe(5);
});