const scoreboard = {
    positionY: 30,
    positionLeftX: GLOBAL_WIDTH / 4,
    positionRightX: GLOBAL_WIDTH / 4 +GLOBAL_WIDTH / 2,
    human: 0,
    computer: 0,
    increaseHuman: function () {
        this.human ++;
    },
    increaseComputer: function () {
        this.computer ++;
    },
    draw: function () {
        canvasContext.font = 'bold 72px Arial';
        canvasContext.textAlign = 'center';
        canvasContext.textBaseline = 'top';
        canvasContext.fillStyle = GLOBAL_SCOREBOARD_COLOR;
        canvasContext.fillText(this.human, this.positionLeftX, this.positionY);
        canvasContext.fillText(this.computer, this.positionRightX, this.positionY);
    }

}