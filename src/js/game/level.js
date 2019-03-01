//classes for level. They set up the locations and display the boxes, character, enemies and the portals
class Level1 {
    constructor() {
        this.initiated = false;
    }

    initiate() {
        boxes.length = 0;
        cats.length = 0;
        fallingCats.length = 0;
        points.length =0;

        //orwb
        orwb = new Orwb(0, 8);

        //boxes
        boxes[0] = new Box(0, 10);
        boxes[1] = new Box(1, 10);
        boxes[2] = new Box(2, 10);

        boxes[3] = new Box(5, 10);
        boxes[4] = new Box(6, 10);

        boxes[5] = new Box(9, 10);
        boxes[6] = new Box(10, 10);

        boxes[7] = new Box(2, 7);
        boxes[8] = new Box(3, 7);
        boxes[9] = new Box(4, 7);
        boxes[10] = new Box(5, 7);

        boxes[11] = new Box(0, 4);
        boxes[12] = new Box(1, 4);

        boxes[13] = new Box(8, 3);
        boxes[14] = new Box(9, 3);

        boxes[15] = new Box(3, 1);
        boxes[16] = new Box(4, 1);

        boxes[17] = new Box(10, 3);

        //portal
        portal = new Portal(10, 9);

        //points
        points[0] = new Points(0, 3);
        points[1] = new Points(9, 2);
        points[2] = new Points(5, 9);

        cats[0] = new Cat(5, 6);
        cats[1] = new Cat(6, 9);
        fallingCats[0] = new FallingCat(2, 3);
    }


    restart(){
        //orwb
        orwb = new Orwb(0, 8);
    }

    display() {
        //background(255);

        for (let i = 0; i < points.length; i++) {
            points[i].display();
            points[i].update();
        }

        for (let i = 0; i < cats.length; i++) {
            cats[i].update();
        }

        for (let i = 0; i < fallingCats.length; i++) {
            fallingCats[i].update();
        }


        //orwb
        orwb.display();
        orwb.update();
        orwb.drawStuff();

        portal.display();
        portal.update();


    }
}

class Level2 {
    constructor() {
        this.initiated = false;
    }

    initiate() {
        print("levle2 initated");
        boxes.length = 0;
        cats.length = 0;
        fallingCats.length = 0;
        points.length =0;

        //orwb
        orwb = new Orwb(10, 0);


        //boxes
        boxes[0] = new Box(0, 10);
        boxes[1] = new Box(3, 10);
        boxes[2] = new Box(4, 10);
        boxes[3] = new Box(10, 10);

        boxes[4] = new Box(8, 8);

        boxes[5] = new Box(4, 7);
        boxes[6] = new Box(5, 7);

        boxes[7] = new Box(0, 5);
        boxes[8] = new Box(1, 5);


        boxes[9] = new Box(9, 5);
        boxes[10] = new Box(10, 5);

        boxes[11] = new Box(4, 3);
        boxes[12] = new Box(5, 3);
        boxes[13] = new Box(6, 3);

        boxes[14] = new Box(7, 2);
        boxes[15] = new Box(8, 2);
        boxes[16] = new Box(9, 2);
        boxes[17] = new Box(10, 2);


        //portal
        portal = new Portal(10, 9);

        //points
        points[0] = new Points(0, 9);
        points[1] = new Points(10, 4);
        points[2] = new Points(1, 1);

        //cats
        fallingCats[0] = new FallingCat(2, 0);
        fallingCats[1] = new FallingCat(5, 6);
        fallingCats[2] = new FallingCat(8, 3);

        cats[0] = new Cat(0, 4);

    }

    restart(){
        //orwb
        orwb = new Orwb(10, 0);
    }

    display() {
        //background(255);

        for (let i = 0; i < points.length; i++) {
            points[i].display();
            points[i].update();
        }

        for (let i = 0; i < cats.length; i++) {
            cats[i].update();
        }

        for (let i = 0; i < fallingCats.length; i++) {
            fallingCats[i].update();
        }


        //orwb
        orwb.display();
        orwb.update();
        orwb.drawStuff();

        portal.display();
        portal.update();


    }


}

class Level3 {
    constructor() {
        this.initiated = false;

    }

    initiate() {
        boxes.length = 0;
        cats.length = 0;
        fallingCats.length = 0;
        points.length =0;


        //orwb
        orwb = new Orwb(10, 7);


        //boxes
        boxes[0] = new Box(0, 10);
        boxes[1] = new Box(1, 10);

        boxes[2] = new Box(3, 10);
        boxes[3] = new Box(4, 10);

        boxes[4] = new Box(7, 10);
        boxes[5] = new Box(8, 10);

        boxes[6] = new Box(10, 10);

        boxes[7] = new Box(5, 6);

        boxes[8] = new Box(6, 7);

        boxes[9] = new Box(0, 5);

        boxes[10] = new Box(2, 4);

        boxes[11] = new Box(4, 5);

        boxes[12] = new Box(9, 2);
        boxes[13] = new Box(10, 2);

        boxes[14] = new Box(6, 2);
        boxes[15] = new Box(7, 2);


        //portal
        portal = new Portal(0, 4);

        points[0] = new Points(0, 9);
        points[1] = new Points(4, 3);
        points[2] = new Points(10, 1);

        //cats
        //fallingCats[0] = new FallingCat(8, 8);
        fallingCats[0] = new FallingCat(5, 9);
        //fallingCats[1] = new FallingCat(4, 1);
        fallingCats[1] = new FallingCat(1, 5);

        cats[0] = new Cat(9, 1);
        cats[1] = new Cat(7, 9);
        cats[2] = new Cat(4, 9);
        cats[3] = new Cat(1, 9);

    }

    restart(){
        //orwb
        orwb = new Orwb(10, 7);
    }


    display() {
        //background(255);

        for (let i = 0; i < points.length; i++) {
            points[i].display();
            points[i].update();
        }

        for (let i = 0; i < cats.length; i++) {
            cats[i].update();
        }

        for (let i = 0; i < fallingCats.length; i++) {
            fallingCats[i].update();
        }


        //orwb
        orwb.display();
        orwb.update();
        orwb.drawStuff();

        portal.display();
        portal.update();

    }
}


