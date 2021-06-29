
function setDate() {
}

const second_hand = document.getElementsByClassName('second-hand');
const minute_hand = document.getElementsByClassName('min-hand');
const hour_hand = document.getElementsByClassName('hour-hand');

function rotateHand() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	second_angle = (seconds / 60) * 360 + 90;
	minute_angle = (minutes / 60) * 360 + 90;
	hour_angle = (hours / 24) * 360 + 90;

	second_hand[0].style.transform = `rotate(${second_angle}deg)`;
	minute_hand[0].style.transform = `rotate(${minute_angle}deg)`;
	hour_hand[0].style.transform = `rotate(${hour_angle}deg)`;

}
setInterval(rotateHand, 1000);

