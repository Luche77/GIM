function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	snowflake.style.left = Math.random() * window.innerWidth + 'px';
	snowflake.style.animationDelay = Math.random() * 5 + 's';
	document.body.appendChild(snowflake);
	setTimeout(() => {
		snowflake.remove();
	}, 5000);
}

setInterval(createSnowflake, 100);
