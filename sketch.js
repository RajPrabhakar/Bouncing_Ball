var ball;
var walls = [];
var space = 0;
var score = 0;
var frame = 1;
var interval;

function setup()  {
  createCanvas(900, 300);
  walls.push(new Wall());
  ball = new Ball();
  interval = floor(random(70, 110));
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

    //ball hit
    if (ball.ball_y+8 >= walls[i].top_y)  {
      if ((ball.x+8 > walls[i].x) && (ball.x+8 < walls[i].x+walls[i].w))  {
        console.log('hit');
        frameRate(0);
      }
    }
  }

  //total number of walls in canvas
  if (frame % interval == 0) {
    walls.push(new Wall());
    interval = floor(random(70, 110));
    frame = 0;
  }
  frame ++;

  //score card
  if (frameCount % 10 == 0) {
    score ++;
  }
  fill(255);
  textSize(30);
  text(score, 800, 50);

  //ball condition
  if (space == 0) {
    ball.ground();
  } else {
    space = ball.jump();
  }
}

//when spacebar pressed
function keyPressed() {
  if (key == ' ') {
    space = 1;
    space = ball.jump();
  }
}

//when touched
function touchStarted() {
  space = 1;
  space = ball.jump();
  return false;
}
