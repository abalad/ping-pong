const mouse = {x: 0, y: 0};

canvasElement.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})