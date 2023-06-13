const ball = {
    x: 0,
    y: 0,
    r: 20,
    speed: 5,
    directionY: 1,
    directionX: 1,
    _calPosition: function (){
        if(
            ( this.y - this.r < 0 && this.directionY < 0 ) ||
            ( this.y > field.height - this.r && this.directionY > 0)
        ) {
            this._reverseY(); // Revert position from ball
        }
    },
    _reverseY: function () {
        this.directionY *= -1;
    },
    _reverseX: function () {
        this.directionX *= -1;
    },
    _move: function () {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
    },
    draw: function  () {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasContext.fill();

        this._calPosition();
        this._move();
    }
}