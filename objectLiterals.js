// Object literal
const person = {
    firstName: 'Steve',
    age: 48,
    email: 'steve@msn.com',
    hobbies: ['music', 'films', 'fishing'],
    address: {
        city: 'London',
        street: '19 Gipsy Hill',
        postCode: 'SE19 2FG',
        country: 'United Kingdom'
    },
    getBirthYear: function () {
        return 2020 - this.age;
    }
}


const people = [{
        firstName: 'Steve',
        age: 48,
        email: 'steve@msn.com'
    },
    {
        firstName: 'Brian',
        age: 28,
        email: 'brian@msn.com'
    },
    {
        firstName: 'Emily',
        age: 35,
        email: 'emily@msn.com'
    },
    {
        firstName: 'David',
        age: 68,
        email: 'david@msn.com'
    }
];




let val;

val = person.age;
// -> 48
val = person['firstName'];
// -> Steve
val = person.hobbies[2];
// -> fishing
val = person.address.city;
// -> London
val = person.getBirthYear();
// -> 1972
val = people[2].firstName;

for (i = 0; i < people.length; i++){
    console.log(people[i].firstName);
}





console.log(val);