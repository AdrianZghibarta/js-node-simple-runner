function logSomeNumbers(n1, n2, n3, n4) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4); 
    console.log("\n");  
}

logSomeNumbers(1, 2, 3, 4);

// Spread
logSomeNumbers(...[9, 8, 7, 6]);

// var obj1 = {info1: "Info 1", info2: "Info 2"};
// var obj2 = {
//     ...obj1,
//     info3: "Info 3"
// };
// console.log(obj2);

function logSome(...params) {
    console.log(...params);
}

logSome(1, 2, 3, 4, 5);
