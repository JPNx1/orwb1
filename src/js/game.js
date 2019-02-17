let canvas;
let orwb;
let box;
let gravity = 04;

function setup() {
    //create canvas
    canvas = createCanvas(800, 800);
    //relocates canvas to the p5 html div
    canvas.parent('p5');

    //background
    background(255);

    //orwb
    orwb = new Orwb(width / 2, height / 2);

    //box
    box = new Box(300, 500);
}

function draw() {
    background(255);
    //orwb
    orwb.display();
    orwb.update();
    //box
    box.display();

}

function keyPressed() {
    //controls for game and space xd
}


class Orwb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.hit = false;

    }

    display() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }

    applyGravity() {
        this.checkCollision();
        if (!this.hit) {
            this.y += gravity;
        }

        if(this.y > height){
            this.y = 0;
        }

    }

    checkCollision() {
        this.hit = collideRectRect(box.x, box.y, box.width, box.height, this.x, this.y, this.width, this.height);
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            this.moveLeft();
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.moveRight()
        }

        if (keyIsDown(32)) {
            this.jump();
        }

        this.applyGravity();
        this.checkCollision();
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    jump() {

    }
}

class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 8;
        this.color = color(255, 0, 0);
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}

class Game {

}

class Portal {

}

class Enemy {

}

class Points {

}

