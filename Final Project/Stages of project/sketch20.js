let bg_img;
let jas_img;
let jas3_img;
let i = 0;
let jasmine = [];
function preload(){
  bg_img = loadImage('./images/background3.png');
  jas_img = loadImage('./images/jas2.png');
  jas3_img = loadImage('./images/jas3.png');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  loadImage('./images/background3.png', img => {
    image(bg_img, 0, 0);
  });
  jasmine[0] = new Jasmine(100, 110, 101, 210, jas_img);
  jasmine[1] = new Jasmine(100, 110, 143, 146, jas3_img);
  frameRate(24);

}
function draw(){
  image(bg_img, 0, 0);
  //jas.display();
    jasmine[0].display(i, 100);
    i++;

    //jasmine[i].animate();
  }

//}
class Jasmine{
  constructor(init_x, init_y, width, height, img){
    this.pos = {
      x: init_x,
      y: init_y
    };
    this.size = {
      w: width,
      h: height
    };
    this.image = img;
    this.speed = 4;
    this.list_pos = jasmine[0];
    //this.sub_Rect = [
      //[0,0],
      //[59.83, 0],
      //[0,55.16],
      //[59.83,55.16],
      //[0, 59.83],
      //[59.83, 59.83],
      //[0, 114.99],
      //[59.83, 114.99]

    //];

  }
  display(x, y){
    this.pos.x = x;
    this.pos.y = y;
    image(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
    //this.subRect[0], this.subRect[0],
    //this.size.w, this.size.h);
  }
  animateJump(){
    for (let i = 0; i < 20; i++){
      jasmine[0].display(i, 100);

    }
  }
}
