let wxp;
let backgroundImage;
let note;
noteW = 40;
noteH = 50;
let x1 = 1500;
let y1 = 430;
let x2 = 1700;
let y2 = 430;


function preload() {
    wxp = loadImage("background/五线谱.jpeg");
    backgroundImage = loadImage('background/1.png');
    note0 = loadImage('background/note0.png');
    note1 = loadImage('background/note1.png');
    noteFire = loadImage('background/note2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    image(backgroundImage, 0, 0, windowWidth, windowHeight);
    image(wxp, 0, 430, windowWidth, 50);
    Note();
    if (x1 > 160 && x1 < 200) {
        image(noteFire, x1, y1, noteW, noteH);
        noteW += 2;
        noteH += 2.5;
    }

}

function Note() {
    image(note1, x1, y1, 40, 50);
    x1 = x1 - 5;
    if (x1<0){
        x1=1500;
    }
    image(note0, x2, y2, 40, 50);
    x2 = x2 - 5;
    if (x2<0){
        x2=1700;
    }
    }


