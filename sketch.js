var shooter;

function setup(){
  createCanvas(1000,600)
  shooter = createSprite(500,300,20,20)

}
function draw(){
  background (0)
  shooter.velocityY = 0;
  shooter.velocityX = 0;
  spawnZombies();


  if(keyDown('UP_ARROW')){
    shooter.velocityY = -3
  }
  if(keyDown('DOWN_ARROW')){
    shooter.velocityY = 3;
  }
  if(keyDown('LEFT_ARROW')){
    shooter.velocityX = -3
  }
  if(keyDown('RIGHT_ARROW')){
    shooter.velocityX = 3;
  }
  drawSprites();
}

function spawnZombies(){
   if(frameCount % 60 === 0){
     var zombie = createSprite(600,10,20,20);
     zombie.x = Math.round(random(800,200))
     zombie.velocityY = 3;
   }
}