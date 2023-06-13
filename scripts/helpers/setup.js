const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

function setup() {
    canvasElement.width = GLOBAL_WIDTH;
    canvasElement.height = GLOBAL_HEIGHT;

    canvasContext.width = GLOBAL_WIDTH;
    canvasContext.height = GLOBAL_HEIGHT;
}

function draw() {
    field.draw();
    line.draw();

    drawRacketLeft();
    drawRacketRight();
    drawBall();
    drawScoreboard();
}
