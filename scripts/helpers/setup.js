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
    scoreboard.draw();
    racketLeft.draw();
    racketRight.draw();
    ball.draw();
}

function animate() {
    window.animateFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(   callback, GLOBAL_FPS);
            }
        )
    })();

    animateFrame(animate);
    draw();
}
