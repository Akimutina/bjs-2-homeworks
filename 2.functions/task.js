// Задание 1
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let min = (Math.min(...arr));
		let max = (Math.max(...arr));
		let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
		let avg = +(sum / arr.length).toFixed(2);
    return {
			min: min,
			max: max,
			avg: avg
		};
	}
}

// Задание 2
function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return getArrayParams(...arr).max - getArrayParams(...arr).min;
	}
}

function differenceEvenOddWorker(...arr) {
	var sumEvenElement = 0;
	var sumOddElement = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		var sumEvenElement = 0;
		var countEvenElement = 0;

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement = sumEvenElement + arr[i];
				countEvenElement = countEvenElement + 1;
			}
		}
		return sumEvenElement / countEvenElement;
	}
}

// Задача 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
    const arr = arrOfArr[i];
		let workerResult = func(...arr);

		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}
