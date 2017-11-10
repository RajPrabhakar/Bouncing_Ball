var ball;
var walls = [];
var jump = 0;

function setup()  {
  createCanvas(window.innerWidth*3/4, window.innerHeight/2);
  walls.push(new Wall());
  ball = new Ball();
}

function draw() {
  background(135,206,235);
  fill(34,139,34);
  rect(0, height-40, width, height);
  for(var i = walls.length-1; i>=0; i--)  {
    walls[i].show();
    walls[i].update();
  }
  ball.show();

  if (frameCount % 100 == 0) {
    walls.push(new Wall());
  }

  if (this.jump == 1)  {
    ball.jump();
  }

  if (ball.y >= height-50)  {
    this.jump = 0;
  }
}

function keyPressed() {
  if (key == ' ') {
    this.jump = 1;
  }
}

function Land() {
  this.ground = function()  {
    this.jump = 0;
  }
}
