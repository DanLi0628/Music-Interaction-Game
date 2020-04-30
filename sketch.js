let wxp;
let backgroundImage;
let note;
noteW = 40;
noteH = 50;

function preload() {
    wxp = loadImage("background/五线谱.jpeg");
    backgroundImage = loadImage('background/1.png');
    note1 = loadImage('background/note.png');
    note2 = loadImage('background/note2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    note = new Note();
    
}

function draw() {
    background(255);
    image(backgroundImage, 0, 0, windowWidth, windowHeight);
    image(wxp, 0, 430, windowWidth, 50);
    note.move();
    note.show();
    note.change();
}

class Note {
    constructor(x, y) {
        this.x = windowWidth;
        this.y = 430;
    }
    move() {
        this.x = this.x - 5;
        this.y = this.y;
    }
    show() {
        image(note1, this.x, this.y, 40, 50);
    }
    change() {
        if (this.x>160 && this.x <200){
        image(note2, this.x, this.y, noteW, noteH);
        noteW += 2;
        noteH += 2.5;
    }

}
}
