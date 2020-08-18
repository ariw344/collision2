var bullet, wall, speed, weight, deformation, thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 25, 25);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);
  speed = random(223, 321);
  weight =  random(30, 52);
  thickness = random(22, 83);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    bullet.x = bullet.x - 20;
    deformation = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
    if (deformation < 10) {
      bullet.shapeColor = "green";
    }
    else {
      bullet.shapeColor = "red";
    }
  }
}