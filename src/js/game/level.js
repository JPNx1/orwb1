class Level1 {
    constructor() {
        //orwb
        orwb = new Orwb(0, 8);


        //box
        box[0] = new Box(0, 10);
        box[1] = new Box(1, 10);
        box[2] = new Box(2, 10);
        box[3] = new Box(3, 10);
        box[4] = new Box(2, 8);


        //portal
        portal = new Portal(7, 7);

    }

    display() {
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            print(box[i]);
        }
        //portal
        portal.display();
        portal.update();

    }
}

//todo how to delete objects or sth like that xd

class Level2 {
    constructor() {
//orwb
        orwb = new Orwb(0, 8);


        //box
        box[0] = new Box(0, 10);
        box[1] = new Box(1, 10);
        box[2] = new Box(2, 10);
        box[3] = new Box(3, 10);
        box[4] = new Box(2, 8);


        //portal
        portal = new Portal(7, 9);
    }

    display() {
        print("Level 2");
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            print(box[i]);
        }
        //portal
        portal.display();
        portal.update();
    }
}

class Level3 {
    constructor() {
//orwb
        orwb = new Orwb(0, 8);


        //box
        box[0] = new Box(0, 10);
        box[1] = new Box(1, 10);
        box[2] = new Box(2, 10);
        box[3] = new Box(3, 10);
        box[4] = new Box(2, 8);


        //portal
        portal = new Portal(5, 7);
    }

    display() {
        print("Level 3");
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            print(box[i]);
        }
        //portal
        portal.display();
        portal.update();
    }
}


