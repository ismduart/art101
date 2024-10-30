/*
* Author: Bella Duarte
* Created: 28 October 2024
* License: Public Domain
*/ 

array = [3, 12, 44, 56, 134, 246, 347, 555];

function isEven(x) {
    var results = (x % 2 == 0);
    return results;
}

console.log("is 1 even? ", isEven(1));
console.log("is 2 even? ", isEven(2));

console.log("my array: ", array);

var result = array.map(isEven);
console.log("test of evenness of array: ", result);

var result = array.map(function(x) {
    return x ** 0.5;
})

console.log("sqrt? ", result);

