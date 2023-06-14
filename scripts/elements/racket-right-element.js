const racketRight = {
    y: 110,
    x: GLOBAL_WIDTH - GLOBAL_LINE_WIDTH - GLOBAL_RACKET_GAPX,
    width: GLOBAL_LINE_WIDTH,
    height: 200,
    speed: 2,
    _move: function (){
        if(this.y + this.height / 2 < ball.y + ball.r) {
            this.y += this.speed;
        } else {
            this.y -= this.speed;
        }
    },
    speedUp: function () {
        this.speed += 2;
    },
    draw: function () {
        canvasContext.fillStyle = GLOBAL_DEFAULT_ELEMENT_COLOR;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);

        this._move();
    }
}