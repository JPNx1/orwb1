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