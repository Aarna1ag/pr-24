const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;
var world; 

function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;


ground1 = new ground(600,370,1200,10);

paper1 = new paper(100,50,30);
dustbin1= new dustbin(1104,311,20,90);
dustbin2= new dustbin(875,311,20,90);   
dustbin3= new dustbin(990,345,208,20); 
  
}

function draw() {

 background(0);
 Engine.update(engine);
 rectMode(CENTER);
paper1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

ground1.display();
 
  drawSprites();
 
}
 function keyPressed() {
		
		
if (keyCode === UP_ARROW) {
			
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80});
		   
 };
}
