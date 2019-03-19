// Create Array with needed strings.
let stringArray = ['Ha', 'Ho', 'Hi']
//Declare the setup function
function setup(){
  //Create a Canvas window width wide and window height high.
  //Set background color to red.
  createCanvas(windowWidth, windowHeight);
  background('red');


}
// Declare the draw function
function draw(){
  // use function to print text all over screen. Along with greeting.
  screentext();

}
// function to make the words Hello World appear in random positions all over the window.
function screentext(){
  text("greeting:" + stringArray, 20, 80);
  text("Hello World!", random(windowWidth), random(windowHeight));
  textSize(34);

}
