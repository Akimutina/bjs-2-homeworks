class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = type;
	}

	set state(value) {
		if (value <= 0) {
			this._state = 0;
		}
		if (value >= 100) {
			this._state = 100;
		} else this._state = value;
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state *= 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, type) {
		super(name, releaseDate, pagesCount, type);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(name, releaseDate, pagesCount, type);
		this.type = "book";
		this.author = author;
	}
}


class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "detective";
	}
}

// Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findBook = this.books.find(book => book[type] === value);
		if (typeof findBook === 'object') {
			return findBook;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		let giveBoook = this.books.find(book => book.name === bookName);
		if (typeof giveBoook === 'object') {
			let index = this.books.indexOf(giveBoook);
			this.books.splice(index, 1);
			return giveBoook;
		} else {
			return null;
		}
	}
}
