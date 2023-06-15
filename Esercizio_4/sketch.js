var sunSize, moonSize;
var sunColor, moonColor;
var transitionProgress = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunSize = width / 6;
  moonSize = width / 8;
}

function draw() {
  var hours = hour();
  var minutes = minute();
  var seconds = second();

  var skyColor = calculateSkyColor(hours);

  background(skyColor);

  var time = hours + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);

  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255);
  text(time, width / 2, height / 2);

  var sunPosition = createVector(width / 2, height / 5);
  var moonPosition = createVector(width / 2, height / 1.3);

  if (hours >= 6 && hours < 18) {
    sunColor = color(255, 255, 0); // Giallo per il sole
    moonColor = color(50); // Grigio per la luna
  } else {
    sunColor = color(150); // Grigio per il sole
    moonColor = color(200); // Grigio per la luna
  }

  var sunAlpha, moonAlpha;

  if (hours < 6 || hours >= 19) {
    sunAlpha = 0;
    moonAlpha = 255;
  } else if (hours >= 6 && hours < 7) {
    sunAlpha = lerp(0, 255, transitionProgress);
    moonAlpha = lerp(255, 0, transitionProgress);
  } else if (hours >= 18 && hours < 19) {
    sunAlpha = lerp(255, 0, transitionProgress);
    moonAlpha = lerp(0, 255, transitionProgress);
  } else {
    sunAlpha = 255;
    moonAlpha = 0;
  }

  fill(sunColor, sunAlpha);
  noStroke();
  ellipse(sunPosition.x, sunPosition.y, sunSize, sunSize);

  fill(moonColor, moonAlpha);
  noStroke();
  ellipse(moonPosition.x, moonPosition.y, moonSize, moonSize);

  if (transitionProgress < 1 && (hours === 6 || hours === 18)) {
    transitionProgress += 0.01;
  } else if (transitionProgress > 0 && (hours === 5 || hours === 19)) {
    transitionProgress -= 0.01;
  }
}

function calculateSkyColor(hours) {
  var skyColor;

  if (hours >= 6 && hours < 8) {
    skyColor = color(135, 206, 250); // Luce blu per l'alba
  } else if (hours >= 8 && hours < 18) {
    var brightness = map(hours, 8, 18, 0, 255);
    skyColor = color(135, 206, 250, brightness); // Blu variabile per il giorno
  } else if (hours >= 18 && hours < 20) {
    skyColor = color(255, 165, 0); // Arancione per il tramonto
  } else {
    var brightness = map(hours, 20, 24, 255, 0);
    skyColor = color(0, 0, 128, brightness); // Blu variabile per la notte
  }

  return skyColor;
}
