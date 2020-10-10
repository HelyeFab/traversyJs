const clearBtn = document.querySelector('.clear-tasks');

function onClick(e) {
    let val;
    val = e;
     // Event target element
     val = e.target;
     val = e.target.id;
     val = e.target.className;
     val = e.target.classList;

     // Event type
     val = e.type;

     // Timestamp
     val = e.timeStamp;

     // Coords event relative to the window
     val = e.clientY;
     val = e.clientX;

     // Coords event relative to the element
     val = e.offsetY;
    val = e.offsetX;
    
    console.log(val);

};


clearBtn.addEventListener('click', onClick);


console.log(clearBtn);


// Mouse Events
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown -> click and hold
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


// Keyboard Events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');




form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log(`Event Type : ${e.type}`);

    // heading.innerText = e.target.value;


    // console.log(taskInput.value);

    // e.preventDefault();

}

taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
