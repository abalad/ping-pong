function drawScoreboard() {
    const positionY = 30;
    const positionLeftX =  window.innerWidth / 4;
    const positionRightX =  window.innerWidth / 4 + window.innerWidth / 2;

    canvasContext.font = 'bold 72px Arial';
    canvasContext.textAlign = 'center';
    canvasContext.textBaseline = 'top';
    canvasContext.fillStyle = '#01341D';

    canvasContext.fillText(3, positionLeftX, positionY);
    canvasContext.fillText(3, positionRightX, positionY);
}