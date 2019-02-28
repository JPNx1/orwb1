//palyer character
class Orwb {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;

        this.yWithOffset =0;
        this.xWithOffset=0;

        this.width = 64;
        this.height = 64;

        //moving bools
        this.onGround = false;
        this.canMove = true;

        //moving vars
        this.speed = 10;
        this.yVel = 0;
        this.tollerance = 59;

        //visibility vars
        this.radius = 250;
    }

    //displays orwb
    display() {
        this.yWithOffset = this.y +32;
        this.xWithOffset = this.x +32;

        //hitbox
        fill(0);
        rect(this.x, this.y, this.width, this.height);

        //orwb

        //yellow base circle for body
        //noStroke();
        fill(color(255, 212, 0));
        ellipse(this.xWithOffset, this.yWithOffset, this.width);


        //black circles for eyes
        fill(color(0, 0, 0));
        ellipse(this.xWithOffset - 11, this.yWithOffset - 10, 20);
        ellipse(this.xWithOffset + 11, this.yWithOffset - 10, 20);

        //white circles for reflection in eyes
        fill(color(255, 255, 255));
        ellipse(this.xWithOffset - 5, this.yWithOffset - 15, 5);
        ellipse(this.xWithOffset + 15, this.yWithOffset - 15, 5);
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
    }

    //Checks if the character has a vertical collision with the boxes. It is called before moving left or right
    horizontalCollision() {
        this.canMove = true;
        for (let i = 0; i < box.length; i++) {
            if (collideRectRect(box[i].x, box[i].y, box[i].width, box[i].height, this.x, this.y, this.width, this.height)
                && this.y >= box[i].y - this.tollerance && this.y <= box[i].y + this.tollerance) {
                this.canMove = false;
            }
        }
    }

    //checks if the character hits the ground. Is called every time before gravity is applied
    verticalCollision() {
        for (let j = 0; j < box.length; j++) {
            if (collideRectRect(box[j].x, box[j].y, box[j].width, box[j].height, this.x, this.y, this.width, this.height) && this.x >= box[j].x - this.tollerance && this.x <= box[j].x + this.tollerance) {
                box[j].color = color(0, 255, 0);
                this.onGround = true;
                this.bounce();
                return;
            } else {
                box[j].color = color(255, 0, 0);
                this.onGround = false;
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

        //if collision is detection during a jump, bounce of the bottom side of the box
        if (this.yVel <= 0) {
            if (this.onGround) {
                this.y += 20;
                this.yVel = 1;
            }
        }

        //orwb dies
        if(this.y>=height){
            game.state =4;
        }
    }

    bounce(){
        //this movs orwb back to the top of the box
        if (this.onGround && this.yVel >= 0) {
            let boi = round(this.y / 64);
            let boi2 = this.y - boi * 64;
            this.y += boi2;
        }
    }

    //moves orwb to the left
    moveLeft() {
        this.horizontalCollision();
        if (this.x >= 0 && this.canMove) {
            this.x -= this.speed;
        } else {
            this.x += this.speed;
        }
    }

    //moves orwb to the right
    moveRight() {
        this.horizontalCollision();
        if (this.x <= width - this.width && this.canMove) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }
    }

    //initiates jumping by setting yVelocity to -20, so orwb has an upward momentum
    jump() {
        if (this.onGround) {
            this.yVel = -20;
            this.y += this.yVel;
        }
    }

    drawStuff(){
        for (let i = 0; i < box.length; i++) {
            if(pow(this.y - b[i].x) + pow(this.y - b[i].y) < pow(this.radius)){
                b[i].draw();
            }
        }

    }
}
