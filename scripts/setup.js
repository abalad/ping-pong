const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

function setup() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    canvasContext.width = window.innerWidth;
    canvasContext.height = window.innerHeight;
}
