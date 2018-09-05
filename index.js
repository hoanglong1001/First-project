var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var dog = new Dog('Corgi');
var cat = new Cat('Tom');
var mouse = new Mouse('Mickey');

// dog.eat(cat);
// console.log(dog);
try {
	cat.eat(dog);		
} catch(error) {
	console.log('Cat can\'t eat');
}

console.log(cat);
