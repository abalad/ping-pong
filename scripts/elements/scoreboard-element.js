const scoreboard = {
    positionY: 30,
    positionLeftX: GLOBAL_WIDTH / 4,
    positionRightX: GLOBAL_WIDTH / 4 +GLOBAL_WIDTH / 2,
    leftText: '4',
    rightText: '3',
    draw: function () {
        canvasContext.font = 'bold 72px Arial';
        canvasContext.textAlign = 'center';
        canvasContext.textBaseline = 'top';
        canvasContext.fillStyle = GLOBAL_SCOREBOARD_COLOR;
        canvasContext.fillText(this.leftText, this.positionLeftX, this.positionY);
        canvasContext.fillText(this.rightText, this.positionRightX, this.positionY);
    }

}