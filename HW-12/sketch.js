
let circles = [];
let num_circles = 10

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  let init_x = 80;
  let init_y = 80;
  for (let i = 0; i < num_circles; i++) {
        circles.push(new Ball(init_x, init_y));
        init_x += 100;
        if (init_x > width) {
            init_x = 80;
            init_y += 100;
}
}
}

function draw(){
  background(0);
  for(var i=0; i < circles.length; i++){
    //circles[i].change_size();
    circles[i].circleCheck(circles, i);
    circles[i].edgeCheck();
    circles[i].move();
    circles[i].display();
  }

}
class Ball{
  constructor(x, y){
    this.size = 100;
    this.color = color(random(255), random(255), random(255));
    this.x = x;
    this.y = y;
    this.deltaX = 10;
    this.deltaY = 10;
  }

   display(){
      fill(this.color);
      ellipse(this.x, this.y, this.size);
}
  //change_size(){
    //fill(this.color);
    //ellipse(random(windowWidth), random(windowHeight), 300, 300);
  //}

  move(){
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  edgeCheck(){
    if (this.x + (this.size/2) >= width || this.x - (this.size/2) <= 0) {
            this.deltaX *= -1;

        }
    if (this.y + (this.size/2) >= height || this.y - (this.size/2) <= 0) {
            this.deltaY *= -1;

        }
    }

  circleCheck(othercircles, myId){
    for (let n = 0; n < othercircles.length; n++) {
            if (n != myId) {
                let d = dist(this.x, this.y, othercircles[n].x, othercircles[n].y);
                let combinedR = this.size/2 + othercircles[n].size/2;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;


                    }
                }
            }
        }
}
