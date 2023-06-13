const racketLeft = {
    y: 0,
    x: GLOBAL_RACKET_GAPX,
    width: GLOBAL_LINE_WIDTH,
    height: 200,
    _move: function () {
        this.y = mouse.y - this.height / 2
    },
    draw: function () {
        canvasContext.fillStyle = GLOBAL_DEFAULT_ELEMENT_COLOR;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);

        this._move();
    }
}