//classes for level. They set up the locations and display the boxes, character, enemies and the portals
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

        //point
        point = new Points(5, 6);


    }

    display() {
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            //print(box[i]);
        }
        //portal
        portal.display();
        portal.update();

        point.update();

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

        box[5] = new Box(4, 10);
        box[6] = new Box(5, 10);
        box[7] = new Box(6, 10);
        box[8] = new Box(7, 10);
        box[9] = new Box(8, 10);
        box[10] = new Box(9, 10);
        box[11] = new Box(10, 10);


        //portal
        portal1 = new Portal(7, 9);
    }

    display() {
        //print("Level 2");
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            //print(box[i]);
        }
        //portal
        portal1.display();
        portal1.update();
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
        portal2 = new Portal(5, 7);
    }

    display() {
        //print("Level 3");
        background(255);
        //orwb
        orwb.display();
        orwb.update();

        //box
        for (let i = 0; i < box.length; i++) {
            box[i].display();
            //print(box[i]);
        }
        //portal
        portal2.display();
        portal2.update();
    }
}


