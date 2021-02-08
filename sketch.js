const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup(){
createCanvas(1200,400);

engine  = Engine.create();
world = engine.world;

ground = new Ground(width/2, height-10, 1200, 20);
base1 =  new Ground(400, 300,200, 10);
base2 =  new Ground(700, 200,150, 10);

color1 = "pink";
color2 = "lightblue";
color3 = "lightgreen";
color4 = "grey";
// base1
b1 = new Box(320,282,color2);
b2 = new Box(345,282,color2);
b3 = new Box(370,282,color2);
b4 = new Box(395,282,color2);
b5 = new Box(420,282,color2);
b6 = new Box(445,282,color2);
b7 = new Box(470,282,color2);

b8 = new Box(350,252,color1);
b9 = new Box(375,252,color1);
b10 = new Box(400,252,color1);
b11 = new Box(425,252,color1);
b12 = new Box(450,252,color1);


b13 = new Box(380,220,color3);
b14 = new Box(405,220,color3);
b15 = new Box(430,220,color3);

b16 = new Box(400,190,color4);
//base2
b17 = new Box(650,180,color1);
b18 = new Box(675,180,color1);
b19= new Box(700,180,color1);
b20 = new Box(725,180,color1);
b21 = new Box(750,180,color1);


b22 = new Box(675,150,color3);
b23 = new Box(700,150,color3);
b24 = new Box(725,150,color3);

b25 = new Box(700,120,color4);


p1 = new Polygon(50,250);

c1 = new Chain(p1.body, {x: 100, y: 100});

Engine.run(engine);

}

function draw(){
  background(0);
  
  textSize(30);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 50, 50);
  textSize(11);
  text("Press space for next chance", 50,80);
  base1.display();
  base2.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();


  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();

  b16.display();

  //base2
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();

  b25.display();

  //polygon
  p1.display();
  c1.display();

}

function mouseDragged(){
	Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
	
	}
	
function mouseReleased(){
		c1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(p1.body, {x:100, y:100}) 
	 c1.attach(p1.body);
	}
  }

