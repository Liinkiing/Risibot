Array.prototype.unique = function() {
	return this.filter(function (value, index, self) {
		return self.indexOf(value) === index
	})
}

String.prototype.firstWord = function(){return this.replace(/\s.*/,'')}
