var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

 car = createSprite(50, 200, 50, 50);
 car.shapeColor = (255);
 
wall = createSprite(1500, 200, 60, 200);
wall.shapeColor = rgb(80, 80, 80);
 
 speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {

car.velocityX = speed;

if (wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;

deform = 0.5 * weight * speed * speed / 22500;

if (deform > 180){
  car.shapeColor = rgb(255, 255, 255);
}

if (deform < 180 && deform > 100){
  car.shapeColor = rgb (230, 230, 0);
}

if (deform < 100){
  car.shapeColor = rgb (0, 255, 0);
}

}
  
  background(0);  
  drawSprites();
  
}