//palyer character
class Orwb {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;
        this.width = 64;
        this.height = 64;
        this.hit = false;
        this.hit1 = false;
        this.onGround = false;

        this.speed = 10;

        this.yVel = jumpHeight;
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

    //checks horizontal collision. Currently applies to all collision and i'm kinda done bc i don't know how to precede.
    //todo How to differentiate between horizontal and vertial detection AND hwo to check for all boxes
    horizontalCollision() {
        this.hit1 = collideRectRect(box.x, box.y, box.width, box.height, this.x, this.y, this.width, this.height);
    }

    verticalCollision() {
        this.hit = collideRectRect(box[0].x, box[0].y, box[0].width, box[0].height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box1.x, box1.y, box1.width, box1.height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box2.x, box2.y, box2.width, box2.height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box3.x, box3.y, box3.width, box3.height, this.x, this.y, this.width, this.height);

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
                gravity += 0.1;
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
    //todo fix collision
    moveLeft() {
        //this.horizontalCollision();
        print("Left, x:" + this.x);
        if (this.x >= 0 && !this.hit1) {
            this.x -= this.speed;
        }

    }

    //moves orwb to the right
    moveRight() {
        //this.horizontalCollision();
        print("Right, x:" + this.x);
        if (this.x <= width - this.width && !this.hit1) {
            this.x += this.speed;
        }
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
            this.yVel = jumpHeight;
            this.isJumping = true;
        }
    }
}
