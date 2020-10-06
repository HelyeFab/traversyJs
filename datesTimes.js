let val;
const today = new Date();
// const todayFormatted = new Date(new Date().getTime());
const todayFormatted = new Date(new Date().getTime());
let birthday = new Date('6-23-1972 11:30:00');
let birthday2 = new Date('October 10 1982');

val = today - birthday;
val = birthday2;

val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getMilliseconds();
val = today.getTime();

// val = today.setDate(23);


console.log(todayFormatted);
console.log(val);