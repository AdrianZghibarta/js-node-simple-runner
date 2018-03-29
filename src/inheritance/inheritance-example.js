function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log("Hello, my name is ", this.name);
}

function Programmer(name, language) {
    Person.call(this, name);
    this.language = language;
}
Programmer.prototype = Person.prototype;// Show direct assign and with new and set prototype of //Object.setPrototypeOf( Bar.prototype, Foo.prototype );
Programmer.prototype.complain = function () {
    console.log("Writing code in " + this.language + " is fun but hard");
}

var person = new Person("Ali Baba");
var programmer = new Programmer("Abdula", "Java Script");

person.sayHello();
//person.complain();
programmer.sayHello();
programmer.complain();
console.log(person.sayHello === programmer.sayHello);