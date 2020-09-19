const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paper1, ball, cover, bin;
var PLAY = 1;
var END = 0;
var gamestate= PLAY;

function setup() {
	createCanvas(1000, 300);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 270, 1000, 10);

  bin = new Dustbin(700, 260);
  bin1 = new Border(700, 260, 100, 10);
	bin2 = new Border(750, 240, 10, 50);
  bin3 = new Border(650, 240, 10, 50);
  
	paper1 = new Paper(100, 10, 70);
	Engine.run(engine);
}

function draw() {
  background(200, 200,255);
  text("Press the up arrow to throw the paper into the bin!", 500, 150);
  ground.display();
  bin.display();
  cover = createSprite(650, 150, 300, 50);
  cover.shapeColor = rgb(200,200,255)
  cover.visible = false;
  Engine.update(engine);
  drawSprites();
  paper1.display();

  if(gamestate===END){
	cover.visible = true;
  }
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW&&gamestate===PLAY){
		gamestate=END;
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:87, y:-87})
	}
}