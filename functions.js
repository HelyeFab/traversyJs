function greeting(firstName, lastName) {
    return `Hello ${firstName} ${lastName} !`
}

console.log(greeting('Emmanuel', 'Fabiani'));

// ? We can also set standard values for our parameters which will act as standards if no parameter is set when the function is invoked or which will be overwritten if the function is invoked with the proper parameters

function greetingStandardValue(firstName = 'Name not given', lastName = 'Last name not given') {
    return `Hello ${firstName} ${lastName} !`
}

console.log(greetingStandardValue());

// -----------FUNCTION EXPRESSION-----------

const square = function (x) {
    return x * x;
};

console.log(square(8));


// -----------IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS   IIFEs-----------

(function () {
    console.log('IIFE executed');
})();

(function (name) {
    console.log(`Hello ${name}`);
})('Emmanuel');

// -----------PROPERTY METHODS-----------

const todo =  {
    add: function(){
        console.log('Add to do..');
    }
}

todo.delete = function () {
    console.log('delete todo');
}

todo.delete();
// You can define function for this object outside of the object