"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;
	}

	if (d == 0) {
		arr.push(-b / (2 * a));
		return arr;
	}

	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = percent / 100 / 12;

	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
	let totalPayment = monthlyPayment * countMonths;

	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;

	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

}
