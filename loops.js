// -----------FOR LOOP-----------
let i = 0;

// for (i; i < 6; i++){
//     console.log(`the number now is ${i}`)
// }

// for loop with a condition
for (i; i < 6; i++){
    if( i == 2){
    console.log(`the number now is ${i} and this is my favourite number`);
    continue;
    }
    if( i == 4){
    console.log(`loop aborted`);
    break;
    }
    console.log(`the number now is ${i}`)
}

// ----------- WHILE LOOP-----------

let x = 0;

while(x<10){
    console.log(`I'm a while loop and the number now is ${x}`)
    x++;
}

// ----------- DO WHILE LOOP (This is always going to run once)-----------

let y = 5;

do {
    console.log(`I'm a do while loop and the number now is ${y}`)
    y++;
}
while(y<4);


// ----------- LOOPING THROUGH ARRAYS (When not using arrays methods)-----------
const myColors = ['White','Red','Orangered','Green','Indigo'];

for (i=0; i<myColors.length; i++){
    console.log(`The color now is  ${myColors[i]}`);
}

// ----------- LOOPING THROUGH ARRAYS (using arrays methods)-----------
const myNotes = ['Do','Re','Mi','Fa','Sol'];

myNotes.forEach(function(note,index, array){
console.log(`${note} : ${index} : ${array}`);

});

// Map
const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Mark'
    },
    {
        id: 3,
        name: 'Ann'
    },
];

const ids = users.map(function (user) {
    return user.id
});

console.log(ids);

// FOR IN
const user = {
    firstName: 'William',
    lastName: 'King',
    age: 48
      
}

for (let i in user) {
    console.log(i);  // This will give the key of each key-value pair
    console.log(`${i} : ${user[i]}`); // This will give the key-value pair for each item in the object
}