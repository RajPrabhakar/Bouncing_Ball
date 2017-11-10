function Wall() {
  this.bottom = (height/4);
  this.w = 10;
  this.speed = 2;
  this.x = width;

  this.show = function()  {
    noStroke();
    fill(210,105,30);
    rect(this.x, height-this.bottom, this.w, this.bottom-40);
  }

  this.update = function()  {
    this.x -= this.speed;
  }
}
