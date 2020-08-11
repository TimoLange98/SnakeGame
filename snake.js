function Snake(x, y, size) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.tailLength = 0;
    this.tail = [];

    this.enabled = true;

    this.eat = function (block) {
        if (this.x < block.x || block.x < this.x)
            return false;
        if (this.y < block.y || block.y < this.y)
            return false;

        this.tailLength++;
        return true;
    }

    this.death = function () {
        for (let i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.enabled = false;
            }
        }
    }

    this.setDir = function (dir) {
        if (dir === 0) {
            if (this.ySpeed === -1)
                return;
            this.xSpeed = 0;
            this.ySpeed = -1;
        }
        else if (dir === 1) {
            if (this.xSpeed === 1)
                return;
            this.xSpeed = 1;
            this.ySpeed = 0;
        }
        else if (dir === 2) {
            if (this.ySpeed === 1)
                return;
            this.xSpeed = 0;
            this.ySpeed = 1;
        }
        else if (dir === 3) {
            if (this.xSpeed === -1)
                return;
            this.xSpeed = -1;
            this.ySpeed = 0;
        }
    }

    this.move = function () {
        if (this.enabled) {
            if (this.x < 0 || this.x > width - size
                || this.y < 0 || this.y > height - this.size) {
                this.enabled = false;
                this.xSpeed = 0;
                this.ySpeed = 0;

                if (this.tailLength === 0) {
                    if (this.x < 0)
                        this.x += scl;
                    else if (this.x > width - size)
                        this.x -= scl;
                    else if (this.y < 0)
                        this.y += scl;
                    else if (this.y > height - this.size)
                        this.y -= scl;
                }
            }

            if (this.tailLength === this.tail.length) {
                for (let i = 0; i < this.tail.length - 1; i++) {
                    this.tail[i] = this.tail[i + 1];
                }
            }
            this.tail[this.tailLength - 1] = createVector(this.x, this.y);

            this.x += this.xSpeed * scl;
            this.y += this.ySpeed * scl;
        }
    }

    this.show = function () {
        stroke(255);
        fill(0);
        for (let i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            rect(pos.x, pos.y, this.size, this.size);
        }
        rect(this.x, this.y, this.size, this.size);
    }
}