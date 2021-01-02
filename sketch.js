
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball = createsprite(20,20,20,20);
	var ball1 = createsprite(20,20,20,20);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(155);
  
  drawSprites();
 
}



