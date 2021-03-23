var database;
var gameState = 0;
var playerCount = 0;
var player, game, form;
var bottle, bottleimg;
bottle = createSprite(250,250, 50, 50)

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState();
  game.start();
  bottleimg = loadImage("https://www.pngitem.com/pimgs/m/46-460274_clip-art-milk-bottles-line-art-plastic-bottle.png")
}


bottle.addImage(bottleimg)

function draw(){
  background("Green");
  bottle.display();

    drawSprites();
  
}