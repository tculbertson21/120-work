function setup(){
  // create canvas to draw my portrait on
  createCanvas(600, 900);
}
function draw (){
  // set background color
  background('rgb(107, 196, 230)');
  //*Body* make rectangle for body
  push();
  //translate(300, 450);
  noStroke();
  fill('rgb(228, 18, 179)');
  rect(250, 250, 100, 200, 10);
  //line function makes lines for arms
  push();
  stroke(0);
  strokeWeight(10);
  line(350, 330, 400, 400);
  line(250, 330, 200, 400);
  pop();
  // arc function makes hair
  push();
  noStroke();
  fill('rgb(61, 51, 20)');
  arc(300, 220, 120, 200, PI, TWO_PI);
  pop();
  //ellipse function makes the head
  push();
  stroke(0);
  strokeWeight(2);
  fill('rgba(213, 193, 63, 1.0)');
  ellipse(300, 200, 100);
  pop();
  //ellipse function also makes eyes
  push();
  noStroke();
  fill('rgb(6, 77, 150)');
  ellipse(275, 190, 20, 15);
  ellipse(325, 190, 20, 15);
  pop();
  // arc function makes a smile
  push();
  noStroke();
  fill(0);
  arc(300, 190, 80, 90, QUARTER_PI, PI - QUARTER_PI, CHORD);
  pop();
  // other part of hair
  push();
  noStroke();
  fill('rgb(61, 51, 20)');
  arc(300, 170, 100, 50, PI, TWO_PI);
  pop();
  pop();


}
