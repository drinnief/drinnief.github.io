//Catch the Ball

var ballx = 300;
var bally = 300;
var ballx2 = 300;
var bally2 = 300;
var ballx3 = 300;
var bally3 = 300;
var ballx4 = 300;
var bally4 = 300;

var ballSize = 40;
var score = 0;
var gameState = "L1";
var cursorImg;

function preload(){
  cursorImg = loadImage('https://drinnief.github.io/gifs/drPumpkin.gif');
  pumpkinSquad = loadImage('https://drinnief.github.io/gifs/drPumpkinSquad.gif');
  gcandy = loadImage('https://drinnief.github.io/gifs/greenCandy.gif');
  bcandy = loadImage('https://drinnief.github.io/gifs/blueCandy.gif');
  spider = loadImage('https://drinnief.github.io/gifs/spider.gif');
}


function setup() {

createCanvas(600,600);
noCursor();
textAlign(CENTER);
textSize(20);

rectLocation = createVector(width/2,height/2);
rectLocation2 = createVector(width/2,height/2);



} //end of setup ===========================================


function draw() {
  background (220);

  if(gameState == "L1"){
    levelOne();
  }
    
   if(gameState == "L2"){
     levelTwo();
   }

   if(gameState == "L3"){
     levelThree();
   }
   
   if(gameState == "Results"){
     Results();
   }
   
   if(gameState == "GameOver"){
     GameOver();
   }

  text(("Score:" + score),width/2,40);
    

} //end of draw ===========================================

function levelOne(){

  background ('#B7410E');
  image(cursorImg, mouseX-30, mouseY-30, width/10, height/10);
  text("Level 1", width/2, height-20);
  fill(225,225,225);

  //Following Spider Movement - Code by Ian Hogers from stackoverflow.com from the post "Making an object move toward the cursor - JavaScript - p5.js"
    var target = createVector(mouseX,mouseY);
    var distance = target.dist(rectLocation);
    var velocity = p5.Vector.sub(target,rectLocation);
    velocity.setMag(1.5);
    rectLocation.add(velocity);
    var mappedDistance = map(distance, 100, 0, 1.5, 1);
    target.sub(rectLocation);
    target.normalize();
    target.mult(mappedDistance);  
    rectLocation.add(target);  
  
  //Score Stuff:
  var distToBall = dist(ballx,bally,mouseX,mouseY); //Blue Candy
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +2;
  }
 var distToBall = dist(ballx2,bally2,mouseX,mouseY); //Green Candy
  if (distToBall < ballSize/2){    
    ballx2 = random(width);
    bally2 = random(height);
    score = score +4;
  }
  var distToBall = dist(rectLocation.x,rectLocation.y,mouseX,mouseY); //Following Small Spider
  if (distToBall < ballSize/2){      
    ballx4 = random(width);
    bally4 = random(height);
    score = score -0.5;
    redraw();
  } 

  if(score <= -50){
    gameState = "GameOver";
  }  
  if(score >= 20){
    gameState = "L2";
  }
  
  // Sprites
  image(spider, rectLocation.x, rectLocation.y, ballSize, ballSize);  
  image(gcandy, ballx-40, bally-40, ballSize/.5, ballSize/.5);
  image(bcandy, ballx2-20, bally2-20, ballSize, ballSize);
   line(mouseX,mouseY,ballx,bally);
   line(mouseX,mouseY,ballx2,bally2);

  
} //end of level 1 ===========================================

function levelTwo(){
  background('#8D4585');
  fill(225,225,225); // Turn Text White
  text("Level 2", width/2, height-20);
  image(cursorImg, mouseX-30, mouseY-30, width/10, height/10);

  //Following Spider Movement - Code by Ian Hogers from stackoverflow.com from the post "Making an object move toward the cursor - JavaScript - p5.js"
    var target = createVector(mouseX,mouseY);
    var distance = target.dist(rectLocation);
    var velocity = p5.Vector.sub(target,rectLocation);
    velocity.setMag(3.5);
    rectLocation.add(velocity);
    var mappedDistance = map(distance, 100, 0, 1.5, 1);
    target.sub(rectLocation);
    target.normalize();
    target.mult(mappedDistance);  
    rectLocation.add(target);  
  
  //Score Stuff:
  var distToBall = dist(ballx,bally,mouseX,mouseY); //Blue Candy
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +2;
  }
 var distToBall = dist(ballx2,bally2,mouseX,mouseY); //Green Candy
  if (distToBall < ballSize/2){    
    ballx2 = random(width);
    bally2 = random(height);
    score = score +4;
  }
  var distToBall = dist(ballx3,bally3,mouseX,mouseY); //Big Spider
  if (distToBall < ballSize){    
    ballx3 = random(width);
    bally3 = random(height);
    score = score -8;
  }
  var distToBall = dist(rectLocation.x,rectLocation.y,mouseX,mouseY); //Following Small Spider
  if (distToBall < ballSize/2){      
    ballx4 = random(width);
    bally4 = random(height);
    score = score -0.5;
    redraw();
  }

  if(score <= -50){
    gameState = "GameOver";
  }
  
  if(score >= 45){
    gameState = "L3";
  }
  
  // Sprites
  image(spider, ballx3-80, bally3-85, ballSize/0.25, ballSize/0.25);
  image(spider, rectLocation.x, rectLocation.y, ballSize, ballSize);  
  image(gcandy, ballx-40, bally-40, ballSize/.5, ballSize/.5);
  image(bcandy, ballx2-20, bally2-20, ballSize, ballSize);
  
 } //end of level 2 =========================================== 

