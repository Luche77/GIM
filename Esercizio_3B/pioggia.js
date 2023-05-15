function createRaindrop() {
	const raindrop = document.createElement('div');
	raindrop.classList.add('rain');
	raindrop.style.left = Math.random() * window.innerWidth + 'px';
	document.body.appendChild(raindrop);
	setTimeout(() => {
		raindrop.remove();
	}, 2000);
}

setInterval(createRaindrop, 100);
