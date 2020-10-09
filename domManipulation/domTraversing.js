let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

val = list.childNodes[0].nodeName;

val = list.childNodes[0].nodeType;

val = list.children[3].children;


val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = list.nextSibling;
val = list.nextElementSibling;
val = list.previousSibling;
val = list.previousElementSibling;
console.log(val);
