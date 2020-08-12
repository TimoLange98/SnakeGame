var snake;
var dir;
var size;

var block;
var eaten = true;

var scl = 20;

function setup() {
    createCanvas(600, 600);
    frameRate(10);

    size = scl;
    snake = new Snake(15 * scl, 15 * scl, size);
}

function draw() {
    background(51);
    snake.show();
    snake.setDir(dir);
    snake.move();
    snake.death();

    if (eaten) {
        block = randomBlock();
        eaten = false;
    }
    block.show();

    if (snake.eat(block))
        eaten = true;
}

function randomBlock() {
    var x = floor(random(0, 30));
    var y = floor(random(0, 30));
    var b = new Food(x * scl, y * scl, size)
    return b;
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            dir = dir === 2 ? dir : 0;
            break;

        case RIGHT_ARROW:
            dir = dir === 3 ? dir : 1;
            break;

        case DOWN_ARROW:
            dir = dir === 0 ? dir : 2
            break;

        case LEFT_ARROW:
            dir = dir === 1 ? dir : 3;
            break;

        case ESCAPE:
            reset();
            break;
    }
}

function reset(){
    snake = new Snake(15 * scl, 15 * scl, size);
    dir = null;
    block = null;
    eaten = true;
}