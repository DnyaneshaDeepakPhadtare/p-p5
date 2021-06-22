function preload(){

}

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,150,150,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,50);
    circle(50,550,50);
    circle(550,50,50);
    circle(550,550,50);
    fill(0,250,0);
    stroke(0,250,0);
    rect(45,77,20,450);
    rect(540,77,20,450);
    rect(73,40,450,20);
    rect(73,550,450,20);
}

function take_snapshot(){
    save('name.png');
}
