//let ball;
//let ball2;
let circles = [];
let num_circles = 5

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  //ball = new Ball();
  //ball2 = new Ball();
  for (let i = 0; i < num_circles; i++ ){
    circles.push(new Ball());
  }
}

function draw(){
  background(0);
  //ball.display();
  //ball2.display();
  for(var i=0; i < circles.length; i++){
    circles[i].display();
    circles[i].change_size();
  }

}
class Ball{
   //constructor(size, color){
     //this.size = size;
     //this.color = color;
  constructor(){
    this.size = random(100, 300);
    this.color = color(random(255), random(255), random(255));
  }

   display(){
      fill(this.color);
      ellipse(random(windowWidth), random(windowHeight), 100, 100);
}
  change_size(){
    fill(this.color);
    ellipse(random(windowWidth), random(windowHeight), 300, 300);
}

   }
