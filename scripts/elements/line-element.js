const line = {
    x: GLOBAL_WIDTH / 2 - GLOBAL_LINE_WIDTH / 2,
    y: 0,
    width: GLOBAL_LINE_WIDTH,
    height: GLOBAL_HEIGHT,
    draw: function () {
        canvasContext.fillStyle = GLOBAL_DEFAULT_ELEMENT_COLOR;
        canvasContext.fillRect(this.x,this.y, this.width, this.height);
    }
}