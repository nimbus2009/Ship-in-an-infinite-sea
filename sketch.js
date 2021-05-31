var ship,shipImg;
var sea,seaImg;
var sky,skyImg;

function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
skyImg=loadImage("clouds.png");
}

function setup(){
  createCanvas(400,400);

  sky=createSprite(200,100,50,50);
  sky.addAnimation("sk",skyImg);
  sky.scale=0.25;
  sky.velocityX=-2;

  sea=createSprite(200,300,50,50);
  sea.addAnimation("se",seaImg);
  sea.scale=0.25;
  sea.velocityX=-1;

  ship=createSprite(200,200,50,50);
  ship.addAnimation("sh",shipImg);
  ship.scale=0.3;

  

  
}

function draw() {
  background("white");

  if(sky.position.x<-20) {
    sky.position.x=230;
    sea.position.x=300;
  }

  drawSprites();
 
}