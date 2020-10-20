
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper1
var Dustbin1
var Dustbin2
var Dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper1 = new Paper(100,100,10);
	Dustbin1 = new Dustbin(400,390,200,10);
	Dustbin2 = new Dustbin(300,390,10,100);
	Dustbin3 = new Dustbin(500,390,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	function keyPressed (){
		if(keyCode ===UP_ARROW){
			Matter.Body.applyForce(Paper1Object.body,Paper1Object.body.position,{x:85 y:-85});

		}
	}



 
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Paper1.display();
  drawSprites();
 
}



