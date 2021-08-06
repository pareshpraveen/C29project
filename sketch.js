const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rightwall;
var leftwall;
var stone;
var jointlink;
var bridge;

var stones = [];

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  

  fill("#a57164");
  
  rightwall = new Base(10,400,400,200);

  leftwall = new Base(990,400,400,200);

  stone = new Stone(500,-10);

  jointpoint = new Base(400,400,10,30);

  jointpoint2 = new Base(800,400,10,30);


  bridge = new Bridge(13,{x:100,y:400});

  //jointlink = new Link(rightwall.body,leftwall.body);

  for(var i = 0; i <=8;i++){
    var x = random(200,600);
    var y = random(-10,140);
    var stone = new Stone(x,y,40,40);      
    stones.push(stone);
    //stones[i].display();
  }


  Composite.add(bridge,leftwall);
  jointlink = new Link(bridge,jointpoint2);


}
function draw() {
  background("#353839");
  Engine.update(engine);


  rightwall.display();
  leftwall.display();
  bridge.show();


    
    for(var i = 0; i <=8;i++){
      stones[i].display();
    }

 
  
  
}
