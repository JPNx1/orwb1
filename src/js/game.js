let canvas;
let orwb;
let box;
let gravity = 1;
let maxGrav = 10;
let portal;
let game;

function setup() {
    //create canvas
    canvas = createCanvas(800, 800);
    //relocates canvas to the p5 html div
    canvas.parent('p5');

    //background
    background(255);

    //game
    game = new Game();

    //orwb
    orwb = new Orwb(width / 2, height / 2);

    //box
    box = new Box(300, 500);

    //portal
    portal = new Portal(200, 200);

}

function draw() {
    background(255);
    //orwb
    orwb.display();
    orwb.update();
    //box
    box.display();
    //portal
    portal.display();
    portal.update();
    //game
    game.checkState();
}

function keyPressed() {
    //controls for game and space xd
    switch (keyCode) {
        case 32:
            orwb.jump();
            break;
    }
}


class Orwb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.hit = false;
        this.onGround = false;

        this.yVel = -28;
        this.ground = this.y + this.height;
        this.isJumping = false;
    }

    //displays orwb
    display() {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }

    //applies gravity to orwb
    applyGravity() {
        //calls function to check if collision is detected
        this.verticalCollision();
        //if orwb is not ground, apply gravity
        if (!this.onGround) {
            this.y += gravity;
        }
        //appear on top if out of screen
        if (this.y > height) {
            this.y = 0;
        }
    }

    verticalCollision() {
        this.hit = collideRectRect(box.x, box.y, box.width, box.height, this.x, this.y, this.width, this.height);

        if (this.hit) {
            print("Height at detection: " + this.y);
            box.color = color(0, 255, 0);
            this.onGround = true;
            //set gravity back to initial gravity
            gravity = 2;
        } else {
            box.color = color(255, 0, 0);
            this.onGround = false;
            //increase gravity while falling
            if (gravity <= maxGrav) {
                gravity += 1;
            }
        }
    }

    //updates orwb after something changed
    update() {
        if (keyIsDown(LEFT_ARROW)) {
            this.moveLeft();
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.moveRight()
        }

        this.applyGravity();
        this.jumpAnimation();

    }

    //moves orwb to the left
    moveLeft() {
        print("Left, x:" + this.x);
        this.x -= 5;
    }

    //moves orwb to the right
    moveRight() {
        print("Right, x:" + this.x);
        this.x += 5;
    }

    //handles the jump animation
    jumpAnimation() {
        //executed if orwb is not jumping and on ground
        if (this.isJumping) {
            //change orwbs position
            this.yVel += gravity;
            this.y += this.yVel;
            //reset the jumping values
            if (this.y > this.ground) {
                this.y = this.ground;
                this.yVel = 0;
                this.isJumping = false;
            }
        }
    }

    //initiates jumping
    jump() {
        print("JUMP");
        this.ground = this.y;

        //set the values if not jumping
        if (!this.isJumping && this.onGround) {
            this.yVel = -28;
            this.isJumping = true;
        }
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
    constructor(){
        this.running = true;
        this.gameOver = false;
    }

    checkState(){
        if (this.gameOver){
            noLoop();
        }
    }
}

class Portal {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.color = color(255, 255, 0);
        this.hit = false;
    }
    display(){
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    update(){
        this.detectCollision();
    }

    detectCollision(){
        this.hit = collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius);

        if(this.hit){
            game.running = false;
            game.gameOver = true;
        }
    }

}

class Enemy {

}

class Points {

}

