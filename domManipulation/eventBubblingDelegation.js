document.querySelector('.card-title').addEventListener('click', function () {
    console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', () => console.log('card content'));
document.getElementById('main').addEventListener('click', () => console.log('main'));


// Event Delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if (e.target.className === 'fa fa-remove') { -> // className WHEN SEARCHING FOR THE CLASS IN THE DOCUMENT  will      look             for         the entire string of classes
    //     console.log('delete item');
    // } 

     if (e.target.parentElement.classList.contains('delete-item')) {
         console.log('delete item');
         e.target.parentElement.parentElement.remove();
     }
    

};
// The reason why we use event delegation is because if we insert something dynamically via JS into the dom  such as a new list item for instance which was not there when the page loaded the fire event wouldn't work 

document.body.addEventListener('click', deleteItem);