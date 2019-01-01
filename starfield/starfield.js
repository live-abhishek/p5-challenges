const stars = [];
const starsCount = 200;

let speed = 10;

function setup(){
    createCanvas(600, 600);
    for(let i = 0; i < starsCount; i++){
        let star = new Star(width, height);
        stars.push(star);
    }
}

function draw(){
    // speed = map(mouseX, 0, width, 0, 50);
    // Draw all stars wrt center of screen
    translate(0.5*width, 0.5*height);
    background(0);
    for(let i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}