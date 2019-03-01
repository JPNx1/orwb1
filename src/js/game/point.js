//todo add points
class Points {
    constructor(x, y) {
        this.x = game.squareX * x + 32;
        this.y = game.squareY * y + 32;
        this.collected = false;
        this.radius = 20;
        this.color = color(255, 255, 0);
    }


    update() {
        if (collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius)) {
            this.color = color(0);
            if(!this.collected){
                game.points += 10;
                this.collected = true;
                coinSound.play();
            }
        }
    }


    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
    }
}