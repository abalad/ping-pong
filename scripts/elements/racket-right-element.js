const racketRight = {
    y: 110,
    x: GLOBAL_WIDTH - GLOBAL_LINE_WIDTH - GLOBAL_RACKET_GAPX,
    width: GLOBAL_LINE_WIDTH,
    height: 200,
    _move: function (){
        this.y = ball.y;
    },
    draw: function () {
        canvasContext.fillStyle = GLOBAL_DEFAULT_ELEMENT_COLOR;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);

        this._move();
    }
}