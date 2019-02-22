//palyer character
class Orwb {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;
        this.width = 64;
        this.height = 64;
        //moving bools
        this.onGround = false;
        this.canMove = true;
        //moving vars
        this.speed = 10;
        this.yVel = 0;
        this.tollerance = 59;
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
        if (!this.onGround) {
            this.y += this.yVel;
        }
        //increase fall speed over time
        if (this.yVel < 15) {
            this.yVel++;
        }
        // //if orwb is not ground, apply gravity
        // if (!this.onGround) {
        //     this.y += gravity;
        // }
        // //appear on top if out of screen
        // if (this.y > height) {
        //     this.y = 0;
        // }
    }

    //checks horizontal collision. Currently applies to all collision and i'm kinda done bc i don't know how to precede.

    //Checks if the character has a vertical collision with the boxes. It is called before moving left or right
    horizontalCollision() {
        //this.hit1 = collideRectRect(box.x, box.y, box.width, box.height, this.x, this.y, this.width, this.height);
        //let i = 0;
        //while (i < box.length && !this.hit) {
        //    this.hit = collideRectR//ect(box[i].x, box[i].y, box[i].width, box[i].height, this.x, this.y, this.width, this.height);
        //    i++;
        //}
        //if(i > 0) {
        //    i--;
        //}

        //if (this.hit) {
        //    print("Height at detection: " + this.y);
        //    print("..." + box[i] + i);
        //    box[i].color = color(0, 255, 0);
        //} else {//
        //    box[i].color = color(255, 0, 0);
        //}
        this.canMove = true;
        for (let i = 0; i < box.length; i++) {
            //this.hit1 = collideRectRect(box[i].x, box[i].y, box[i].width, box[i].height, this.x, this.y, this.width, this.height);
            //print(this.hit1);

            if (collideRectRect(box[i].x, box[i].y, box[i].width, box[i].height, this.x, this.y, this.width, this.height)
                && this.y >= box[i].y - this.tollerance && this.y <= box[i].y + this.tollerance) {
                this.canMove = false;
            }
        }
    }

    //checks if the character hits the ground. Is called every time before gravity is applied
    verticalCollision() {
        //this.hit = collideRectRect(box[0].x, box[0].y, box[0].width, box[0].height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box1.x, box1.y, box1.width, box1.height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box2.x, box2.y, box2.width, box2.height, this.x, this.y, this.width, this.height);
        //this.hit = collideRectRect(box3.x, box3.y, box3.width, box3.height, this.x, this.y, this.width, this.height);

        for (let j = 0; j < box.length; j++) {
            //this.hit = collideRectRect(box[j].x, box[j].y, box[j].width, box[j].height, this.x, this.y, this.width, this.height);
            if (collideRectRect(box[j].x, box[j].y, box[j].width, box[j].height, this.x, this.y, this.width, this.height) && this.x >= box[j].x - this.tollerance && this.x <= box[j].x + this.tollerance) {
                //print("Height at detection: " + this.y);
                //print("..." + box[i] + i);
                box[j].color = color(0, 255, 0);

                this.onGround = true;
                return;
            } else {
                box[j].color = color(255, 0, 0);
                this.onGround = false;
                //increase gravity while falling
            }

        }
        // while (i < box.length && !this.hit) {
        //     this.hit = collideRectRect(box[i].x, box[i].y, box[i].width, box[i].height, this.x, this.y, this.width, this.height);
        //     i++;
        // }
        // if(i > 0) {
        //     i--;
        // }
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

        //while jumping
        if (this.yVel <= 0) {
            //if collision is detection during a jump, bounce of the bottom side of the box
            if (this.onGround) {
                print("yay" + this.yVel);
                this.y += 20;
                this.yVel = 1;
            }
        }

        if (this.onGround && this.yVel >= 0) {
            //this movs orwb back to the top of the box
            let boi = round(this.y / 64);
            print("xd" + boi);
            let boi2 = this.y - boi * 64;
            this.y += boi2;
        }
    }

    //moves orwb to the left
    //todo fix collision
    moveLeft() {
        this.horizontalCollision();
        //print("Left, x:" + this.x);
        if (this.x >= 0 && this.canMove) {
            this.x -= this.speed;
        } else {
            this.x += this.speed;
        }
    }

    //moves orwb to the right
    moveRight() {
        this.horizontalCollision();
        //print("Right, x:" + this.x);
        if (this.x <= width - this.width && this.canMove) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }
    }

    //handles the jump animation
    //jumpAnimation() {
    //    //executed if orwb is not jumping and on ground
    //    if (this.isJumping) {
    //        //change orwbs position
    //        this.yVel += gravity;
    //        this.y += this.yVel;
    //        //reset the jumping values
    //        if (this.y > this.ground) {
    //            this.y = this.ground;
    //            this.yVel = 0;
    //            this.isJumping = false;
    //        }
    //    }
    //}

    //initiates jumping
    jump() {
        print("JUMP");
        if (this.onGround) {
            this.yVel = -20;
            this.y += this.yVel;
        }
        //this.ground = this.y;
        ////set the values if not jumping
        //if (!this.isJumping) {
        //    this.yVel = jumpHeight;
        //    this.isJumping = true;
        //}
        //this.yVel = gravity;
        //this.y = this.yVel;
    }
}
