// 最終課題を制作しよう
let x, y;
function setup() {
  createCanvas(400, 400);
  x = width / 4;
  y = height / 4;
  noStroke();
}

function draw() {
  background(160, 192, 255);
  fill(255, 255, 255);
  ellipse(200, 200, 400);
  fill(0);

  for (let i = 4; i < 16; i++) {
    rect(i * 20, i * 20, 20, 20);
  }
  for (let i = 4; i < 18; i++) {
    rect(i * 20, (i - 2) * 20, 20, 20);
  }
  for (let i = 2; i < 16; i++) {
    rect(i * 20, (i + 2) * 20, 20, 20);
  }
  for (let i = 4; i < 17; i++) {
    rect(i * 20, (20 - i) * 20, 20, 20);
  }
  for (let i = 6; i < 19; i++) {
    rect((20 - i) * 20, (i - 4) * 20, 20, 20);
  }
  for (let i = 6; i < 17; i++) {
    rect((20 - i) * 20, (i - 2) * 20, 20, 20);
  }
  rect(x, y, 20, 20);
  x += 2;
  y -= 2;
  if (x > width) { x = 0; }
  else if (x < 0) { x = width; }
  if (y > height) { y = 0; }
  if (y < 0) { y = height; }
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
