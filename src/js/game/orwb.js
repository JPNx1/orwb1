//palyer character
class Orwb {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;

        this.yWithOffset = 0;
        this.xWithOffset = 0;

        this.width = 64;
        this.height = 64;
        this.color = color(255, 212, 0);

        //moving bools
        this.onGround = false;
        this.canMove = true;
        this.isBouncing = false;

        //moving vars
        this.speed = 8;
        this.yVel = 0;
        this.tollerance = 30;
        this.tollerance1 = 63;

        //visibility vars
        this.radiusMultiplier = 4;
        this.radius = game.squareX * this.radiusMultiplier;
        this.counter = 0;
        this.damaged = false;
        this.health = 3;


    }

    //displays orwb
    display() {
        this.yWithOffset = this.y + 32;
        this.xWithOffset = this.x + 32;

        //hitbox
        fill(0);
        rect(this.x, this.y, this.width, this.height);

        //orwb
        //yellow base circle for body
        //noStroke();
        fill(this.color);
        ellipse(this.xWithOffset, this.yWithOffset, this.width);

        //fill(0);
        //rect(this.x, this.yWithOffset -21, 64, 9);

        //black circles for eyes
        fill(color(0, 0, 0));
        ellipse(this.xWithOffset - 11, this.yWithOffset - 10, 20);
        ellipse(this.xWithOffset + 11, this.yWithOffset - 10, 20);

        //white circles for reflection in eyes
        fill(color(255, 255, 255));
        ellipse(this.xWithOffset - 5, this.yWithOffset - 15, 5);
        ellipse(this.xWithOffset + 15, this.yWithOffset - 15, 5);

        //fill(0);
        //text("Tommy", this.xWithOffset, this.yWithOffset - 40);


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
        for (let i = 0; i < boxes.length; i++) {
            if (collideRectRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height, this.x, this.y, this.width, this.height)
                && this.y >= boxes[i].y - this.tollerance && this.y <= boxes[i].y + this.tollerance) {
                this.canMove = false;
                //boxes[i].color = color(0, 0, 255);
            } else {
                //boxes[i].color = color(255, 0, 0);

            }
        }
    }

    //checks if the character hits the ground. Is called every time before gravity is applied
    verticalCollision() {
        for (let j = 0; j < boxes.length; j++) {
            if (collideRectRect(boxes[j].x, boxes[j].y, boxes[j].width, boxes[j].height, this.x, this.y, this.width, this.height) && this.x >= boxes[j].x - this.tollerance1 &&
                this.x <= boxes[j].x + this.tollerance1) {
                //boxes[j].color = color(0, 255, 0);
                this.onGround = true;
                this.bounce();
                return;
            } else {
                //boxes[j].color = color(255, 0, 0);
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

        //if collision is detection during a jump, bounce of the bottom side of the boxes
        if (this.yVel <= 0) {
            if (this.onGround) {
                this.y += 20;
                this.yVel = 1;
            }
        }

        //orwb dies
        if (this.y >= height) {
            game.tryMinus();
        }

        this.checkDamaged();

    }

    bounce() {
        //this movs orwb back to the top of the boxes
        if (this.onGround && this.yVel >= 0) {
            this.isBouncing = true;

            let onWhichBox = round(this.y / 64);
            //print(onWhichBox, onWhichBox*64);
            this.y -= (this.y - onWhichBox * 64);


        }
        this.isBouncing = false;
    }

    //moves orwb to the left
    moveLeft() {
        this.horizontalCollision();
        if (this.x >= 0 && this.canMove && !this.isBouncing) {
            this.x -= this.speed;
        } else {
            this.x += this.speed;
        }
    }

    //moves orwb to the right
    moveRight() {
        this.horizontalCollision();
        if (this.x <= width - this.width && this.canMove && !this.isBouncing) {
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
            jumpSound.play();
        }
    }

    drawStuff() {
        this.radius = game.squareX * this.radiusMultiplier;

        for (let i = 0; i < boxes.length; i++) {
            if (pow(this.x - boxes[i].x, 2) + pow(this.y - boxes[i].y, 2) < pow(this.radius, 2)) {
                boxes[i].display();
            }
        }


        for (let i = 0; i < cats.length; i++) {
            if (pow(this.x - cats[i].x, 2) + pow(this.y - cats[i].y, 2) < pow(this.radius, 2)) {
                cats[i].display();

            }
        }

        for (let i = 0; i < fallingCats.length; i++) {
            if (pow(this.x - fallingCats[i].x, 2) + pow(this.y - fallingCats[i].y, 2) < pow(this.radius, 2)) {
                fallingCats[i].display();
            }
        }
    }

    checkDamaged() {
        if (this.damaged) {
            this.counter++;

            if (this.counter === 3) {
                this.color = color(255, 212, 0);
            }
            if (this.counter >= 60) {
                this.damaged = false;
                this.counter = 0;
            }
        }
    }


    getDamage() {
        if (!this.damaged) {

            this.radiusMultiplier--;
            this.color = color(255, 0, 0);
            //print("damaged!!!" + this.radiusMultiplier);
            damageSound.play();

        }
        if (this.radiusMultiplier === 1) {
            this.health--;

            if (this.health === 0) {
                game.tryMinus();
            }
        }
        this.damaged = true;
    }
}
