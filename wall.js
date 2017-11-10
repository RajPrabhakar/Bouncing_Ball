function Wall() {
  this.bottom = (height/4);
  this.w = 10;
  this.speed = 2;
  this.x = width;

  this.show = function()  {
    fill(255);
    rect(this.x, height-this.bottom, this.w, this.bottom-40);
  }

  this.update = function()  {
    this.x -= this.speed;
  }
}
