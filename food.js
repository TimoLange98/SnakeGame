function Food(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.show = function () {
        stroke(0);
        fill(255, 0, 0);
        rect(this.x, this.y, this.size, this.size);
    }
}