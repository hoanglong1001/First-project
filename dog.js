var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

Dog.prototype.sayHello = function() {
	console.log('Hello, my name is ' + chalk.blue(this.name));
}

module.exports = Dog;