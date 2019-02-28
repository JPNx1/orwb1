//todo add points
class Points {
    constructor(x, y) {
        this.x = game.squareX * x + 32;
        this.y = game.squareY * y + 32;
        this.radius = 20;
        this.color = color(255, 255, 0);
    }

    detectCollision() {
        this.hit = collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius);
    }

    update() {
        if (collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius)) {

            this.color = color(0);
        }
    }


    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
    }
}