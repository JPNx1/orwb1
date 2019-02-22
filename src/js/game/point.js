//todo add points
class Points {
    constructor(x, y){
        this.x = game.squareX * x;
        this.y = game.squareY * y;
        this.radius = 20;
        this.hit = false;
    }

    detectCollision(){
        this.hit = collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius);
    }

    update(){
        this.detectCollision();
        if(!this.hit){

            this.display();
        }
    }


    display(){
        fill(color(0, 255, 0));
        ellipse(this.x, this.y, this.radius);
    }

}