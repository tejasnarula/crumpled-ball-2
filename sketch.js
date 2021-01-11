var ground;
var box1, box2, box3, box2Body, box3Body, box1Body, dustbinimage;
var paperObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 700);

	box1 = createSprite(1000 - 90, 490, 20, 300)
	box2 = createSprite(1000 + 90, 500, 20, 300)
	box3 = createSprite(1000 , 650, 180, 20)
	
	box1.shapeColor = "white"
	box2.shapeColor = "white"
	box3.shapeColor = "white"

	engine = Engine.create();
	world = engine.world;

	box1Body = Bodies.rectangle(box1.x, box1.y, box1.width, box1.height , {isStatic:true} );
	World.add(world, box1Body);

	box3Body = Bodies.rectangle(box3.x, box3.y, box3.width, box3.height , {isStatic:true} );
	World.add(world, box3Body);
	 
	box2Body = Bodies.rectangle(box2.x, box2.y, box2.width, box2.height , {isStatic:true} );
 	World.add(world, box2Body);


	 
	ground = new Ground(600,height-35,1200,10);
	paperObject = new paper(100, 60, 70);

	Engine.run(engine);

	dustbinImage = createSprite(1000, 495, 20, 20)
	dustbinImage.addImage(dustbinimage)

	keyPressed()
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
	ground.display()
	paperObject.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:42, y:-50})
	}
}

