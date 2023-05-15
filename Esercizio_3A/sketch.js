let posX
let posY
let velX
let velY

function setup(){
	createCanvas(1600, 800)
	posX = width/2
	posY = height/2
	velX = random (10,13)
	velY = random (10,13)
	
	background (255,255,255)
}

function draw(){

	noStroke()

	//fill (map(posX, 0, width, 0, 255), map(posY, 0, height, 0, 255),0 )

	const r = (sin(frameCount * 0.011) + 1) * 150
	const g = (sin(frameCount * 0.012) + 1) * 50
	const b = (sin(frameCount * 0.013) + 1) * 200
	fill(r, g, b)

	ellipse (posX,posY, 300,300)

	posX = posX + velX
	posY = posY + velY

	if(posX >= width || posX <= 0) velX = - velX

	if(posY >= height || posY <= 0) velY = - velY
}

function keyPressed(){

	save ("pong.png")
}
