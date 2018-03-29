var obj1 = {};
Object.defineProperty(obj1, "name", {
    value: "obj1",
    writable: false
});
Object.defineProperty(obj1, "setterTest", {
    set: function (value) {this._setterTest = value}
});

var obj2 = Object.create(obj1);
obj2.name = "obj2";
obj2.setterTest = "Test Done";

console.log(obj1.name);
console.log(obj1._setterTest);
console.log(obj2.name);
console.log(obj2._setterTest);