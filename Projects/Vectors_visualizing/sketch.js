function setup() {
  createCanvas(400, 400);
}
let vx1 = 50
let vy1 = -50
let vx2 = 100
let vy2 = -25
function draw() {  
  background(220);
  stroke(0,200,0), line(200, 200, 200 + vx1, 200 + vy1)
  stroke(200,0,0), line(200, 200, 200 + vx2, 200 + vy2)
  stroke(0,0,200), line(200, 200, 200 + vx1+vx2, 200 + vy1+vy2)
}
