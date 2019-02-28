//enemy class
class Cat {
    constructor(x, y) {
        this.x = x * game.squareX + 32;
        this.y = y * game.squareY + 32;


        this.width = 64;
        this.heigth = 50;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));

    }

    display() {

        fill(this.color);
        //base
        ellipse(this.x, this.y, this.width, this.heigth);

        //ears
        triangle(this.x - 32, this.y - 32, this.x - 27, this.y - 10, this.x - 10, this.y - 23);
        triangle(this.x + 32, this.y - 32, this.x + 27, this.y - 10, this.x + 10, this.y - 23);

        //eyebrows
        stroke(0);
        strokeWeight(3);
        line(this.x - 20, this.y - 12, this.x - 7, this.y - 5);
        line(this.x + 20, this.y - 12, this.x + 7, this.y - 5);
        noStroke();

        //eyes
        fill(0);
        ellipse(this.x - 11, this.y - 3, 8);
        ellipse(this.x + 11, this.y - 3, 8);
    }


    update() {
        if (collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.width, this.heigth)) {
            game.state = 4;
        }
    }
}

class FallingCat {

    constructor(x, y) {

        this.x = x * game.squareX + 32;
        this.y = y * game.squareY + 32;

        this.yVel = 5;

        this.width = 60;
        this.heigth = 50;

        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }

    display() {

        noStroke();

        fill(this.color);
        //base
        ellipse(this.x, this.y, this.width, this.heigth);

        //ears
        triangle(this.x - 32, this.y - 32, this.x - 27, this.y - 10, this.x - 10, this.y - 23);
        triangle(this.x + 32, this.y - 32, this.x + 27, this.y - 10, this.x + 10, this.y - 23);

        //eyebrows
        stroke(0);
        strokeWeight(3);
        line(this.x - 20, this.y - 12, this.x - 7, this.y - 5);
        line(this.x + 20, this.y - 12, this.x + 7, this.y - 5);
        noStroke();

        //eyes
        fill(0);
        ellipse(this.x - 11, this.y - 3, 8);
        ellipse(this.x + 11, this.y - 3, 8);


    }


    update() {
        if (collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.width, this.heigth)) {
            game.state = 4;
        }
        this.applyGravity();
    }

    applyGravity() {
        //calls function to check if collision is detected

        this.y += this.yVel;


        if (this.y > height) {
            this.y = -10;
        }
        //increase fall speed over time

    }

}