 
background(130, 226, 255);
var bodyLength = 128;

var drawFish = function(centerX, centerY, bodyLength2, bodyHeight, bodyColor, eyeColor, tailWidth){

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(eyeColor);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
};

drawFish(200, 100, 118, 74, color(162, 0, 255), color(0, 0, 0), bodyLength/1);
drawFish(266, 226, 69, 46, color(193, 120, 235), color(3, 255, 37), bodyLength/4);
drawFish(116, 256, 34, 75, color(219, 13, 109), color(48, 51, 209), bodyLength/7);
drawFish(149, 163, 140, 17, color(20, 179, 62), color(122, 28, 176), bodyLength/12);
drawFish(332, 322, 113, 116, color(226, 235, 123), color(255, 255, 255), bodyLength/3);
