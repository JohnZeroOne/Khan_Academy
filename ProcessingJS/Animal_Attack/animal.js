 
//demon bunny

var bodyX = 200;
var bodyY = 220;
var bodyW = 88;
var bodyH = bodyW/2;
var eyeSize = 10;
var earSizeX = 10;
var earSizeY = 35;
var mouthSizeX = 20;
var mouthSizeY = 10;

draw = function() {
    background(237, 133, 133);
    fill(255, 251, 140);
    ellipse(bodyX, bodyY, bodyW, 117); // body
    ellipse(bodyX, bodyY-69, bodyH, 40); // face
    fill(255, 0, 0);
    ellipse(190, 146, eyeSize, eyeSize); // L eye
    ellipse(210, 146, eyeSize, eyeSize); // R eye
    ellipse(190, 120, earSizeX, earSizeY); // L ear
    ellipse(210, 120, earSizeX, earSizeY); // R ear
    ellipse(200, 158, mouthSizeX, mouthSizeY); // mouth
    
    eyeSize += 0.01;
    earSizeX += 0.01;
    earSizeY += 0.01;
    mouthSizeX += 0.01;
    mouthSizeY += 0.01;
    
};
