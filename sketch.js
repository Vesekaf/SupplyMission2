const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var aa44reviever1, aa44reviever2, aa44reviever3;
var aa44reviever1Body, aa44reviever2Body, aa44reviever3Body

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	aa44reviever1 = createSprite(370, 600, 200, 20);
	aa44reviever2 = createSprite(280, 560, 20, 100);
	aa44reviever3 = createSprite(460, 560, 20, 100);
	
	aa44reviever1.shapeColor = color("red");
	aa44reviever2.shapeColor = color("red");
	aa44reviever3.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 aa44reviever1Body = Bodies.rectangle(370, 650, 200, 20, {isStatic:true});
	 aa44reviever2Body = Bodies.rectangle(280, 610, 20, 100, {isStatic:true});
	 aa44reviever3Body = Bodies.rectangle(460, 610, 20, 100, {isStatic:true});
	 
	 World.add(world, aa44reviever1Body);
	 World.add(world, aa44reviever2Body);
	 World.add(world, aa44reviever3Body);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  aa44reviever1.x = aa44reviever1Body.position.x
  aa44reviever1.y = aa44reviever1Body.position.y
  
  aa44reviever2.x = aa44reviever2Body.position.x
  aa44reviever2.y = aa44reviever2Body.position.y

  aa44reviever3.x = aa44reviever3Body.position.x
  aa44reviever3.y = aa44reviever3Body.position.y

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	


  }
}



