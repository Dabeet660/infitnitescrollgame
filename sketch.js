const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var health = 500;
var backgroundImg;
var player;
var gameState = 0;
var score = 0;
var horizontalobs = []; 
var x1 = 0;
var x2;
var obstacle;

var scrollspeed = 2;

function preload(){
  backgroundImg = loadImage("images/bg.jpg")
}

function setup(){
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0;
  
  player = new Player(50,850,90,90);

  x2 = width;

  for(var i=0;i<width;i++){
    obstacle = horizontalobs.push(new Obstacle(Math.random(1,100),Math.random(1,100),10,10))
 }

  Engine.run(engine);
}

function draw() {
  
  image(backgroundImg,x1,0,width,height);
  image(backgroundImg,x2,0,width,height);

  x1 -= scrollspeed;
  x2 -= scrollspeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  Engine.update(engine);

  textSize(35);
  
  fill("Red");
  text("Score:" + score,displayWidth/2 + 490, displayHeight/2-490);
  textSize(25);
  text(Math.round(frameRate()) + "FPS",displayWidth/2 + 290,displayHeight/2-490);

  for(var k=0;k<horizontalobs.length;k++){
    horizontalobs[k].display();
  }

  player.display();


  
 Matter.Body.setVelocity(player.body,{x:0,y:0})

  addScore();
  drawSprites();
}

function addScore(){
  if(frameCount % 100 === 0){
    score  = score + 10;
  }
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setStatic(player.body,false);
    Matter.Body.setVelocity(player.body,{x:4,y:-56});
  }
}