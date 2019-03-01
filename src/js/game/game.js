/*
https://p5js.org/reference/
https://p5js.org/
https://thecodingtrain.com/
https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
https://creative-coding.decontextualize.com/making-games-with-p5-play/
https://gamedevelopment.tutsplus.com/tutorials/quick-tip-avoid-game-watch-gravity-in-your-characters-jumps--gamedev-6759

sounds:
https://freesound.org/people/OwlStorm/sounds/404747/
https://freesound.org/people/ProjectsU012/sounds/341695/
https://freesound.org/people/jalastram/sounds/386658/
https://freesound.org/people/deleted_user_877451/sounds/76376/
https://freesound.org/people/LittleRobotSoundFactory/sounds/270333/
https://freesound.org/people/Sergenious/sounds/55843/

 */
let canvas;
let game;

let welcomeScreen;
let pauseScreen;
let endScreen;
let winScreen;

let orwb;

let boxes = [];
let points = [];

let portal;

let level1;
let level2;
let level3;

let cats = [];
let fallingCats = [];
let jumpSound;
let coinSound;
let damageSound;
let gameOverSound;
let winSound;
let warpSound;



//todo add level setups, points system, enemies, collision stuff, timer, main function (orwb as light source!)

function setup() {
    //create canvas
    canvas = createCanvas(705, 705);

    //relocates canvas to the p5 html div
    canvas.parent('p5');

    //framerate
    frameRate(60);

    //background
    background(255);

    //game
    game = new Game();
    game.initiate();
    jumpSound = loadSound("sound/jump.wav");
    coinSound = loadSound("sound/coins.wav");
    damageSound = loadSound("sound/damage.wav");
    gameOverSound = loadSound("sound/game-over.wav");
    winSound = loadSound("sound/intro.wav");
    warpSound = loadSound("sound/warp.wav");

}

function draw() {
    noStroke();
    background(0);

    //game
    game.checkState();
    //game.grid();
}

function keyPressed() {
    //controls for game and space
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

            if (game.state === 4 || game.state === 5) {
                game.state = 0;
                game.initiate();
            }
            break;
    }
}

class Game {
    constructor() {
        this.state = 0;
        this.currentLevel = null;
        this.gridX = 11;
        this.gridY = 11;
        this.squareX = ((width - 1) / this.gridX);
        this.squareY = ((width - 1) / this.gridY);
        this.points = 0;
        this.tries = 3;
    }

    grid() {
        for (let rows = 0; rows < this.gridX; rows++) {
            for (let colums = 0; colums < this.gridY; colums++) {
                fill(0, 0, 0, 30);
                rect(rows * this.squareX, colums * this.squareY, width / this.gridX, width / this.gridX);
            }
        }
    }

    initiate() {
        this.points = 0;
        //screen
        welcomeScreen = new WelcomeScreen();
        pauseScreen = new PauseScreen();
        endScreen = new EndScreen();
        winScreen = new WinScreen();

        //levels
        level1 = new Level1();
        level2 = new Level2();
        level3 = new Level3();

    }

    tryMinus() {
        this.tries--;
        //print("tries: " + this.tries);
        if (this.tries > 0) {
            damageSound.play();
            //level.restart
            switch (this.currentLevel) {
                case 1:
                    level1.restart();
                    break;
                case 2:
                    level2.restart();
                    break;
                case 3:
                    level3.restart();
                    break;
            }
        } else {
            gameOverSound.play();
            game.state = 4;
            game.tries = 3;
        }
    }

    drawPoints() {
        fill(255, 255, 0);
        textSize(20);
        text("Points: " + this.points, 60, 50);

        text("Tries: " + this.tries, width-60, 50);
    }

    checkState() {
        //print("state: " + this.state + " level: " + this.currentLevel);
        switch (this.state) {
            //welcome
            case 0:
                welcomeScreen.display();
                break;
            //running
            case 1:

                this.drawPoints();
                switch (this.currentLevel) {
                    case 1:
                        if (!level1.initiated) {

                            level1.initiate();
                            level1.initiated = true;
                        }

                        level1.display();
                        break;

                    case 2:
                        if (!level2.initiated) {

                            level2.initiate();
                            level2.initiated = true;
                        }
                        level2.display();
                        break;

                    case 3:
                        if (!level3.initiated) {

                            level3.initiate();
                            level3.initiated = true;
                        }
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
                game.state = 1;
                break;

            //game over
            case 4:

                endScreen.display();

                break;
            case 5:

                winScreen.display();

                break;
        }
    }
}









