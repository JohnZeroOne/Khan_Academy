 
var textTitle = "Winston-O's!";
var textHead = "A tasty start to the day";
var textAll = "Full of fiber, Rich in Iron, One of your 5 a day, Tastes great!";

var howBig = 1;

var drawWinW1 = 200;
var drawWinH1 = 200;

draw = function() {
    
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    text(textTitle, 10, 30);
    textSize(17);
    text(textHead, 10, 67);
    fill(0, 255, 9);
    howBig = howBig +0.1;
    textSize(howBig);
    text(textAll, 11, 101);
    
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, drawWinW1, drawWinH1);
    fill(207, 207, 207);
    ellipse(mouseX, mouseY, drawWinW1 *0.8, drawWinW1 *0.8);
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, drawWinW1 *0.7, drawWinW1 *0.7);
    
};
