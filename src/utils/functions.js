Array.prototype.unique = function () {
	return this.filter(function (value, index, self) {
		return self.indexOf(value) === index
	})
}

Array.prototype.randomItem = function () {
	return this[Math.floor(Math.random() * this.length)]
}


String.prototype.firstWord = function () {
	return this.replace(/\s.*/, '')
}

String.prototype.extractFromQuote = function () {
	const matches = this.match(/"(.*?)"/)
	return matches ? matches[1] : null
}