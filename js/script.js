//сложение случайных чисел
let aMin = 6,
	aMax = 9,
	randA = aMin + Math.floor(Math.random() * (aMax - aMin + 1)),
	bMin = 2,
	bMax = 5,
	randB = bMin + Math.floor(Math.random() * (bMax - bMin + 1)),

	firstNumber = document.getElementsByClassName('first-number')[0],
	secondNumber = document.getElementsByClassName('second-number')[0],
	result = document.getElementsByClassName('result')[0],
	inputResult = document.querySelector('input[name=result]'),

	firstInput = document.getElementsByClassName('first-input')[0],
	secondInput = document.getElementsByClassName('second-input')[0],
	inputDiv = document.querySelector('.input-div'),
	reg = /[\D,+.]/ig,
	sum = randA + randB;

if (sum >= 11 && sum <= 14 ) {
firstNumber.textContent = randA;
secondNumber.textContent = randB;
result.textContent = '?';
//линейка
const startY = 120;
//радиус 
const arcAngle = Math.PI / 6;
//длина первого канваса
const canvasWidth = 780;
//шаг 
const stepX = canvasWidth / 20;
//длина стрелки
const arrowLength = 20;
//угол стрелки
const arrowAngle = Math.PI / 12;
const arrowLean = Math.PI / 50;

function drawArrow(ctx, x, y, length, angle) {
	ctx.moveTo(x, y);
	//наклон стрелки
	const angle1 = 3 * Math.PI / 2 - arcAngle - angle - arrowLean;

	const x1 = -15;
	const y1 = -13;
	ctx.lineTo(x + x1, y + y1);
	ctx.moveTo(x, y);

	const angle2 = 3 * Math.PI / 2 - arcAngle + angle - arrowLean;
	const x2 = -6;
	const y2 = -18;
	ctx.lineTo(x + x2, y + y2);
}

function drawArcWithArrow(num, offset) {
	const halfWidth = num / 2 * stepX;

	const radius = halfWidth / Math.cos(arcAngle);

	const centerX = halfWidth;

	const h = halfWidth * Math.tan(arcAngle);
	const centerY = startY + h;

	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(centerX + offset * stepX, centerY, radius, arcAngle - Math.PI, -arcAngle)

	drawArrow(ctx, (num + offset) * stepX, startY, arrowLength, arrowAngle);

	ctx.lineWidth = 2;
    ctx.strokeStyle = "red"; 
	ctx.stroke();
}

drawArcWithArrow(randA, 0);

	firstInput.addEventListener('change', () => {
		if (firstInput.value == randA) {
			firstInput.style.border = 'none';
			firstNumber.style.background = ''
			firstInput.style.color = '#000';
			firstInput.disabled = "disabled";
			secondInput.style.display = 'inline-block';
			drawArcWithArrow(randB, randA);
		} else if (firstInput.value.match(reg)) {
			firstInput.value = '';
		} else {
			firstInput.style.color = 'red';
			firstNumber.style.background = 'yellow'
		}
	});

	secondInput.addEventListener('change', () => {
		if (secondInput.value == randB) {
			secondInput.style.border = 'none';
			secondNumber.style.background = '';
			secondInput.style.color = '#000';
			secondInput.disabled = "disabled";
			result.textContent = '';
			inputResult.style.display = 'inline-block'
		} else if (secondInput.value.match(reg)) {
			secondInput.value = '';
		} else {
			secondInput.style.color = 'red';
			secondNumber.style.background = 'yellow';
		}
	});

	inputResult.addEventListener('change', () => {
		if (inputResult.value == sum) {
			inputResult.style.border = 'none';
			inputResult.style.color = '#000';
			inputResult.disabled = 'disabled'
		} else if (inputResult.value.match(reg)) {
			inputResult.value = ''
		} else {
			inputResult.style.color = 'red';
		}
	});

} else {
window.location.reload()
}
	


	