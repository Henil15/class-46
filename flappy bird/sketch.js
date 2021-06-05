
var PLAY = 1
var END = 0
var gameState=PLAY

var bird,pipe,pipe1,
bronze,diamond,silver,gold,
background,gameover,ground,instruction,
menu,name,ok,neww,ready,scoreboard,score,start,restart

var birdImg,bird1Img,pipeImg,pipe1Img,
bronzeImg,diamondImg,silverImg,goldImg,
backgroundImg,gameoverImg,groundImg,instructionImg,
menuImg,nameImg,okImg,newwImg,readyImg,scoreboardImg,scoreImg,startImg,restartImg

function preload(){
backgroundImg=loadImage("background.png")
birdImg=loadImage("bird2.png")
bird1Img = loadImage("bird1.png")
groundImg=loadImage("ground.jpg")
pipeImg=loadImage("pipe fcedown.png")
pipe1Img=loadImage("pipe fce up.png")
restartImg=loadImage("restart.jpg")
}


function setup(){
createCanvas(500,800)

bird = createSprite(200,500,100,50)
bird.addImage("birdy",birdImg)
bird.addImage("bird 2",bird1Img)
bird.shapeColor = "red"
bird.velocityY =6
bird.scale = 0.3

restart=createSprite(250,400,50,50)
restart.addImage("rest",restartImg)
restart.scale = 3
restart.visible=false

bronze= createSprite(500,200,50,100)
bronze.shapeColor = "red"

silver= createSprite(50,200,50,100)
silver.shapeColor = "red"

gold= createSprite(250,200,50,100)
gold.shapeColor = "red"

diamond= createSprite(500,200,50,100)
diamond.shapeColor = "red"

ground= createSprite(250,800,500,100)
ground.shapeColor = "red"
ground.addImage(groundImg)
ground.scale = 3.3

gameover= createSprite(500,200,50,100)
gameover.shapeColor = "red"

instruction= createSprite(500,200,50,100)
instruction.shapeColor = "red"

ready= createSprite(500,200,50,100)
ready.shapeColor = "red"

scoreboard= createSprite(500,200,50,100)
scoreboard.shapeColor = "red"

score= createSprite(500,200,50,100)
score.shapeColor = "red"

start= createSprite(500,200,50,100)
start.shapeColor = "red"

pipeGroup = new Group();
pipe1Group = new Group();
}


function draw(){
 background(backgroundImg)

 text("x: "+mouseX+"y: "+mouseY,mouseX,mouseY)

bird.collide(ground)

if(gameState===PLAY){

    restart.visible=false

    if(bird.isTouching(ground)){
        console.log("touching ground")
        gameState=END
    }

    if(keyDown("space")){
        bird.velocityY=-6
        bird.changeImage("bird 2",bird1Img)
    }
     bird.velocityY = bird.velocityY+1
    
     if(keyWentUp("space")){
         bird.changeImage("birdy",birdImg)
     }
    
    spawnpipe();
    spawnpipe1();
    
    if(pipeGroup.isTouching(bird)||pipe1Group.isTouching(bird)){
    
      gameState=END
        
    }
    

}
else if(gameState===END){

    pipeGroup.setVelocityXEach(0)
    pipe1Group.setVelocityXEach(0)

    bird.velocityY=0

    restart.visible=true

if(mousePressedOver(restart)&&gameState===END){
    reset();
}

    pipeGroup.setLifetimeEach(-1)
    pipe1Group.setLifetimeEach(-1)
}

 drawSprites();
}

function reset(){
  gameState=PLAY

  pipeGroup.destroyEach()
 pipe1Group.destroyEach()

 restart.visible=false

}

function spawnpipe() {
    if(frameCount % 100 === 0){
        pipe = createSprite(400,50,20,70)
         pipe.velocityX = -3
         pipe.y = Math.round(random(50,150))
         pipe.addImage("pipes",pipeImg)
         pipe.scale = 0.8
pipe.lifetime= 100
         pipeGroup.add(pipe)
    }
}

function spawnpipe1(){
    if(frameCount % 100 === 0){
        pipe1 = createSprite(400,347,20,70)
        pipe1.velocityX = -3
        pipe1.y = Math.round(random(600,750))
        pipe1.addImage("pipess",pipe1Img)
        pipe1.scale = 0.8
pipe1.lifetime=100

        pipe1Group.add(pipe1)
   }
}