function drawLine() {
    const x = window.innerWidth / 2 - lineWidth / 2;
    const y = 0;
    const width = lineWidth;
    const height = window.innerHeight;

    canvasContext.fillStyle = '#FFFFFF';
    canvasContext.fillRect(x, y, width, height);
}