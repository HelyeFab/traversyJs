// document.getElementById()
const taskTitle = document.getElementById('task-title');
console.log(taskTitle.id);
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '10px';


// CHANGING THE CONTENT

taskTitle.textContent = 'My task List';
taskTitle.innerText = 'My beautiful task List';
// ! Difference between textContent and innerText:
// ! For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>
// ! innerText will return 'Hello'
// ! while textContent will return 'Hello World
taskTitle.innerHTML = 'My beautiful <br> task List';