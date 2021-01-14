
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,350)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  var survivaltime=0
  
  
  ground=createSprite(200,350,1000,10);
  ground.velocityX=-4
  
  console.log(ground.x)
  bananaGroup=new Group();
  obstacleGroup=new Group();

}

function draw() {
  
  background("lightblue")
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivaltime,100,50)
  
  
  
      
        if (ground.x < 0){
    ground.x = ground.width/2;}
  if(keyDown("space")&&monkey.y >= 100){
    monkey.velocityY=-13
  }

  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
   if (frameCount % 100   === 0){
   var obstacle = createSprite(350,350,10,40);
   obstacle.velocityX = -6;
obstacle.addImage("obstacle",obstaceImage)
   
    // //generate random obstacles
    var rand = Math.round(random(1,6));
     
     
        //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
   
   //adding obstacles to the grouadd(obstacle);
    }
   
    
 

        
      
 drawSprites(); 
  fruit();
}

function fruit(){
  if (frameCount % 80 === 0){
var banana = createSprite(200,200,10,10)
banana.scale=0.1
banana.addImage("banana",bananaImage);
 banana.velocityX=-6
    var rand=Math.round(random(12,150));
    banana.lifetime=100
    bananaGroup.add(banana)
    
                        }
}