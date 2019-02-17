let canvas;
let orwb;
let box;
let gravity = 1;
let maxGrav = 10;
let portal;
let game;
let welcomeScreen;
let pauseScreen;
let endScreen;
let level1;
let level2;
let level3;

function setup() {
    //create canvas
    canvas = createCanvas(800, 800);
    //relocates canvas to the p5 html div
    canvas.parent('p5');

    //background
    background(255);

    //game
    game = new Game();
    game.initiate();

}

function draw() {
    background(255);

    //game
    game.checkState();
}

function keyPressed() {
    //controls for game and space xd


    switch (keyCode) {
        //space
        case 32:
            if (game.state === 1) {
                orwb.jump();
            }
            break;
        case 27:
            //escape
            //If game is running, detect this key
            if (game.state === 1) {
                //set game to paused
                game.state = 2;
            } else {
                //if game is not running and pause set it to resume
                if (game.state === 2) {
                    game.state = 3;
                }
            }

            break;
        case 13:
            //enter
            if (game.state === 0) {
                //set game running
                game.state = 1;
                //load level 1
                game.currentLevel = 1;
            }

            if(game.state === 4){
                game.state =0;
                game.initiate();
            }
            break;
    }


}

//palyer character
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
    constructor() {
        this.state = 0;
        this.currentLevel = null;
    }

    initiate(){
        //screen
        welcomeScreen = new WelcomeScreen();
        pauseScreen = new PauseScreen();
        endScreen = new EndScreen();

        //levels
        level1 = new Level1();
        level2 = new Level2();
        level3 = new Level3();

        //orwb
        orwb = new Orwb(width / 2, height / 2);

        //box
        box = new Box(300, 500);

        //portal
        portal = new Portal(200, 200);
    }

    checkState() {
        switch (this.state) {
            //welcome
            case 0:
                welcomeScreen.display();
                break;
            //running
            case 1:
                level1.display();
                switch (this.currentLevel) {
                    case 1:
                        level1.display();
                        break;
                    case 2:
                        level2.display();
                        break;
                    case 3:
                        level3.display();
                        break;
                }
                break;
            //paused
            case 2:
                pauseScreen.display();
                break;
            //resume
            case 3:
                pauseScreen.undisplay();
                game.state = 1;
                break;
            //game over
            case 4:
                endScreen.display();
                break;
        }

    }
}

class WelcomeScreen {
    constructor() {
        this.img = loadImage("img/orwb/orwb_static1.png");
    }

    display() {
        print("Welcomescreen");
        background(0);
        image(this.img, (width / 2) - 75, 0, 150, 150);
        fill(color(255, 255, 0));
        textSize(50);
        textAlign(CENTER);
        text("Press ENTER to start", width / 2, height / 2);
    }

    undisplay() {

    }
}

class PauseScreen {
    constructor() {

    }

    display() {
        print("Pausescreen");
        textSize(50);
        textAlign(CENTER);
        text("Paused", width / 2, height / 2);
        text("Press ESCAPE to resume", width / 2, height / 1.5);
    }

    undisplay() {

    }
}

class EndScreen {
    constructor() {

    }

    display() {
        print("gameOver");
        textSize(50);
        textAlign(CENTER);
        text("Game over!", width / 2, height / 2);
        text("Press Enter to restart", width / 2, height / 1.5);
    }

    undisplay() {

    }
}

class Level1 {

    display() {
        background(255);
        //orwb
        orwb.display();
        orwb.update();
        //box
        box.display();
        //portal
        portal.display();
        portal.update();
    }
}

class Level2 {
    display(){
        print("Level 2");
    }
}

class Level3 {

    display(){
        print("Level 3");
    }
}


class Portal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.color = color(255, 255, 0);
        this.hit = false;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    update() {
        this.detectCollision();
    }

    detectCollision() {
        this.hit = collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y, this.radius);

        if (this.hit) {
            switch (game.currentLevel) {
                case 1:
                    game.currentLevel = 2;
                    break;
                case 2:
                    game.currentLevel = 3;
                    break;
                case 3:
                    game.state = 4;
                    break;
            }
        }
    }

}

class Enemy {

}

class Points {

}

