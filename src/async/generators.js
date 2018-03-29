function* idMaker() {
    var index = 0;
    while(true) {
        yield index++;
    }
}

var generator = idMaker();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);