const ball = {
    x: field.width / 2,
    y: field.height / 2,
    r: 20,
    speed: 5,
    directionY: 1,
    directionX: 1,
    _validateEdgesTouched: function () {
        const isTouchedOnTop = this.y - this.r < 0 && this.directionY < 0;
        const isTouchedOnBottom = this.y > field.height - this.r && this.directionY > 0;

        if(isTouchedOnTop || isTouchedOnBottom) {
            this._reverseY(); // Revert position from ball
        }
    },
    _checkPlayerPoint: function () {
        const isTouchedOnRightEdge = this.x > field.width - this.r - racketRight.width - GLOBAL_RACKET_GAPX;
        const isTouchedOnRacket = this.y + this.r > racketRight.y && this.y - this.r < racketRight.y + racketRight.height

        if(isTouchedOnRightEdge) {
            if(isTouchedOnRacket){
                this._reverseX()
            } else {
                scoreboard.increaseHuman();
                this._pointUp();
            }
        }
    },
    _checkComputerPoint: function (){
        const isTouchedOnLeftEdge = this.x < this.r + racketLeft.width + GLOBAL_RACKET_GAPX;
        const isTouchedOnRacket = this.y + this.r > racketLeft.y && this.y - this.r < racketLeft.y + racketLeft.height;

        if(isTouchedOnLeftEdge){
            if(isTouchedOnRacket) {
                this._reverseX()
            } else {
                scoreboard.increaseComputer();
                this._pointUp();
            }
        }
    },
    _calPosition: function (){
        this._validateEdgesTouched();
        this._checkPlayerPoint();
        this._checkComputerPoint();
    },
    _reverseY: function () {
        this.directionY *= -1;
    },
    _reverseX: function () {
        this.directionX *= -1;
    },
    _move: function () {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
    },
    _resetPosition: function () {
        this.x = field.width / 2;
        this.y = field.height / 2;
    },
    _speedUp: function () {
        if(this.speed < GLOBAL_BALL_MAX_SPEED) {
            this.speed += 3;
        }
    },
    _pointUp: function () {
        this._resetPosition();
        this._speedUp();
        racketRight.speedUp()
    },
    draw: function  () {
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasContext.fill();

        this._calPosition();
        this._move();
    }
}