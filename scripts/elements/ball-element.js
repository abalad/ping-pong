function drawBall() {
    const x = 200;
    const y = 300;
    const r = 20;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;

    canvasContext.beginPath();
    canvasContext.arc(x, y, r, startAngle, endAngle, false);
    canvasContext.fill();
}