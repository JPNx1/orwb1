class Level1 {
    constructor() {
        //orwb
        orwb = new Orwb(0, 8);

        //box
        box = new Box(0, 10);
        box1 = new Box(1, 10);
        box2 = new Box(2, 10);
        box3 = new Box(3, 10);

        //portal
        portal = new Portal(7, 7);

    }

    display() {
        background(255);
        //orwb
        orwb.display();
        orwb.update();
        //box
        box.display();
        box1.display();
        box2.display();
        box3.display();
        //portal
        portal.display();
        portal.update();
    }
}

class Level2 {
    display() {
        print("Level 2");
    }
}

class Level3 {

    display() {
        print("Level 3");
    }
}