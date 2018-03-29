function Person(fullname) {
    this.fullname = fullname;
}

var me = new Person("Tony Stark");

console.log(Person.prototype.constructor === Person);
console.log(me.constructor === Person);

console.log("-----");

function Car(name) {
    this.name = name;
}
Car.prototype = {};

var dacia = new Car("Dacia");

console.log(dacia.constructor === Car);
console.log(dacia.constructor === Object);

var someObj = {};
console.log(someObj.constructor === Object);