function levelThree(){
  background(0);
  text("Level 3", width/2, height-20);
  image(cursorImg, mouseX-30, mouseY-30, width/10, height/10);

    //Following Spider Movement - Code by Ian Hogers from stackoverflow.com from the post "Making an object move toward the cursor - JavaScript - p5.js"
    var target = createVector(mouseX,mouseY); // Small Spider Movement
    var distance = target.dist(rectLocation);
    var velocity = p5.Vector.sub(target,rectLocation);
    velocity.setMag(4.75);
    rectLocation.add(velocity);
    var mappedDistance = map(distance, 100, 0, 1.5, 1);
    target.sub(rectLocation);
    target.normalize();
    target.mult(mappedDistance);  
    rectLocation.add(target);
    
    //Big Spider Movement
    var target2 = createVector(mouseX,mouseY);
    var distance2 = target2.dist(rectLocation);
    var velocity2 = p5.Vector.sub(target2,rectLocation2);
    velocity2.setMag(1);
    rectLocation2.add(velocity2);
    var mappedDistance = map(distance2, 100, 0, 1.5, 1);
    target2.sub(rectLocation);
    target2.normalize();
    target2.mult(mappedDistance);  
    rectLocation2.add(target);    
    
  //Score Stuff:
  var distToBall = dist(ballx,bally,mouseX,mouseY); //Blue Candy
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +2;
  }
 var distToBall = dist(ballx2,bally2,mouseX,mouseY); //Green Candy
  if (distToBall < ballSize/2){    
    ballx2 = random(width);
    bally2 = random(height);
    score = score +4;
  }
  var distToBall = dist(rectLocation2.x,rectLocation2.y,mouseX,mouseY); //Big Spider
  if (distToBall < ballSize/0.5){    
    ballx3 = random(width);
    bally3 = random(height);
    score = score -1.5;
    redraw();
  }
  var distToBall = dist(rectLocation.x,rectLocation.y,mouseX,mouseY); //Following Small Spider
  if (distToBall < ballSize/2){      
    ballx4 = random(width);
    bally4 = random(height);
    score = score -1;
    redraw();
  }

  
  
  if(score <= -50){
    gameState = "GameOver";
  }
  
  if(score >= 70){
    gameState = "Results";
  }
  
  // Sprites
  image(spider, rectLocation2.x-80, rectLocation2.y-80, ballSize/0.25, ballSize/0.25);
  image(spider, rectLocation.x, rectLocation.y, ballSize, ballSize);  
  image(gcandy, ballx-40, bally-40, ballSize/.5, ballSize/.5);
  image(bcandy, ballx2-20, bally2-20, ballSize, ballSize);
  
 } //end of level 3 ===========================================  
 
 function Results(){
 background(0);
 image(cursorImg, mouseX-30, mouseY-30, width/10, height/10);
 image(pumpkinSquad,0,460);
   textSize(20)
   text("Congratulations, You Won!", width/2, height/2);
   
   
   textSize(10)
   text("Credits: Dancing pumpkin animations originally from Deltarune.", width/2, height/2+25)
   text("Upscaled recreation by Tumblr user lunarlicorice", width/2, height/2+40)
   text("Following spider movement code by Ian Hogers from stackoverflow.com", width/2, height/2+55)
 }   

//OR 

function GameOver(){
 background(0);
 image(cursorImg, mouseX-30, mouseY-30, width/10, height/10);
 
   textSize(20)
   text
   text("You lost :(", width/2, height/2);
   //text("Hit the spacebar to restart!", width/2, height/2+50); 
 
// function keyPressed(){
//   if (key === 'SPACE'|| keyCode === 32){
//    gameReset();
//   }
// }
 
// function gameReset(){
//   score = 0;
//   gameState = "L1";
// }  
}
 
