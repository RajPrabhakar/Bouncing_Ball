function Wall() {
  this.top_x = width;
  this.top_y = height - 95;
  this.w = 10;
  this.h = 55;
  this.speed = 3;

  this.show = function()  {
    noStroke();
    //wall: choco_brown: #D2691E
    fill(210,105,30);
    rect(this.top_x, this.top_y, this.w, this.h);
  }

  this.update = function()  {
    this.top_x -= this.speed;
  }
}
