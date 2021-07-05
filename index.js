// polyfill String.prototype.replaceAll()
if (!String.prototype.replaceAlls) {
	String.prototype.replaceAlls = function (str, newStr) {
		// If a string

    console.log(str,newStr)
		return this.replace(new RegExp(str, 'g'), newStr);
	};
}

// polyfill String.prototype.matchAll()
if (!String.prototype.matchAlls) {
	String.prototype.matchAlls = function (str, newStr) {
		// If a string

		console.log(str, newStr);
	};
}

const regexp = new RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
const matches = str.matchAlls(regexp);

