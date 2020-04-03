const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var drops = [];

function setup() {
  //Creates the canvas.
  createCanvas(500,600);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  //Makes the background colour black.
  background(0); 

  //Updates the engine.
  Engine.update(engine);
 
  //Displays the drops.
  for(var a = 0; a < drops.length; a++){
    drops[a].display();
  }

    drops.push(new RainDrops(random(0,500),0,10));
}
