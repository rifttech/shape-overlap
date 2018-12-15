import Point2D from "../Point2D";

test("Point2D::new", () => {
   let point = new Point2D(4,2);
   expect(point.x).toBe(4);
   expect(point.y).toBe(2);
});

test("Point2D::equals", () => {
    let a = new Point2D(1,3);
    let b = new Point2D(1,3);
    expect(a.equals(b)).toBeTruthy();
    let c = new Point2D(1,1)
    expect(a.equals(c)).toBeFalsy();
});