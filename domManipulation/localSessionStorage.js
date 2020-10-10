//?Difference between local storage and session storage is that local storage will stay even if the session is terminated.

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// // sessionStorage.setItem('name', 'Paul');


// // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.getElementById('task').value;
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
        
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});
