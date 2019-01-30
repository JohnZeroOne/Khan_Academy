 
var xPositions = [];
var yPositions = [];
var colors = [(0, 0, 255), (0, 0, 235), (0, 0, 220)];

for (var i = 0; i < 50; i++) {
xPositions.push(i * 15);
yPositions.push(i * 4);
}

draw = function() {
    background(193, 222, 227);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(97, 97, 97);
        ellipse(202, 8, 412, 116);
        fill(0, 149, 255);
        ellipse(xPositions[i], yPositions[i], 8, 8);
        yPositions[i] += 5;
            if (yPositions[i]>400){
            yPositions[i]=0;
            } 
        }
};
