const ball = {
    x: 200,
    y: 300,
    r: 20,
    speed: 5,
    _move: function () {
        this.x += this.speed;
        this.y += this.speed;
    },
    draw: function  () {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasContext.fill();

        this._move();
    }
}