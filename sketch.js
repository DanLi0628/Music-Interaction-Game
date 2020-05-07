let x1 = 1500;
let y1 = 430;
let x2 = x1 + 200;
let y2 = 430;
let x3 = x2 + 250;
let y3 = 430;
let x4 = x3 + 100;
let y4 = 430;
let x5 = x4 + 150;
let y5 = 430;
let x6 = x5 + 200;
let y6 = 430;


function preload() {
    wxp = loadImage("background/五线谱.jpeg");
    backgroundImage = loadImage('background/1.png');
    note0 = loadImage('background/note0.png');
    note1 = loadImage('background/note1.png');
    note2 = loadImage('background/note2.png');
    note3 = loadImage('background/note3.png');
    note4 = loadImage('background/note4.png');
    note5 = loadImage('background/note5.png');
    noteFire = loadImage('background/noteFire.png');
    noteCircle = loadImage("background/noteCircle.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    image(backgroundImage, 0, 0, windowWidth, windowHeight);
    image(wxp, 0, 430, windowWidth, 50);
    image(noteCircle,160,425,70,70);
    Note();
    noteW = 40;
    noteH = 50;
    if (x1 > 160 && x1 < 200) {
        image(noteFire, x1, y1, noteW, noteH);
    }
    if (x2 > 160 && x2 < 200) {
        image(noteFire, x2, y2, noteW, noteH);
    }
    if (x3 > 160 && x3 < 200) {
        image(noteFire, x3, y3, noteW, noteH);
    }
    if (x4 > 160 && x4 < 200) {
        image(noteFire, x4, y4, noteW, noteH);
    }
    if (x5 > 160 && x5 < 200) {
        image(noteFire, x5, y5, noteW, noteH);
    }
    if (x6 > 160 && x6 < 200) {
        image(noteFire, x6, y6, noteW, noteH);
    }
}

// function mousePressed(){
//     if (x1 > 160 && x1 < 200) {
//         image(noteFire, x1, y1, noteW, noteH);
//     }
//     if (x2 > 160 && x2 < 200) {
//         image(noteFire, x2, y2, noteW, noteH);
//     }
//     if (x3 > 160 && x3 < 200) {
//         image(noteFire, x3, y3, noteW, noteH);
//     }
//     if (x4 > 160 && x4 < 200) {
//         image(noteFire, x4, y4, noteW, noteH);
//     }
//     if (x5 > 160 && x5 < 200) {
//         image(noteFire, x5, y5, noteW, noteH);
//     }
//     if (x6 > 160 && x6 < 200) {
//         image(noteFire, x6, y6, noteW, noteH);
//     }
// }

function Note() {
    image(note1, x1, y1, 40, 50);
    x1 = x1 - 5;
    if (x1 < 0) {
        x1 = 1500;
    }
    image(note0, x2, y2, 40, 50);
    x2 = x2 - 5;
    if (x2 < 0) {
        x2 = x1 + random(100, 250);
    }
    image(note2, x3, y3, 40, 50);
    x3 = x3 - 5;
    if (x3 < 0) {
        x3 = x2 + random(100, 250);
    }
    image(note3, x4, y4, 40, 50);
    x4 = x4 - 5;
    if (x4 < 0) {
        x4 = x3 + random(100, 250);
    }
    image(note4, x5, y5, 40, 50);
    x5 = x5 - 5;
    if (x5 < 0) {
        x5 = x4 + random(100, 250);
    }
    image(note5, x6, y6, 40, 50);
    x6 = x6 - 5;
    if (x6 < 0) {
        x6 = x5 + random(100, 250);
    }
}


