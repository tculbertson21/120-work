function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  //ellipse and fill makes green head
  // stroke and strokeWeight define color and weight of strokeWeight
  //mouseX makes ellipse follow mouse coordinates. pmousex is previous mouse coordinates.
  //background refreshes it, so circles do no repeat, just one circle following mouse.
  background('pink')
  noCursor();
  push();
  stroke(0);
  strokeWeight(2);
  fill('rgb(215, 219, 26)');
  ellipse(mouseX, mouseY, pmouseX, pmouseY);
  pop();
  //fill with 0 makes eyes black, ellipse makes them round
  push();
  fill(0)
  ellipse(mouseX/1.5, mouseY/1.5, pmouseX/10, pmouseY/6);
  ellipse(mouseX + 50, mouseY/1.5, pmouseX/10, pmouseY/6);
  pop();
  //fill with 0 makes mouth black, arc makes mouth shape
  push();
  fill(0);
  arc(mouseX + 5, mouseY + 60, pmouseX/2, pmouseY/2, TWO_PI, PI);
  pop();

}
