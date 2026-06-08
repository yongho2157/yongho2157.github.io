let breathe = 0, blinkCd = 60, blinkP = 0, winkP = 0;
let blush = false, smile = false;
let pupilOffX = 0, pupilOffY = 0;
let bgR = 235, bgG = 235, bgB = 235;
let earSw = 0, hairSway = 0;
let prevKey = '', prevMousePressed = false;
function setup() {
  createCanvas(600, 400);
  frameRate(30);
}
function draw() {
  background(bgR, bgG, bgB);
  noStroke();
  breathe = sin(frameCount * 0.06) * 1.5;
  earSw = sin(frameCount * 0.08) * 5;
  blinkCd--;
  if (blinkCd <= 0) { blinkP = 12; blinkCd = 60 + floor(random(90)); }
  let eyeL = 1, eyeR = 1;
  if (blinkP > 0) { blinkP--; eyeL = abs(6 - blinkP) / 6; eyeR = eyeL; }
  if (winkP > 0) {
    winkP--;
    let wEye;
    if (winkP >= 15) wEye = map(winkP, 20, 15, 1, 0);
    else if (winkP >= 5) wEye = 0;
    else wEye = map(winkP, 5, 0, 0, 1);
    eyeL = min(eyeL, wEye);
  }
  let tX = constrain(map(mouseX, 0, 600, -4, 4), -4, 4);
  let tY = constrain(map(mouseY, 0, 400, -2, 2), -2, 2);
  pupilOffX = lerp(pupilOffX, tX, 0.12);
  pupilOffY = lerp(pupilOffY, tY, 0.12); hairSway = lerp(hairSway, tX * 1.6, 0.08);
  if (mouseIsPressed && !prevMousePressed) blush = !blush;
  prevMousePressed = mouseIsPressed;
  if (keyIsPressed && key != prevKey) {
    if (key === ' ') winkP = 20;
    else if (key === 'h' || key === 'H') smile = true;
    else if (key === 'n' || key === 'N') { smile = false; blush = false; }
    else if (key === '1') { bgR = 235; bgG = 235; bgB = 235; }
    else if (key === '2') { bgR = 190; bgG = 220; bgB = 240; }
    else if (key === '3') { bgR = 250; bgG = 220; bgB = 225; }
    else if (key === 's' || key === 'S') saveGif('character.gif', 10);
    prevKey = key;
  }
  if (!keyIsPressed) prevKey = '';
  push();
  translate(0, breathe);
  fill(232, 206, 184);
  beginShape();
  vertex(240, 240);
  bezierVertex(234, 273, 228, 303, 225, 340);
  vertex(375, 340);
  bezierVertex(372, 303, 366, 273, 360, 240);
  endShape(CLOSE);
  fill(20, 20, 24);
  beginShape();
  vertex(0, 400); vertex(0, 337);
  bezierVertex(60, 320, 142, 313, 218, 312);
  bezierVertex(237, 312, 248, 313, 252, 320);
  bezierVertex(258, 331, 342, 331, 348, 320);
  bezierVertex(352, 313, 363, 312, 382, 312);
  bezierVertex(458, 313, 540, 320, 600, 337);
  vertex(600, 400);
  endShape(CLOSE);
  fill(235, 209, 187);
  ellipse(147, 172, 51, 48); ellipse(453, 172, 51, 48);
  fill(238, 212, 190);
  beginShape();
  vertex(300, 63);
  bezierVertex(218, 63, 168, 93, 156, 143);
  bezierVertex(147, 190, 171, 230, 220, 255);
  bezierVertex(252, 271, 279, 277, 300, 278);
  bezierVertex(321, 277, 348, 271, 380, 255);
  bezierVertex(429, 230, 453, 190, 444, 143);
  bezierVertex(432, 93, 382, 63, 300, 63);
  endShape(CLOSE);
  fill(38, 25, 22);
  beginShape();
  vertex(162, 190);
  bezierVertex(160, 167, 160, 133, 158, 117);
  bezierVertex(165, 80, 225, 53, 300, 50);
  bezierVertex(375, 53, 435, 80, 442, 117);
  bezierVertex(440, 133, 440, 167, 438, 190);
  bezierVertex(420, 175, 393, 140, 372, 128);
  bezierVertex(351, 119, 327, 99, 300, 93);
  bezierVertex(273, 99, 249, 119, 228, 128);
  bezierVertex(207, 140, 180, 175, 162, 190);
  endShape(CLOSE);
  fill(34, 22, 20);
  beginShape();
  vertex(156, 140);
  bezierVertex(159, 79, 213, 49, 300, 45);
  bezierVertex(387, 49, 441, 79, 444, 140);
  bezierVertex(435, 130, 405, 117, 372, 108);
  bezierVertex(348, 100, 322, 92, 300, 90);
  bezierVertex(278, 92, 252, 100, 228, 108);
  bezierVertex(195, 117, 165, 130, 156, 140);
  endShape(CLOSE);
  fill(48, 32, 28);
  beginShape();
  vertex(288,85);
  bezierVertex(291,83,296,81,300,81); bezierVertex(304,81,309,83,312,85);
  bezierVertex(309,96,306,107,306,123); bezierVertex(304,135,304,143,309,152);
  bezierVertex(303,153,297,153,291,152); bezierVertex(296,143,296,135,294,123);
  bezierVertex(294,107,291,96,288,85);
  endShape(CLOSE);
  fill(30, 19, 18);
  let x=218,y=85,w=36,h=72; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2-4,y+h*.25,x-4+hairSway*.6,y+h*.72,x+hairSway,y+h);bezierVertex(x+4+hairSway*.6,y+h*.72,x+w/2+4,y+h*.25,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=248;y=79;w=33;h=79; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2-4,y+h*.25,x-4+hairSway*.6,y+h*.72,x+hairSway,y+h);bezierVertex(x+4+hairSway*.6,y+h*.72,x+w/2+4,y+h*.25,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=276;y=75;w=30;h=83; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2-4,y+h*.25,x-4+hairSway*.6,y+h*.72,x+hairSway,y+h);bezierVertex(x+4+hairSway*.6,y+h*.72,x+w/2+4,y+h*.25,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=303;y=73;w=30;h=85; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2-4,y+h*.25,x-4+hairSway*.6,y+h*.72,x+hairSway,y+h);bezierVertex(x+4+hairSway*.6,y+h*.72,x+w/2+4,y+h*.25,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=330;y=75;w=30;h=81; let s=15,c=5,tx=x+s+hairSway,ty=y+h; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2+s*.1,y+h*.22,tx-w/2-2,y+h*.6,tx-w/3,ty);bezierVertex(tx-w/3+c,ty+c*.9,tx+w/3+c,ty+c*.9,tx+w/3,ty);bezierVertex(tx+w/2+2,y+h*.6,x+w/2+s*.1,y+h*.22,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=357;y=79;w=30;h=75; s=30;c=7;tx=x+s+hairSway;ty=y+h; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2+s*.1,y+h*.22,tx-w/2-2,y+h*.6,tx-w/3,ty);bezierVertex(tx-w/3+c,ty+c*.9,tx+w/3+c,ty+c*.9,tx+w/3,ty);bezierVertex(tx+w/2+2,y+h*.6,x+w/2+s*.1,y+h*.22,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  x=384;y=85;w=30;h=64; s=45;c=9;tx=x+s+hairSway;ty=y+h; beginShape();vertex(x-w/2,y);bezierVertex(x-w/2+s*.1,y+h*.22,tx-w/2-2,y+h*.6,tx-w/3,ty);bezierVertex(tx-w/3+c,ty+c*.9,tx+w/3+c,ty+c*.9,tx+w/3,ty);bezierVertex(tx+w/2+2,y+h*.6,x+w/2+s*.1,y+h*.22,x+w/2,y);bezierVertex(x+w*.18,y+7,x-w*.18,y+7,x-w/2,y);endShape(CLOSE);
  stroke(55, 35, 28); strokeWeight(4); noFill();
  arc(234, 147, 81, 12, PI+QUARTER_PI*.2, TWO_PI-QUARTER_PI*.2);
  arc(366, 147, 81, 12, PI+QUARTER_PI*.2, TWO_PI-QUARTER_PI*.2);
  noStroke();
  if (eyeL > 0.15) {
    fill(255); ellipse(234, 165, 63, 11 * eyeL);
    fill(35, 25, 20); ellipse(234 + pupilOffX, 165 + pupilOffY, 18, 8 * eyeL);
    fill(0); ellipse(234 + pupilOffX, 165 + pupilOffY, 8, 3 * eyeL);
    fill(255, 255, 255, 200); ellipse(230 + pupilOffX, 163 + pupilOffY, 4, 2 * eyeL);
  } else {
    stroke(55, 35, 28); strokeWeight(2); noFill(); arc(234, 165, 55, 6, 0, PI); noStroke();
  }
  if (eyeR > 0.15) {
    fill(255); ellipse(366, 165, 63, 11 * eyeR);
    fill(35, 25, 20); ellipse(366 + pupilOffX, 165 + pupilOffY, 18, 8 * eyeR);
    fill(0); ellipse(366 + pupilOffX, 165 + pupilOffY, 8, 3 * eyeR);
    fill(255, 255, 255, 200); ellipse(362 + pupilOffX, 163 + pupilOffY, 4, 2 * eyeR);
  } else {
    stroke(55, 35, 28); strokeWeight(2); noFill(); arc(366, 165, 55, 6, 0, PI); noStroke();
  }
  stroke(90, 65, 55, 70); strokeWeight(1.2); noFill();
  if (eyeL > 0.15) arc(234, 165, 63, 13 * eyeL, PI, TWO_PI);
  if (eyeR > 0.15) arc(366, 165, 63, 13 * eyeR, PI, TWO_PI);
  noFill(); stroke(196, 155, 135); strokeWeight(2);
  beginShape();
  vertex(300,167);
  bezierVertex(294,183,291,200,296,215);
  bezierVertex(297,221,304,225,315,227);
  endShape();
  stroke(190, 148, 128, 120);
  arc(288, 228, 22, 5, 0, PI-.1); arc(315, 229, 22, 5, 0, PI-.2);
  noStroke(); fill(176, 116, 108, 90); ellipse(300, 251, 57, 8);
  if (smile) { noStroke(); fill(145, 85, 80); beginShape(); vertex(278, 250); bezierVertex(286, 272, 297, 278, 300, 278); bezierVertex(303, 278, 314, 272, 322, 250); endShape(CLOSE); fill(248, 242, 228); rect(285, 253, 30, 4, 2); }
  stroke(145, 98, 92); strokeWeight(1.5); noFill();
  beginShape();
  if (smile) {
    vertex(273, 244);
    bezierVertex(284, 273, 297, 280, 300, 280);
    bezierVertex(303, 280, 316, 273, 327, 244);
  } else { vertex(273, 251); bezierVertex(285, 254, 297, 255, 300, 255); bezierVertex(303, 255, 315, 254, 327, 251); }
  endShape();
  if (blush) {
    noStroke(); fill(255, 150, 150, 110);
    ellipse(218, 218, 42, 22); ellipse(382, 218, 42, 22);
  }
  noFill(); stroke(210, 210, 215); strokeWeight(3);
  arc(147 + earSw * 0.25, 199, 24, 11, 0, PI+QUARTER_PI);
  noStroke(); fill(225, 225, 230); ellipse(159 + earSw * 1.4, 203 + abs(earSw) * 0.25, 9, 4);
  fill(255, 255, 255, 180); ellipse(140 + earSw * 0.25, 197, 4, 2);
  pop();
}