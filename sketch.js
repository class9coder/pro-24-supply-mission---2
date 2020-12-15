var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody1, packageBody2, packageBody3,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	box1 = createSprite(500, 610, 20,100);
	box1.shapeColor=color("red")

	box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("red")

	box3 = createSprite(400,650, 200,20);
	box3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody1 = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody1, true);
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody2, true);
	World.add(world, packageBody2);

	packageBody3 = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody3, true);
	World.add(world, packageBody3);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody1.position.x 
  packageSprite.y= packageBody1.position.y 

  packageSprite.x= packageBody2.position.x
  packageSprite.y= packageBody2.position.y 

  packageSprite.x= packageBody3.position.x 
  packageSprite.y= packageBody3.position.y 
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	Matter.Body.setStatic(packageBody1, false);
	Matter.Body.setStatic(packageBody2, false);
	Matter.Body.setStatic(packageBody3, false);
	   
	
  }
}




