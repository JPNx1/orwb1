class Portal {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;
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

    //if collision detected, orwb reached the portal and goes to the next level
    detectCollision() {
        this.hit = collideCircleCircle(orwb.x, orwb.y, orwb.radius, this.x, this.y, this.radius);

        //determines to which level orwb is being ported
        if (this.hit) {
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
