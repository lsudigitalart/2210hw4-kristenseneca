var img;
var v;
var ufo;
var humans;
var speed = 1;
var diameter = 150;
var x=(50);
var y=(50);

var ex = 100;
var ey = 100;
var ed = 100;
var movespeed = 7;

var radius = 10;
var pacman = -radius;


var stopBulletX2 = (50);
var stopBulletX3 = (550);


var startBulletX = (380);
var stopBulletX = (380);
var startBulletY = (380);
var stopBulletY = (-450);
var step = 0.005;
var pct = 0.0;
var startX = startBulletX;
var startY = startBulletY;

function preload() {
  img = loadImage("spacealien.png");
  ufo = loadImage("spacealienplayer.png");
  humans = loadImage("spaceship.png");
}

function setup(){
  v = 100;
  createCanvas(750, 600)
  noCursor();
  smooth();
  background(255, 255, 255);
  x = width/2;
  y = height/2;


}

function draw(){
  image (img, 0, 0,750,600);

    var mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(0)

image(ufo, mouseX -55, mouseY-50,120,105);

        if(keyIsPressed) {
            if (keyCode == LEFT_ARROW) {
                mouseX--;
                mouseX-=movespeed;
              }
            else if (keyCode == RIGHT_ARROW){
                mouseX++;
                mouseX+=movespeed;
               }
             else if (keyCode == UP_ARROW){
                 mouseY--;
                 mouseY-=movespeed;
                }
              else if (keyCode == DOWN_ARROW){
                  mouseY++;
                  mouseY+=movespeed;
                }
                mouseX = constrain( mouseX, 0, width);
                mouseY = constrain( mouseY, 0, 60);

}


    background(255, map(mouseDist, 20, 30, 20, 255), map(mouseDist, 20, 30, 20, 255)-mouseX, 30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // ellipse(mouseX, mouseY, 20);
    println(mouseDist);




image(humans,x,y,diameter,diameter)

    x += random(-speed, speed);
    y += random(-speed, speed);
    x = constrain( 310, 0, 750);
    y = constrain( y+1,0, 430);



    if (keyCode == LEFT_ARROW){

   if (pct < .5) {
   startX = startBulletX + (( stopBulletX-startBulletX) * pct);
   startY = startBulletY + (( stopBulletY-startBulletX) * pct);
   pct += step;


 }
       ellipse(startX, startY, 20, 20);
  }




  if (keyCode == RIGHT_ARROW){

  if (pct < .65) {
  startX = startBulletX + (( stopBulletX2-startBulletX) * pct);
  startY = startBulletY + (( stopBulletY-startBulletX) * pct);
  pct += step;


  }
     ellipse(startX, startY, 20, 20);
  }

  if (keyCode == UP_ARROW){

  if (pct < .65) {
  startX = startBulletX + (( stopBulletX3-startBulletX) * pct);
  startY = startBulletY + (( stopBulletY-startBulletX) * pct);
  pct += step;


  }
     ellipse(startX, startY, 20, 20);
  }


  if (keyCode == DOWN_ARROW){

  if (pct < .65) {
  startX = startBulletX + (( stopBulletX3-startBulletX) * pct);
  startY = startBulletY + (( stopBulletY-startBulletX) * pct);
  pct += step;


  }
     ellipse(startX, startY, 20, 20);
  }








 fill(255,255,255);
 textSize(12);
 textFont("avenir");
 text("M O V E  W I T H  Y O U R  A R R O W  K E Y S  T O  D O D G E  T H E  I N V A D E R S", 150, 590);






//var mdist = dist(mouseX,mouseY,x,y);
//println(mdist);
//if(mdist < d/2){

}


//if()
