let wxp;
let backgroundImage;
let note;

function preload(){
    wxp = loadImage("background/五线谱.jpeg");
    backgroundImage = loadImage('background/1.png');
    noteImage = loadImage('background/note.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    note = new Note();
}

function draw() {
    background(255);
    image(backgroundImage,0,0,windowWidth,windowHeight);
    image(wxp,0,430,windowWidth,50);
    note.move();
    note.show();
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
        image(noteImage,this.x,this.y,40,50);
    }
}
