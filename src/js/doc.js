let ball;
//setup function
function setup(){
    //create canvas
    let canvas = createCanvas(100, 100);
    //relocates canvas to the p5 html div
    canvas.parent('p5');
    //background color
    background(255);
    //ball
    ball = new Ball(width/2, height/2);
}
//draw function
function draw(){
    //calls display function of ball
    fill(0);
    rect(10, 10, 10, 10);
}

class Ball{
    constructor(x, y){
        this.positionX = x;
        this.positionY = y;
        this.radius = 50;
        this.color = color(255, 0, 0)
    }

    display(){
        fill(this.color);
        ellipse(this.positionX, this.positionY, this.radius, this.radius);
    }
}