var pillar1,wall1,log;

function setup() {
  createCanvas(800,400);
  pillar1=createSprite(100, 250, 50, 300);
  pillar2=createSprite(700, 250, 50, 300);
  wall1=createSprite(275,300,200,200);
  wall2=createSprite(525,300,200,200);
  log=createSprite(400,240,200,80);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}