var ball;
var walls = [];
var space = 0;

function setup()  {
  createCanvas(900, 300);
  walls.push(new Wall());
  ball = new Ball();
}

function draw() {

  //sky: sky_blue: #87CEEB
  background(135,206,235);

  //ground: forest_green: #228B22
  fill(34,139,34);
  rect(0, height-40, width, height);

  //wall display
  for(var i = walls.length-1; i>=0; i--)  {
    walls[i].show();
    walls[i].update();
  }

  //total number of walls in canvas
  if (frameCount % 100 == 0) {
    walls.push(new Wall());
  }

  //ball condition
  if (space == 0) {
    ball.ground();
  } else {
    space = ball.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    space = 1;
    space = ball.jump();
  }
}
