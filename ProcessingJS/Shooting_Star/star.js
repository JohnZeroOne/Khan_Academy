 
var xPos1 = 200;
var yPos1 = 200;
var xPos2 = xPos1 +50;
var yPos2 = yPos1 -152;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos1 -200, yPos1 +191, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    ellipse(104, 150, 5, 5);
    ellipse(277, 232, 5, 5);
    
    xPos1 +=1;
    
    xPos2 -=1;
};

