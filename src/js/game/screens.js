let img;


class WelcomeScreen {
    constructor() {
        this.img = loadImage("img/orwb/orwb_static1.png");
    }

    display() {
        //print("Welcomescreen");
        background(0);
        image(this.img, (width / 2) - 75, 0, 150, 150);
        fill(color(255, 255, 0));
        textSize(50);
        textAlign(CENTER);
        text("Press ENTER to start", width / 2, height / 2);
    }
}


class PauseScreen {
    constructor(){
        this.img = loadImage("img/orwb/orwb_static1.png");
    }
    display() {
        //print("Pausescreen");
        background(0);
        image(this.img, (width / 2) - 75, 0, 150, 150);
        fill(color(255, 255, 0));
        textSize(50);
        textAlign(CENTER);
        text("Paused", width / 2, height / 2);
        text("Press ESCAPE to resume", width / 2, height / 1.5);
    }
}

class EndScreen {
    constructor(){
        this.img = loadImage("img/orwb/orwb_static1.png");
    }
    display() {
        //print("gameOver");
        background(0);
        image(this.img, (width / 2) - 75, 0, 150, 150);
        fill(color(255, 255, 0));
        textSize(50);
        textAlign(CENTER);
        text("ORWB IS DEAD!", width / 2, height / 2);
        text("Press Enter to restart", width / 2, height / 1.5);
    }
}

class WinScreen{
    constructor(){
        this.img = loadImage("img/orwb/orwb_static1.png");
    }
    display(){
        background(0);
        image(this.img, (width / 2) - 75, 0, 150, 150);
        fill(color(255, 255, 0));
        textSize(50);
        textAlign(CENTER);
        text("Score: " + game.points, width/2, height/2);
        text("YOU WON!", width / 2, height / 3);
        text("Press Enter to restart", width / 2, height / 1.5);
    }
}