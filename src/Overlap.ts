import Rect from "./Rect";
import Circle from "./Circle";

let rectOverlap = (rect1: Rect, rect2: Rect): boolean => {
    if (rect1.xMin > rect2.xMax || rect2.xMin > rect1.xMax){
        return false;
    }

    if (rect1.yMax < rect2.yMin || rect2.yMax < rect1.yMin){
        return false;
    }

    return true;
}

let circleOverlap = (c1: Circle, c2: Circle): boolean => {
    let distance = Circle.distance(c1,c2);
    let r = c1.radius + c2.radius;
    console.log(distance, r);
    
    if (distance === r) {
        return true;
    } else if (distance > r) {
        return false;
    } else{
        return true;
    }
}

export {
    rectOverlap,
    circleOverlap
}