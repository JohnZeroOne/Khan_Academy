fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var answer = floor(random(1, 7));

if (answer === 1) {
    fill(255, 0, 0);
    text("My reply is", 176, 200);
    text("NO", 194, 229); 
}
else if(answer === 2) {
    fill(255, 0, 0);
    text("Don't count on it", 158, 236);
}
else if(answer === 3) {
    fill(255, 251, 0);
    text("Ask again later.", 161, 236);
}
else if(answer === 4) {
    fill(0, 255, 4);
    text("As I see it,", 176, 191);
    text("YES", 187, 229);
}
else if(answer === 5) {
    fill(0, 255, 4);
    text("It is certain.", 172, 236);
}
else {
    text("Error, try again", 161, 236);
} 
