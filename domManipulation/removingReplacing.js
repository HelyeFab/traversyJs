const newHeading = document.createElement('h2');

newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');

// In order to perform the replacement we need to call the parent element
// const cardAction = document.querySelector('.card-action');
const cardAction = oldHeading.parentElement;


// Here we perform the actual replacement
cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);


//? HOW TO REMOVE SOMETHING

const lis = document.querySelectorAll('li');
const list = document.querySelector('.collection');

lis[0].remove();

// ALTERNATIVE METHOD -> REMOVING BY CHILD ELEMENT
list.removeChild(lis[2]);

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.firstElementChild;

let val;

val = link.className; //-> delete-item secondary-content
val = link.classList; //-> DOMTokenList [ "delete-item", "secondary-content" ]
link.classList.add('emmanuel'); //DOMTokenList(3) [ "delete-item", "secondary-content", "emmanuel" ]
link.classList.remove('emmanuel'); //DOMTokenList(3) [ "delete-item", "secondary-content"]



//ATTRIBUTES

val = link.getAttribute('href'); //-> #
val = link.setAttribute('href', 'http://google.com');

val = link.hasAttribute('href');
link.removeAttribute('href');

console.log(link);