const li = document.createElement('li');

li.className = 'collection-item';
li.id = 'new item';

li.setAttribute('title', 'New Item');

li.appendChild(document.createTextNode('Hello World'));

// Creating new link Element

const link = document.createElement('a');
// Giving a class
link.className = 'delete-item secondary-content';
// adding the icon
link.innerHTML = '<i class = "fa fa-remove"></i>';

// appending link into li
li.appendChild(link);


document.querySelector('ul.collection').appendChild(li);
console.log(li);
