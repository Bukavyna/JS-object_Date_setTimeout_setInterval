
function rotateClockHands() {
	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const minutes = currentTime.getMinutes();
	const hours = currentTime.getHours() % 12;

	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.minute-hand');
	const hourHand = document.querySelector('.hour-hand');

	const secondRotation = seconds * 6;
	const minuteRotation = (minutes * 6)/* + (seconds * 0.1)*/;
	const hourRotation = (hours * 30) + (minutes * 0.5);

	secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
	minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
	hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();
