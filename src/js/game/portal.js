class Portal {
    constructor(x, y) {
        this.x = game.squareX * x + 32;
        this.y = game.squareY * y + 32;
        this.radius = 50;

        this.color = color(0, 0, 255);


    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius-10, this.radius);
        fill(0);
        ellipse(this.x, this.y, this.radius-20, this.radius-10);
    }

    update() {
        this.detectCollision();
        this.display();
    }

    //if collision detected, orwb reached the portal and goes to the next level
    detectCollision() {
        //determines to which level orwb is being ported
        if (collideRectCircle(orwb.x, orwb.y, orwb.width, orwb.height, this.x, this.y-10, this.radius)) {
            print("portal hit at : " + game.currentLevel);

            switch (game.currentLevel) {
                case 1:
                    game.currentLevel = 2;
                    break;

                case 2:
                    game.currentLevel = 3;
                    break;

                case 3:
                    //in this case, the game is over!
                    game.state = 4;
                    break;
            }
        }
    }
}
