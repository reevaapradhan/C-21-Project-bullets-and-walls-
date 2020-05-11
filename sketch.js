var bullet;
var wall;

var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,331);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(35, 200, 50, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet,wall)){
    //bullet.shapeColor = "red";
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage<10){
      bullet.shapeColor="green";
    }else{
      bullet.shapeColor="white";
    }
    if(damage>10){
      bullet.shapeColor="red";
    }else{
      bullet.shapeColor="white";
    }
    
  }

  drawSprites();
}

function hasCollided(obj1,obj2){
  bulletRightEdge = obj1.x + obj1.width;
  wallLeftEdge = obj2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}