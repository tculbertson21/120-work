



function setup() {
    createCanvas(windowWidth, windowHeight);
    background('rgb(247, 103, 115)');
}


// Creating circles that will span width of screen. Random colors
function draw() {
  for (let x=0; x < windowWidth; x+=50){
    fill(random(255), random(255), random(255));
    ellipse(x, windowHeight, 100, 100);
    for( let y=0; y< windowHeight; y+=50){
      fill(random(255), random(255), random(255));
      ellipse(windowWidth, y, 100, 100);
      for(let i=0; i < windowWidth; i += 50 ){
        fill(random(255), random(255), random(255));
        ellipse(i, 0, 100, 100);
        for(let j=0; j < windowHeight; j+=50){
          fill(random(255), random(255), random(255));
          ellipse(0, j, 100, 100);
        }
      }
    }
  }




}
