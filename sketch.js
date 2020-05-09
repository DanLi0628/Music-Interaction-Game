score=0;

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
    x1 = 2000;
    y1 = 430;
    x2 = x1 + 300;
    y2 = 430;
    x3 = x2 + 250;
    y3 = 430;
    x4 = x3 + 300;
    y4 = 430;
    x5 = x4 + 150;
    y5 = 430;
    x6 = x5 + 200;
    y6 = 430;
    createCanvas(windowWidth, windowHeight);
}

function Note() {
    image(note1, x1, y1, 40, 50);
    x1 = x1 - 5;
    if (x1 < 0) {
        x1 = 1500;
    }
    image(note0, x2, y2, 40, 50);
    x2 = x2 - 5;
    if (x2 < 0) {
        x2 = x1 + random(150, 300);
    }
    image(note2, x3, y3, 40, 50);
    x3 = x3 - 5;
    if (x3 < 0) {
        x3 = x2 + random(150, 300);
    }
    image(note3, x4, y4, 40, 50);
    x4 = x4 - 5;
    if (x4 < 0) {
        x4 = x3 + random(150, 300);
    }
    image(note4, x5, y5, 40, 50);
    x5 = x5 - 5;
    if (x5 < 0) {
        x5 = x4 + random(150, 300);
    }
    image(note5, x6, y6, 40, 50);
    x6 = x6 - 5;
    if (x6 < 0) {
        x6 = x5 + random(150, 300);
    }
}


function draw() {
    image(backgroundImage, 0, 0, windowWidth, windowHeight);
    image(wxp, 0, 430, windowWidth, 50);
    image(noteCircle, 160, 425, 70, 70);
    Note();
    noteW = 60;
    noteH = 75;
        noStroke();
        rect(0,0,150,50);
        textSize(20);
        stroke(0);
        text("score:"+str(score),20,32);
        if (keyIsPressed) {
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
    }

  function keyPressed() {
        if (x1 > 160 && x1 < 200) {
            image(noteFire, x1, y1, noteW, noteH);
            if(x1>=170&&x1<=190){
                score+=100;
            }
            if(x1>160&&x1<170){
                score+=90;
            }
            if(x1>190&&x1<200){
                score+=80;
            }
        }
        if (x2 > 160 && x2 < 200) {
            image(noteFire, x2, y2, noteW, noteH);
            if(x2>=170&&x2<=190){
                score+=100;
            }
            if(x2>160&&x2<170){
                score+=90;
            }
            if(x2>190&&x2<200){
                score+=80;
            }
        }
        if (x3 > 160 && x3 < 200) {
            image(noteFire, x3, y3, noteW, noteH);
            if(x3>=170&&x3<=190){
                score+=100;
            }
            if(x3>160&&x3<170){
                score+=90;
            }
            if(x3>190&&x3<200){
                score+=80;
            }
        }
        if (x4 > 160 && x4 < 200) {
            image(noteFire, x4, y4, noteW, noteH);
            if(x4>=170&&x4<=190){
                score+=100;
            }
            if(x4>160&&x4<170){
                score+=90;
            }
            if(x4>190&&x4<200){
                score+=80;
            }
        }
        if (x5 > 160 && x5 < 200) {
            image(noteFire, x5, y5, noteW, noteH);
            if(x5>=170&&x5<=190){
                score+=100;
            }
            if(x5>160&&x5<170){
                score+=90;
            }
            if(x5>190&&x5<200){
                score+=80;
            }
        }
        if (x6 > 160 && x6 < 200) {
            image(noteFire, x6, y6, noteW, noteH);
            if(x6>=170&&x6<=190){
                score+=100;
            }
            if(x6>160&&x6<170){
                score+=90;
            }
            if(x6>190&&x6<200){
                score+=80;
            }
        }
        }






