
var bullet,wall,speed,thickness,weight;



function setup() {
  createCanvas(1000,400);
   bullet =createSprite(10, 200, 30,8);
   wall = createSprite(950,200,60,140);
   wall.width = thickness;
   thickness = random(15,108)
   speed = random(200,310);
   bullet.velocityX = speed;
   weight = random(30,52);
}

function draw() {
  background(255,255,255);  
 
console.log(bullet.velocityX);

if( hasCollided(bullet,wall)){
bullet.velocityX = 0;

var damage = 0.5 * speed * speed * weight / (thickness * thickness * thickness);

if(damage > 10){
  wall.shapeColor= color(255,0,0);
}

if(damage<10){
  wall.shapeColor= color(0,255,0);
}




}

  
          
  drawSprites();
}


function hasCollided(lbullet , lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){
  return true
}


  return false;

  
}