import Rect from "../Rect";
import Point2D from "../Point2D";
test("Rect::new", () => {
    let rect = new Rect(new Point2D(0,0), 2, 5)

    expect(rect.height).toBe(5);
    expect(rect.width).toBe(2);
    expect(rect.xMin).toBe(0);
    expect(rect.xMax).toBe(2);
    expect(rect.yMin).toBe(-5);
    expect(rect.yMax).toBe(0);
});