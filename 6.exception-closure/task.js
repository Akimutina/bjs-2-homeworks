// Заддача 1
function parseCount(item) {
	if (Number.isNaN(Number.parseFloat(item))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseFloat(item);
}

function validateCount(item) {
	try {
		return parseCount(item);
	} catch (error) {
		return error;
	}
}

// Задача 2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		const p = this.perimeter / 2;
		return +(Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}﻿
