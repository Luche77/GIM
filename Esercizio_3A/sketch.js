let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 10); // Crea una "scia" lasciata dalle palle con un basso alpha per un effetto di dissolvenza
  for (let ball of balls) {
    ball.update();
    ball.draw();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, random(40,150), color(random(100, 255), random(100, 255), random(100, 255))));
  if (balls.length > 30) {
    balls.shift(); // Rimuove la palla più vecchia se ce ne sono più di 30 in gioco
  }
}

class Ball {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velX = random(5, 10);
    this.velY = random(5, 10);
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x + this.size / 2 > width || this.x - this.size / 2 < 0) {
      this.velX = -this.velX;
    }
    if (this.y + this.size / 2 > height || this.y - this.size / 2 < 0) {
      this.velY = -this.velY;
    }
  }

  draw() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
