let bg_img;
let jas_img;
let jas3_img;
let i = 0;
let j = 0;
let pos_x = 4;
let pos_y = 430;
let orientation = 0;
let jasmine = [[],[], [], [], []];
function preload(){
  bg_img = loadImage('./images/background3.png');
  jas2_img = loadImage('./images/jas2.png');
  jas3_img = loadImage('./images/jas3.png');
  jas4_img = loadImage('./images/jas4.png');
  jas5_img = loadImage('./images/jas5.png');
  jas6_img = loadImage('./images/jas6.png');
  attack_img = loadImage('./images/attack1.png');
  attack2_img = loadImage('./images/attack2.png');
  attack3_img = loadImage('./images/attack3.png');
  attack4_img = loadImage('./images/attack4.png');
  attack5_img = loadImage('./images/attack5.png');
  crouch1_img = loadImage('./images/crouch1.png');
  crouch2_img = loadImage('./images/crouch2.png');
  crouch3_img = loadImage('./images/crouch3.png');
  run1_img = loadImage('./images/run1.png');
  run2_img = loadImage('./images/run2.png');
  run3_img = loadImage('./images/run3.png');
  run4_img = loadImage('./images/run4.png');
  run5_img = loadImage('./images/run5.png');
  run6_img = loadImage('./images/run6.png');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  loadImage('./images/background3.png', img => {
    image(bg_img, 0, 0);
  });
  jasmine[0][0] = new Jasmine(pos_x, pos_y, 101, 210, jas2_img, 0);
  jasmine[0][1] = new Jasmine(pos_x, pos_y, 143, 146, jas3_img, 0);
  jasmine[0][2] = new Jasmine(pos_x, pos_y, 119, 107, jas4_img, 0);
  jasmine[0][3] = new Jasmine(pos_x, pos_y, 99, 121, jas5_img, 0);
  jasmine[0][4] = new Jasmine(pos_x, pos_y, 108, 156, jas6_img, 0);
  jasmine[1][4] = new Jasmine(pos_x, pos_y, 117, 150, attack_img, 0);
  jasmine[1][3] = new Jasmine(pos_x, pos_y, 150, 147, attack2_img, 0);
  jasmine[1][2] = new Jasmine(pos_x, pos_y, 87, 147, attack3_img, 0);
  jasmine[1][1] = new Jasmine(pos_x, pos_y, 143, 147, attack4_img, 0);
  jasmine[1][0] = new Jasmine(pos_x, pos_y, 133, 167, attack5_img, 0);
  jasmine[2][0] = new Jasmine(pos_x, pos_y, 107, 120, crouch1_img, 0);
  jasmine[2][1] = new Jasmine(pos_x, pos_y, 120, 123, crouch2_img, 0);
  jasmine[2][2] = new Jasmine(pos_x, pos_y, 147, 100, crouch3_img, 0);
  jasmine[3][0] = new Jasmine(pos_x, pos_y, 120, 173, run1_img, 0);
  jasmine[3][1] = new Jasmine(pos_x, pos_y, 143, 150, run2_img, 0);
  jasmine[3][2] = new Jasmine(pos_x, pos_y, 150, 147, run3_img, 0);
  jasmine[3][3] = new Jasmine(pos_x, pos_y, 100, 143, run4_img, 0);
  jasmine[3][4] = new Jasmine(pos_x, pos_y, 169, 192, run5_img, 0);
  jasmine[3][5] = new Jasmine(pos_x, pos_y, 153, 150, run6_img, 0);
  jasmine[4][0] = new Jasmine(pos_x, pos_y, 117, 150, attack_img, 0);

  frameRate(1);

}
function draw(){
  image(bg_img, 0, 0);
  if (keyIsPressed === false){
    i = 4;
    j = 0;

    }


  jasmine[i][j].display(pos_x, pos_y);

  if (i == 3 && orientation == 0){
  pos_x += 100;
  j += 1;
} else if (i == 3 && orientation == 1){
  pos_x -= 100;
  j += 1;
} else if (i < 4){
  j += 1;
}


    //jasmine[i] = jasmine[i + 1];

    //jasmine[i].animate();

}
function keyPressed(){
  if (keyCode === UP_ARROW){
      i = 0;
      j = 0;
      pos_y -= 150;
  } else if(keyCode === 88){
    i = 1;
    j = 0;
    pos_x += 100;
  } else if(keyCode === DOWN_ARROW){
    i = 2;
    j = 0;
  } else if(keyCode === RIGHT_ARROW){
    i = 3;
    j = 0;
  }

  return false;
  }

//}
class Jasmine{
  constructor(init_x, init_y, width, height, img, orientation){
    this.pos = {
      x: init_x,
      y: init_y
    };
    this.size = {
      w: width,
      h: height
    };
    this.orientation = orientation;
    this.image = img;
    this.speed = 4;
    this.list_pos = jasmine[0];

  }
  display(x, y){
    this.pos.x = x;
    this.pos.y = y;
    if (orientation === 0) {
            scale(1,1);
        } else if (orientation === 1) {
            scale(-1,1);
        }
    image(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h, orientation)

  }
  animateJump(){
    for (let i = 0; i < 20; i++){
      jasmine[0].display(i, 100);

    }
  }
}
