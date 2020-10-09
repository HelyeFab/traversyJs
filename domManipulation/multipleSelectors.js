// const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // console.log(items[3]);

// const ul = document.querySelector('ul');
// const items_1 = ul.getElementsByClassName('collection-item');
// console.log(ul);
// console.log(items_1);



// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// lis = Array.from(lis);

// lis.forEach(function (li, index){
//     li.textContent = `Item ${index +1}`
// });

let lis = document.querySelectorAll('li');
console.log(lis);

lis.forEach(function (li, index) {
    li.textContent = `Item ${index + 1}`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function (li, index) {
    li.style.background = '#333';
    li.style.color = '#eee';  
});

// liEven.forEach(function (li, index) {
//     li.style.background = '#e63946';
//     li.style.color = '#eee';
// });

//? USING A FOR LOOP INSTEAD

for (i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#e63946';
    liEven[i].style.color = '#eee';
}

