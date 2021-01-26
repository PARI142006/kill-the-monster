const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint = Matter.Constraint
var engine ;
var world;
var ground;
var backgroundImg
var hero, rope;


function preload() {
//preload the images here
backgroundImg=loadImage("pro-c34+images/images/GamingBackground.png")
}

function setup() {
  createCanvas(1500, 500);
  engine=Engine.create();
  world=engine.world;

  // create sprites here
   ground=new Ground(500,423,1003,20)
   hero = new Hero(213,132,300,150)
   rope=new Fly(hero.body,{x:320,y:50})

   box1= new Box(900,100,60,60);
box2= new Box(900,100,60,60);
box3= new Box(900,100,60,60);
box4= new Box(900,100,60,60);
box5= new Box(900,100,60,60);
box6= new Box(900,100,60,60);

box7= new Box(800,100,60,60);
box8= new Box(800,100,60,60);
box9= new Box(800,100,60,60);
box10= new Box(800,100,60,60);
box11= new Box(800,100,60,60);
box12= new Box(800,100,60,60);

box13= new Box(700,100,60,60);
box14= new Box(700,100,60,60);
box15= new Box(700,100,60,60);
box16= new Box(700,100,60,60);
box17= new Box(700,100,60,60);


box18= new Box(600,100,60,60);
box19= new Box(600,100,60,60);
box20= new Box(600,100,60,60);
box21= new Box(600,100,60,60);

monster=new Monster(1100,200,240,280)

 invisibleGround= new Ground(1100,400,41,1)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  rope.display();
  box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
monster.display();
invisibleGround.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  
}