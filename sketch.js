const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stone = Bodies.circle(200,200,20,{'restitution':0.9,'friction':0.5,'density':1.0});
    World.add(world,stone)
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(width-200,100);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(width-200,200);
    pig3 = new Pig(width-200,300);
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(width-100,100);
    bird2 = new Bird(width-100,200);
    bird3 = new Bird(width-100,300);

    
    chain1 = new Chain(bird1.body,pig1.body);
    chain2 = new Chain(bird2.body,pig2.body);
    chain3 = new Chain(bird3.body,pig3.body);

    catapult = new Slingshot(stone,{x:150,y:200})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    pig1.display();
    pig3.display();
    
    bird1.display();
    
    bird2.display();

    bird3.display();
    pig2.display();
    
    chain1.display(); 
    chain2.display(); 
    chain3.display();  
    ellipse(stone.position.x, stone.position.y,20,20)  
    catapult.display();
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    catapult.fly();
    
}