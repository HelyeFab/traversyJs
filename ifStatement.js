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




