function Wall() {
  this.x = width;
  this.rand_y = random(height-85, height-105);
  this.top_y = this.rand_y;
  this.bot_y = height-40;
  this.w = 10;
  this.speed = 3;

  this.show = function()  {
    noStroke();
    //wall: choco_brown: #D2691E
    fill(210,105,30);
    //coords: top_left, top_right, bottom_right, bottom_left
    quad(this.x, this.top_y,
         this.x + this.w, this.top_y,
         this.x + this.w, this.bot_y,
         this.x, this.bot_y);
  }

  this.update = function()  {
    this.x -= this.speed;
  }
}
