function drawRacketRight() {
    const x = window.innerWidth - lineWidth - 10;
    const y = 100;
    const width = lineWidth;
    const height = 200;

    canvasContext.fillStyle = '#FFFFFF';
    canvasContext.fillRect(x, y, width, height);
}