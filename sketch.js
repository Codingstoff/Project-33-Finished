const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowflake = [];
var child;
var backgroundIMG;
var childIMG;

function preload() {
 
   backgroundIMG = loadImage("snow3.jpg")
   childIMG = loadImage("Snowchild.jpg")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  child = createSprite(300,350,75,75)
  child.addImage(childIMG)
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);

  if(frameCount%20===0)
  {                         //random(0,800)
      snowflake.push(new Snow(random(0,800),10,50));
  }

  for (var e = 0; e < snowflake.length; e++) {
    snowflake[e].display();
   
    if(keyDown(LEFT_ARROW)){
      child.x = child.x -1;
  }
  else if(keyDown(RIGHT_ARROW)){
    child.x = child.x +1;
  }
  else if(keyDown(UP_ARROW)){
    child.y = child.y -1;
  }
  else if(keyDown(DOWN_ARROW)){
    child.y = child.y +1;
  }
}

drawSprites()
}