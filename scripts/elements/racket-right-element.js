function drawRacketRight() {
    const x = window.innerWidth - GLOBAL_LINE_WIDTH - 10;
    const y = 100;
    const width = GLOBAL_LINE_WIDTH;
    const height = 200;

    canvasContext.fillStyle = '#FFFFFF';
    canvasContext.fillRect(x, y, width, height);
}