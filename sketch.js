
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options = {
		isStatic: true,
	}

	plane = Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,plane);
	var b1_opt = {
		restitution:0.5,
		friction:0.3,
		frictionAir:0.4,
	}

	var b2_opt = {
		restitution:0.6,
		friction:0.1,
		frictionAir:0.5,
	}

	var b3_opt = {
		restitution:0.2,
		friction:0.5,
		frictionAir:0.3,
	}
	b1 = Bodies.circle(200,200,10,b1_opt);
	World.add(world,b1);
	b2 = Bodies.rectangle(110,200,30,30,b2_opt);
	World.add(world,b2);
	b3 = Bodies.rectangle(290,200,50,30,b3_opt);
	World.add(world,b3);

	Engine.run(engine);
  
}


function draw() {
  background("gray");
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,1200);
  
  fill("red");
  ellipse(b1.position.x,b1.position.y,50);
  rect(b2.position.x,b2.position.y,30,30);
  rect(b3.position.x,b3.position.y,50,30);
  ellipseMode(CENTER);
  rectMode(CENTER);
  drawSprites();
 
}



