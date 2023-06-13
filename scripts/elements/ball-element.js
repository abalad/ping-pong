const ball = {
   x: 200,
   y: 300,
   r: 20,
   startAngle: 0,
   endAngle: 2 * Math.PI,
   draw: function  () {
    canvasContext.beginPath();
    canvasContext.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
    canvasContext.fill();
   }
}