 
var grass = getImage("cute/GrassBlock");
var brick = getImage("cute/StoneBlock");
var tree = getImage("cute/TreeShort");

background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

//draw bricks
for (var x = 60; x < 320; x += 46) {
    for (var y = 122; y < 344; y += 48) {
    image(brick, x, y, 50, 100); 
    }
}

fill(120, 80, 19);
rect(180, 301, 40, 56);

//draw windows
for (var x = 77; x < 280; x += 95) {
        for (var y = 160; y < 266; y += 72) {
            fill(255, 255, 255);
            rect(x, y, 50, 50);
        }
}
//draw grass
for (var x = 0; x < 400; x += 15) {
    for (var y = 343; y < 400; y += 15) {
        //I dont see how I am meant to use a conditional inside a for loop when it hasn't been taught on this course yet!
        //if (x = 250) {
            //grass = getImage("cute/BrownBlock");
                //else
                    //grass = getImage("cute/GrassBlock");
        //}
    image(grass, x, y, 50, 50);
    }
}

//draw flowers
for (var x = 0; x < 400; x += 90) {
    for (var y = 338; y < 400; y += 40) {
    image(tree, x, y, 50, 50);
    }
}
