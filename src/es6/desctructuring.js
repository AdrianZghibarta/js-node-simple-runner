function getUser() {
    return {
        fistName: "Grigore",
        lastName: "Fesrosu"
    }
}

function getNumber() {
    return [1, 2, 3];
}

var {fistName: first, lastName: last} = getUser();
console.log(first, last);

var [one, two, three] = getNumber();
console.log(one, two, three);

