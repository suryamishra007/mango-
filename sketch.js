
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var boyImg;
var stone;
var sling;
var mango;
var tree;
var ground
function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	
  stone1 = new Stone(150,550,20);
	sling = new SlingShot(stone1.body,{x:150,y:550});

  

	mango1 = new Mango(600,300,20);
	mango2 = new Mango(550,325,20);
	mango3 = new Mango(650,300,20);
	mango4 = new Mango(700,350,20);
  mango5 = new Mango(500,400,20);


    
    ground = new Ground(400,700,800,100);

    tree = new Tree(600,400,540,440)

	boy = createSprite(200,600,20,20)
	boy.scale=0.1;
	boy.addImage("img",boyImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  
  sling.display();
  

  tree.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  mango5.display();

  stone1.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  
  drawSprites();
 
}


function mouseDragged()
{
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    sling.fly();
}

function detectCollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position 

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stone1.body,{x:150,y:550})
    sling.attach(stone1.body)
  }
}