const Bodies=Matter.Bodies; 
const Engine=Matter.Engine;
const World=Matter.World; 

var house1, house2, house3, house4;
var virus;
var engine;
var world;
var corona, edges;
var object1, object2; 
var p1, p2, p3, p4, p5, p6, p7, p8;

function setup() {
  createCanvas(800,400);
  strokeWeight(7);
  stroke("green");

  house1 = createSprite(100, 0, 200, 200);
  house2 = createSprite(700, 0, 200, 200);
  house3 = createSprite(100, 350, 200, 200);
  house4 = createSprite(700, 350, 200, 200);
  corona = createSprite(400, 200, 20, 20);
  corona.shapeColor = "red";
  p1 = createSprite(150,100,20,20);
  p2 = createSprite(120,100,20,20);
  p3 = createSprite(150,450,20,20);
  p4 = createSprite(120,450,20,20);
  p5 = createSprite(800,100,20,20);
  p6 = createSprite(770,100,20,20);
  p7 = createSprite(800,450,20,20);
  p8 = createSprite(770,450,20,20);

  log = new Log(230,180,80,5/2);
  log.display();
  

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0,0,0);  
  corona.velocityX = 3; 
  corona.velocityY = 4; 
  edges = createEdgeSprites();
  bounceOff(corona, edges[3]);
  bounceOff(corona, house1);
  bounceOff(corona, house2);
  bounceOff(corona, house3);
  bounceOff(corona, house4);
  drawSprites();
}

function bounceOff (object1, object2 ) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) { 
    object1.velocityX = object1.velocityX * (-1);
  } 

  if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1); 
  }

}