function Ball() {
  this.x = 100;
  this.y = 250;
  this.maxHeight = 80;
  this.height = this.y;
  this.jumpVal = 0;
  this.theta = 0;
  this.speed = 3;
  angleMode(DEGREES);

  this.ground = function()  {
    //ball: red: #FF0000
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }

  this.jump = function() {
    //ball jumps
    this.theta += this.speed;
    this.jumpVal = this.maxHeight * abs(sin(this.theta));
    this.height -= this.jumpVal;

    //ball: red: #FF0000
    fill(255, 0, 0);
    ellipse(this.x, this.height, 20, 20);
    this.height = this.y;

    //ball reaches ground
    if (this.theta % 180 == 0)  {
      this.theta = 0;
      return 0;
    } else {
      return 1;
    }
  }
}
