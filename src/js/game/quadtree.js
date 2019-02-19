/*
The Quadtree is a recursive tree, that stores 4 values and each of this values references to another 4 values itself.
It is used to reduce the amount of points that have to be checked during collision detection. Instead of n^n, it only has to check o^logn.
https://en.wikipedia.org/wiki/Quadtree
https://www.youtube.com/watch?v=OJxEcs0w_kE&vl=en
https://www.youtube.com/watch?v=QQx_NmCIuCY
https://www.youtube.com/watch?v=NZHzgXFKfuY
https://www.gamedev.net/forums/topic/621014-simultaneous-multiple-object-collision-detection/
 */

class Quadtree{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Rect{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}