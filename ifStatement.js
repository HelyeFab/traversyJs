const id = 90;


// ? Checking VALUE
if (id == 100) {
    console.log("correct");
}
// ? Not equal -> VALUE
if (id != 100) {
    console.log("not a hundred");
}



// ? Checking VALUE & TYPE
if (id === 100) {
    console.log("correct");
}
// ? Not equal -> VALUE & TYPE
if (id !== 100) {
    console.log("not a hundred");
}


// CHECKING IF SOMETHING IS UNDEFINED

let book;

if (typeof book === 'undefined') {
    console.log(`Your ${book} is undefined`);
} else {
    console.log(book);
}

// IF ELSE

let color = 'green';

if (color == 'red') {
    console.log(`Color is ${color}`);
} else if (color == 'yellow') {
    console.log(`Color is ${color}`);
} else {
    console.log(`Color is neither red or yellow`);
}

// --------LOGICAL OPERATORS--------


let name = "Steve";
let age = 11;

if (age > 0 && age <= 12) {
    console.log (`${name} is a child`)
} else if (age >=13 && age <= 19) {
    console.log(`${name} is a teen`)
} else {
    console.log(`${name} is an  adult`)
}