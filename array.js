const numbers = [45, 49, 34, 23, 67, 8, 1, 33, 6];
const number2 = new Array(22, 4, 867, 45, 3, 7);
const fruits = ['Apple', 'Mango', 'Pear', 'Banana', 'Peach', ];
const mixed = new Array(22, 'Apple', 4, 867, 'Pear', 45, 3, 7, 'Banana');


let val;
let newArray;
//? Get Array length
// val = numbers.length;
//? Check if something is an Array
// val = Array.isArray(numbers);
//? Get a single Value
// val = numbers[3];
//? Find the index
// val = numbers.indexOf(23);


// Mutating ARRAY
//? ADD at the END of the array
// val = numbers.push(100);
//? ADD at the START of the array
// val = numbers.unshift(100);
//? TAKE OFF from the END of the array
// val = numbers.pop();
//? TAKE OFF from the FRONT of the array
// val = numbers.shift();
//? SPLICE value of the array
// val = numbers.splice(0, 2);
//? REVERSE the array
// val = numbers.reverse();

//? CONCATENATE the array
//  newArray = numbers.concat(mixed);
//? SORT the array Alphabetically
// newArray = fruits.sort();
//? SORT the array Numerically
// newArray = numbers.sort(function (x, y) {
//     return x-y;
// });
//? FIND UNDER
// newArray = number2.find(num => num < 50);
//? FIND OVER
newArray = number2.find(num => num > 50);





console.log( `Output is ${newArray}`);