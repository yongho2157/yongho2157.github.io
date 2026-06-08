let stars = [];
let windows = [];

function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255);

  let starPos = [
    [60, 30], [260, 20], [480, 50], [350, 80], [40, 80],
    [100, 60], [200, 40], [320, 55], [370, 30], [290, 100], [230, 70]
  ];

  for (let p of starPos) {
    stars.push({
      x: p[0],
      y: p[1],
      phase: random(TWO_PI),
      size: random(1.5, 3.5)
    });
  }

  let windowPos = [
    [255, 195, 25, 30], [290, 195, 25, 30], [325, 195, 25, 30],
    [255, 235, 25, 30], [290, 235, 25, 30], [325, 235, 25, 30],
    [100, 220, 18, 22], [126, 220, 18, 22], [152, 220, 18, 22],
    [100, 252, 18, 22], [126, 252, 18, 22], [152, 252, 18, 22],
    [430, 220, 18, 22], [456, 220, 18, 22], [482, 220, 18, 22],
    [430, 252, 18, 22], [456, 252, 18, 22], [482, 252, 18, 22]
  ];

  for (let w of windowPos) {
    windows.push({
      x: w[0],
      y: w[1],
      w: w[2],
      h: w[3],
      phase: random(TWO_PI)
    });
  }
}

function draw() {
  let t = millis() / 1000;

  let sky = lerpColor(
    color(10, 15, 40),
    color(20, 22, 60),
    (sin(frameCount * 0.015) + 1) / 2
  );
  background(sky);

  drawGround();
  drawMoon(t);
  drawStars();
  drawShootingStar(t);
  drawLamp();
  drawBuildings();
}

function drawGround() {
  noStroke();
  fill(30, 20, 15);
  rect(0, 300, 600, 100);
}

function drawMoon(t) {
  let moonX = 500 + cos(t * 0.4) * 3;
  let moonY = 80 + sin(t * 0.4) * 2;
  let pulse = sin(frameCount * 0.04);
  let moonColor = lerpColor(color(230, 235, 255), color(255, 235, 190), (pulse + 1) / 2);

  noStroke();
  fill(200, 210, 255, 35);
  circle(moonX, moonY, 130 + pulse * 12);
  fill(200, 210, 255, 50);
  circle(moonX, moonY, 100 + pulse * 8);
  fill(moonColor);
  circle(moonX, moonY, 75 + pulse * 4);

  fill(200, 205, 230);
  circle(moonX - 15, moonY - 12, 18);
  circle(moonX + 12, moonY + 5, 12);
  circle(moonX - 5, moonY + 12, 10);

  fill(210, 215, 240);
  circle(moonX + 20, moonY - 15, 8);
}

function drawStars() {
  for (let s of stars) {
    let twinkle = (sin(frameCount * 0.08 + s.phase) + 1) / 2;
    stroke(255, 255, 255, 120 + twinkle * 135);
    strokeWeight(s.size + twinkle * 1.5);
    point(s.x, s.y);
  }
}

function drawShootingStar(t) {
  let x = (t * 80) % 720 - 80;
  let y = 55 + sin(t * 1.5) * 10;

  stroke(255, 245, 180, 180);
  strokeWeight(3);
  line(x, y, x - 35, y + 15);

  noStroke();
  fill(255, 245, 180);
  circle(x, y, 6);
}

function drawLamp() {
  let glow = (sin(frameCount * 0.12) + 1) / 2;
  let lampColor = lerpColor(color(255, 220, 100), color(255, 160, 70), glow);

  stroke(180, 175, 200);
  strokeWeight(3);
  line(30, 300, 30, 190);
  line(30, 190, 60, 190);
  line(60, 190, 60, 200);

  noStroke();
  fill(red(lampColor), green(lampColor), blue(lampColor), 35);
  circle(60, 210, 50 + glow * 18);
  fill(red(lampColor), green(lampColor), blue(lampColor), 65);
  circle(60, 210, 30 + glow * 8);
  fill(lampColor);
  circle(60, 210, 14 + glow * 3);
}

function drawBuildings() {
  noStroke();

  fill(60, 50, 80);
  rect(240, 180, 120, 120);
  fill(80, 65, 100);
  triangle(240, 180, 300, 130, 360, 180);

  fill(45, 38, 60);
  rect(90, 210, 90, 90);
  rect(420, 210, 90, 90);

  fill(65, 55, 85);
  triangle(90, 210, 135, 163, 180, 210);
  triangle(420, 210, 465, 163, 510, 210);

  for (let i = 0; i < windows.length; i++) {
    let w = windows[i];
    let change = (sin(frameCount * 0.04 + w.phase) + 1) / 2;
    let c = lerpColor(color(30, 25, 35), color(255, 200, 80), change);
    fill(c);
    rect(w.x, w.y, w.w, w.h);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveGif("night_city_animation", 5);
  }
}
