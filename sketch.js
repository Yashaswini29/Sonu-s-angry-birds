const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(width/2+165,320,70,70);
    box2 = new Box(width-380,320,70,70);
    ply = new Ply(width/2+280,240,300,PI/2);
   pig = new Pig(width/2+280,280);

    ground = new Ground(width/2,400,width,20);
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
   ply.display();
  pig.display();
}