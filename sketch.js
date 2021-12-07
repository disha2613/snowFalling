const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg, shiva;
var snow1, ground1;
var winter;

function preload(){
  bgImg = loadImage("snow1.jpg");
  shiva_boy = loadImage("boy.png");
  winter_girl = loadImage("girl.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(300,0,50,50);
  snow2 = new Snow(100,10,50,50);
  snow3 = new Snow(200,20,50,50);
  snow4 = new Snow(400,10,50,50);
  snow5 = new Snow(500,10,50,50);
  snow6 = new Snow(600,20,50,50);
  snow7 = new Snow(700,0,50,50);
  snow8 = new Snow(750,10,50,50);
  snow9 = new Snow(150,20,50,50);
  snow10 = new Snow(250,0,50,50);
  snow11 = new Snow(350,10,50,50);
  snow12 = new Snow(450,20,50,0);
  ground1 = new Ground(400,400,800,5);
  ground2 = new Ground(windowWidth, windowHeight,5,800);
  ground1.visible = false;

  shiva = createSprite(425, 315, 20, 50);
  shiva.addAnimation("shiva", shiva_boy);
  shiva.scale = 0.4;

  winter = createSprite(250, 315, 20,15);
  winter.addAnimation("winter", winter_girl);
  winter.scale = 0.45;
}

function draw() {
  background(bgImg);
  Engine.update(engine);



  snow1.velocityY = 1;
  snow2.velocityY = 1;
  snow3.velocityY = 1;
  snow4.velocityY = 1;
  snow5.velocityY = 1;
  snow6.velocityY = 1;
  snow7.velocityY = 1;
  snow8.velocityY = 1;
  snow9.velocityY = 1;
  snow10.velocityY = 1;
  snow11.velocityY = 1;
  snow12.velocityY = 1;

  
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow1.display();
  snow2.display();
  ground1.display();
  ground2.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    shiva.velocityX = -3;
     
  }
  if (keyCode === RIGHT_ARROW){
    shiva.velocityX = 3;
     
  }
  if (keyCode === LEFT_ARROW){
    winter.velocityX = -2;
     
  }
  if (keyCode === RIGHT_ARROW){
    winter.velocityX = 3;
     
  }
        
}
