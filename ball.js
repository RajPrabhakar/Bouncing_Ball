function Ball() {
  this.x = 100;
  this.y = height-50;
  this.pos = 0;
  this.acc = 0.032;
  this.vel = this.acc;
  this.step = 4.2;
  this.force = this.step;

  this.show = function()  {
    fill(255,0,0);
    ellipse(this.x, this.y, 20, 20);
  }

  this.jump = function() {
    this.force -= this.vel;
    this.y -= this.force;

    if(this.y <= 180) {
      this.force = -this.step;
      this.vel = -this.acc*2.5;
    }

    if(this.y >= height-50) {
      this.force = this.step;
      this.vel = this.acc*2.5;
    }
  }
}
