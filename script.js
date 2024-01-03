
/*Mechanical watch <!--Start-->*/

function rotateClockHands() {
	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const minutes = currentTime.getMinutes();
	const hours = currentTime.getHours() % 12;

	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.minute-hand');
	const hourHand = document.querySelector('.hour-hand');

	const secondRotation = seconds * 6;
	const minuteRotation = (minutes * 6) + (seconds * 0.1);
	const hourRotation = (hours * 30) + (minutes * 0.5);

	secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
	minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
	hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();


/*Mechanical watch <!--End-->*/

/*-----------------------------------*/
/*-----------------------------------*/

/*Timer Stopwatch <!--Start-->*/

/*Timer <!--Start-->*/

setInterval(() => {
	let date = new Date();
	let day = date.getUTCDate();
	let month = date.getUTCMonth() + 1;
	let year = date.getUTCFullYear();
	if (day < 10) day = '0' + day;
	if (month < 10) month = '0' + month;
	document.querySelector('.date').innerHTML = `${day} : ${month} : ${year}`
});

setInterval(() => {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	document.querySelector('.time').innerHTML = `${hours} : ${minutes} : ${seconds}`
});


/*Timer <!--End-->*/
/*-----------------------------------*/
/*Stopwatch <!--Start-->*/


	let btnStart = document.getElementById('btn_start');
	let btnLoop	= document.getElementById('btn_loop');
	let btnStop	= document.getElementById('btn_stop');
	let btnReset = document.getElementById('btn_reset');
	let showTimer = document.getElementById('show_timer');

	let hours =0;
	let minutes =0;
	let seconds =0;
	let interval =0;

function updateTime () {
	seconds++;
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes === 60) {
		hours++;
		minutes = 0;
	}
	showTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

btnStart.addEventListener('click', () => {
	interval = setInterval(updateTime, 1000);
	btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
	clearInterval(interval);
	btnStart.disabled = false;
	btnStop.disabled = true;
});

btnReset.addEventListener('click', () => {
	clearInterval(interval);
	hours = 0;
	minutes = 0;
	seconds = 0;
	showTimer.textContent = '00:00:00';
	showStopwatch.textContent = '';
	btnStart.disabled = false;
});

let showStopwatch = document.getElementById('show_stopwatch');

btnLoop.addEventListener('click', () => {
	showStopwatch.textContent += showTimer.textContent + '\n';
});


	/*Stopwatch <!--End-->*/
/*-----------------------------------*/
	/*Countdown <!--Start-->*/


let showTimeStart = document.getElementById('show_time_start');
let btnPlus = document.getElementById('btn_plus');
let btnMinus = document.getElementById('btn_minus');

let countdownStart;
let countdownEnd;
let countdownStop = 0;
let countdownResult = 0;
let countdownSet = 1;
let showTime = +showTimeStart.textContent;
let countdownInterval;

btnPlus.addEventListener('click', () => {
	showTimeStart.textContent = ++showTime;
	if (showTime < 10)
		showTime = '0' + showTime;
	countdownSet = 1;
	countdownResult= 0;
	stopTimers();
});

btnMinus.addEventListener('click', () => {
	showTimeStart.textContent = showTime <= 0
		? 0
		: --showTime;
	if (showTime < 10)
		showTimeStart.textContent = '0' + showTime;
	countdownSet = 1;
	countdownResult = 0;
	stopTimers();
});

let btnStartCount = document.getElementById('btn_start_countdown');
let btnStopCount = document.getElementById('btn_stop_countdown');
let btnResetCount = document.getElementById('btn_reset_countdown');
let showCount = document.getElementById('show_countdown');

btnStartCount.onclick = function() {
	countdownResult = countdownStop ? countdownStop : showTime * 60 * 1000;
	if(!countdownStop || countdownSet) {
		showCount.textContent = showTime + ':00';
		countdownStop = countdownResult;
		countdownSet = 0;
	}
	countdownStart = new Date().getTime();
	countdownInterval = setInterval(timer, 1000);
	btnStartCount.disabled = true;
}

function timer () {
	countdownEnd = new Date().getTime();
	countdownResult = countdownStop - (countdownEnd - countdownStart);
	let minute = Math.floor((countdownResult % (1000 * 60 * 60 ))/(1000 * 60));
	let second = Math.floor((countdownResult % (1000 * 60 ))/1000);
	if (minute < 10) minute = '0' + minute;
	if (second < 10) second = '0' + second;
	showCount.textContent = `${minute}:${second}`
	if(countdownResult <= 0) {
		stopTimers();
		showCount.textContent = '00:00';
	}
}

btnStopCount.addEventListener('click', stopTimers);

function stopTimers() {
	clearInterval(countdownInterval);
	countdownStop = countdownResult;
	btnStartCount.disabled = false;
}

btnResetCount.onclick = function() {
	stopTimers();
	countdownResult = countdownStop = 0;
	showCount.textContent = '00:00';
}

  /*Countdown <!--End-->*/
