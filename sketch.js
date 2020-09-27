var shark, sharkIMG, x, y, fishSense, score;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	sharkIMG = loadImage('shark.png');
	fish1IMG = loadImage('fish1.png');
	fish2IMG = loadImage('fish2 (2).png');
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	shark = createSprite(400, 350);
	shark.addImage('fghjkl', sharkIMG);
	shark.scale = 0.3;

	fish1 = createSprite(700, 200);
	fish1.addImage('ertyehdyujf', fish1IMG);
	fish1.scale = 0.3;


	fish2 = createSprite(300, 200);
	fish2.addImage('ertyehdyujf', fish2IMG);
	fish2.scale = 0.15;

	score = 0; 

	Engine.run(engine);

	x = shark.x;
	y = shark.y;
  
}


function draw() {
  rectMode(CENTER);
  background('#006A94');
  
  drawSprites();

  fill('white');
  text(score, 10, 20);

  if(shark.collide(fish1))
  {
	fish1.destroy();
	score = score + 1;
  }

  
  if(shark.collide(fish2))
  {
	fish2.destroy();
	score = score + 1;
  }

  if(keyCode === 38)
  {
	shark.y = shark.y - 3;
  }
  else if(keyCode === 40)
  {
	shark.y = shark.y + 3;
  }
  else if(keyCode === 37)
  {
	shark.x = shark.x - 3;
  }

  else if(keyCode === 39)
  {
	  shark.x = shark.x + 3;
  }
  else{
	  shark.x = shark.x;
	  shark.y = shark.y;
  }
  
}
 



