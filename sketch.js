var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var score = 0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

apple = createSprite(2000,2000,10,10);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();

   fill("black");
  textSize(20);
  text("Score: "+score,325,50);



   var select_sprites = Math.round(random(1,3));

   if (frameCount % 80 === 0) {

     if (select_sprites === 1) {
       createApples();
       }
     if (select_sprites === 2) {
       createOrange();
     }
      if (select_sprites === 3) {
       createRed();
     }
   }

   if(rabbit.collide(apple)){
     score+=5;
    apple.destroy();
   }

  



}

function createApples() {
apple = createSprite (Math.round(random(50,350)),40,10,10);
apple.x= Math.round(random(50,350));
apple.y = 40;
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
