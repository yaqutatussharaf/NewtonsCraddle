
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var  roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,230,230,20);
	bob1 = new bob(320,555,40)
	bob2 = new bob(360,555,40)
	bob3 = new bob(400,555,40)
	bob4 = new bob(440,555,40)
	bob5 = new bob(480,555,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");

  roofObject.display();

  keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}
function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})

	}
	if(keyDown("left")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	}
	if(keyDown("right")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50,y: -45})
		
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	}
 	if(keyDown("down")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: -50,y: -45})
		
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	} 
	if(keyDown("1")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})

	}
	
	if(keyDown("2")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: 50,y: 45})
		
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-35,y: -30})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	} 
	if(keyDown("3")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: 50,y: 45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
		
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-35,y: -30})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})

	} 
	if(keyDown("4")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
		
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})

	} 
	if(keyDown("5")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x: -50,y: -45})
		
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	} 
	if(keyDown("6")){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x: -50,y: -45})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 50,y: 45})
	
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-35,y: -30})
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:35,y: 30})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:35,y: 30})

	} 
}





