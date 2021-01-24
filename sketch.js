
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function setup() {
	createCanvas(1350,400);

  engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,height,1500,20);
  dustbin1=new Dustbin(1000,300);
  paper=new Paper(50,100);
  Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  
 ground.display();
 dustbin1.display();
 paper.display();
 drawSprites();
 
}

function keyPressed(){

  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:87,y:-87})
  }
}


