let bg_img;
let jas_img;
let jas3_img;
let i = 4;
let j = 0;
let pos_x = 4;
let pos_y = 430;
let pos_x2 = 530;
let pos_y2 = 350;
let pos_x3 = 530;
let pos_y3 = 430;
let lives = 5;
let points = 0;
let jasmine = [[],[], [], [], []];
let maleficent = [];
let fireballs = [];
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
  maleficent_img = loadImage('./images/maleficent.png');
  fireball1_img = loadImage('./images/fireball1.png');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  loadImage('./images/background3.png', img => {
    image(bg_img, 0, 0);
  });
  jasmine[0][0] = new Jasmine(pos_x, pos_y, 101, 210, jas2_img);
  jasmine[0][1] = new Jasmine(pos_x, pos_y, 143, 146, jas3_img);
  jasmine[0][2] = new Jasmine(pos_x, pos_y, 119, 107, jas4_img);
  jasmine[0][3] = new Jasmine(pos_x, pos_y, 119, 107, jas5_img);
  jasmine[0][4] = new Jasmine(pos_x, pos_y, 99, 121, jas4_img);
  jasmine[0][5] = new Jasmine(pos_x, pos_y, 99, 121, jas5_img);
  jasmine[0][6] = new Jasmine(pos_x, pos_y, 108, 156, jas6_img);
  jasmine[1][4] = new Jasmine(pos_x, pos_y, 117, 150, attack_img);
  jasmine[1][3] = new Jasmine(pos_x, pos_y, 150, 147, attack2_img);
  jasmine[1][2] = new Jasmine(pos_x, pos_y, 87, 147, attack3_img);
  jasmine[1][1] = new Jasmine(pos_x, pos_y, 143, 147, attack4_img);
  jasmine[1][0] = new Jasmine(pos_x, pos_y, 133, 167, attack5_img);
  jasmine[2][0] = new Jasmine(pos_x, pos_y, 107, 120, crouch1_img);
  jasmine[2][1] = new Jasmine(pos_x, pos_y, 120, 123, crouch2_img);
  jasmine[2][2] = new Jasmine(pos_x, pos_y, 147, 100, crouch3_img);
  jasmine[2][3] = new Jasmine(pos_x, pos_y, 147, 100, crouch3_img);
  jasmine[2][4] = new Jasmine(pos_x, pos_y, 147, 100, crouch3_img);
  jasmine[3][0] = new Jasmine(pos_x, pos_y, 120, 173, run1_img);
  jasmine[3][1] = new Jasmine(pos_x, pos_y, 143, 150, run2_img);
  jasmine[3][2] = new Jasmine(pos_x, pos_y, 150, 147, run3_img);
  jasmine[3][3] = new Jasmine(pos_x, pos_y, 100, 143, run4_img);
  jasmine[3][4] = new Jasmine(pos_x, pos_y, 169, 192, run5_img);
  jasmine[3][5] = new Jasmine(pos_x, pos_y, 153, 150, run6_img);
  jasmine[4][0] = new Jasmine(pos_x, pos_y, 117, 150, attack_img);
  maleficent[0] = new Maleficent(pos_x2, pos_y2, 191, 240, maleficent_img);
  fireballs[0] = new Fireball(pos_x2, pos_y2, 38, 33, fireball1_img);

  frameRate(5);

}
function draw(){
  image(bg_img, 0, 0);
  textSize(20);
  textFont('Georgia');
  text('Number of lives: ' + lives, 50, 50);
  text('Points: ' + points, 250, 50);

  jasmine[i][j].display(pos_x, pos_y);
  maleficent[0].display(pos_x2, pos_y2);
  fireballs[0].display(pos_x3, pos_y3);
  pos_x3 = pos_x3 - 35;
  if (pos_x3 < 0){
    pos_x3 = 530;
  }
if (lives <= 0){
    textSize(40);
    textFont('Georgia');
    text('Game                Over!', 230, 290);
    lives = 0;
    points = points;
    pos_x3 = posx_2;
    pos_y3 = pos_y2;
} else if (abs(pos_x3 - pos_x) < 10 && abs(pos_y - pos_y3) < 10){
    lives = lives - 1;
}


  if (i == 0){
    pos_y -= 50;
    j += 1;
    if( j > 6){
      i = 4;
      j = 0;
      pos_y += 350;
  }} else if (i == 1){
      pos_x += 20;
      j += 1;
      if( j > 4){
        i = 4;
        j = 0;
  }} else if (i == 2){
      pos_y += 30;
      j += 1;
      if( j > 4){
        i = 4;
        j = 0;
        pos_y -= 150;
  }}else if (i == 3){
      pos_x += 20;
      j += 1;
      if( j > 5){
        i = 4;
        j = 0;
  }
}
  }

function keyPressed(){
  if (keyCode === UP_ARROW){
      i = 0;
      j = 0;
  } else if(keyCode === 88){
    i = 1;
    j = 0;
    if ((pos_x2 - pos_x) < 70){
      points = points + 50;
    }
  } else if(keyCode === DOWN_ARROW){
    i = 2;
    j = 0;
  } else if(keyCode === RIGHT_ARROW){
    i = 3;
    j = 0;
  }

  return false;
  }

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

  }
  display(x, y){
    this.pos.x = x;
    this.pos.y = y;
    image(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)

  }

}
class Maleficent{
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
  }
  display(x, y){
    this.pos.x = x;
    this.pos.y = y;
    image(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
  }

}
class Fireball{
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
  }
  display(x, y){
    this.pos.x = x;
    this.pos.y = y;
    image(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
  }

  }
