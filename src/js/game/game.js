/*
https://p5js.org/reference/
https://p5js.org/
https://thecodingtrain.com/
https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
https://creative-coding.decontextualize.com/making-games-with-p5-play/
https://gamedevelopment.tutsplus.com/tutorials/quick-tip-avoid-game-watch-gravity-in-your-characters-jumps--gamedev-6759
 */
let canvas;
let game;

let welcomeScreen;
let pauseScreen;
let endScreen;

let orwb;
let gravity = 1;
let maxGrav = 7;

let jumpHeight = -50;

let box=[];
let point;

let portal;
let portal1;
let portal2;

let level1;
let level2;
let level3;

//quadtree stuff
let boundery;
let quadtree;

//todo add level setups, point system, enemies, collision stuff, timer, main function (orwb as light source!)

function setup() {
    //create canvas
    canvas = createCanvas(705, 705);
    //relocates canvas to the p5 html div
    canvas.parent('p5');

    frameRate(10);

    //background
    background(255);

    //game
    game = new Game();
    game.initiate();

    //quadtree
    //boundery = new Rectangle(0, 0, width, height);
    //quadtree = new Quadtree(boundery);
    //
    //for (let i = 0; i<1;i++){
    //    let p = new Point(50, 50);
    //    quadtree.insert(p);
    //}


}

function draw() {
    background(255);

    //game
    game.checkState();
    game.grid();

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

            if (game.state === 4) {
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

    }

    grid() {

        for (let rows = 0; rows < this.gridX; rows++) {
            for (let colums = 0; colums < this.gridY; colums++) {
                fill(0, 0, 0, 100);
                rect(rows * this.squareX, colums * this.squareY, width / this.gridX, width / this.gridX);
            }
        }
    }

    initiate() {
        //screen
        welcomeScreen = new WelcomeScreen();
        pauseScreen = new PauseScreen();
        endScreen = new EndScreen();

        //levels
        level1 = new Level1();
        level2 = new Level2();
        level3 = new Level3();


    }

    checkState() {
        switch (this.state) {
            //welcome
            case 0:
                welcomeScreen.display();
                break;
            //running
            case 1:
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









