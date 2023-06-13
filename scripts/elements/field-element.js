const field = {
    width: GLOBAL_WIDTH,
    height: GLOBAL_HEIGHT,
    draw: function () {
        canvasContext.fillStyle = GLOBAL_FIELD_COLOR;
        canvasContext.fillRect(0,0, this.width, this.height);
    }
}