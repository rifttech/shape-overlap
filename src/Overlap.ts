import Rect from "./Rect";

export default function overlap(rect1: Rect, rect2: Rect): boolean{
    if (rect1.xMin > rect2.xMax || rect2.xMin > rect1.xMax){
        return false;
    }

    if (rect1.yMax < rect2.yMin || rect2.yMax < rect1.yMin){
        return false;
    }

    return true;
}