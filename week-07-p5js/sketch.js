var width;
var height;

function setup() {
  width = 400;
  height = 400;
  
  createCanvas(width, height);
  background(200);
}


function mouseClicked() {
  var randomX = random(0, width);
  var randomY = random(0, height);
  
  ellipse(randomX, randomY, 80, 80);
}

function keyPressed() {
  width += 10;
  height += 10;
  
  resizeCanvas(width, height, false);
  background(200);
}