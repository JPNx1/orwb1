class Box {
    constructor(x, y) {
        this.x = game.squareX * x;
        this.y = game.squareY * y;
        this.width = 64;
        this.height = 32;
        this.color = color(161, 161, 161);
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}