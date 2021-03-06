var stand;

function setup() {
  createCanvas(800,400);
  
  stand = new Ground(700, 10, 100, 300);

  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(450, 235, 30, 40);

  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
}

function draw() {
  background(255,255,255);  
  
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  
  
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
  
}