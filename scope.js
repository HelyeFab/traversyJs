// ? Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope: ${a},${b},${c}`);
}

testArrow = () => {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`Function Arrow Scope: ${a},${b},${c}`);
    
}

test(); // - > Function Scope: 4,5,6
testArrow(); // - > Function Arrow Scope: 7,8,9
console.log(`Global Scope: ${a},${b},${c}`); // -> Global Scope: 1,2,3

// ? Block Scope

// var a = 1;
// let b = 2;
// const c = 3;

// if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Block Scope(IF): ${a},${b},${c}`);
// }
// -> Block Scope(IF): 4,5,6
// console.log(`Global Scope: ${a},${b},${c}`); // -> Global Scope: 4,2,3 ** VAR HOISTING

// ? Loop  Scope
// for (var a = 0; a < 10; a++){
//     console.log(`Loop: ${a}`); // - > Loop Scope: 
//                                         // Loop: 0
//                                         // Loop: 1 
//                                         // Loop: 2 
//                                         // Loop: 3 
//                                         // Loop: 4 
//                                         // Loop: 5 
//                                         // Loop: 6 
//                                         // Loop: 7 
//                                         // Loop: 8 
//                                         // Loop: 9 
// }

// console.log(`Global Scope: ${a},${b},${c}`); // -> Global Scope: 10,2,3 ** VAR HOISTING