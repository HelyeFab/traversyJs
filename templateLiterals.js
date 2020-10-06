const name = 'John';
const age = '33';
const job = 'Chef';
const city = 'London';
let html;
let htmlTemplate;


html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li ><li > City: ' + city + ' </li></ul >';
document.body.innerHTML = html;

htmlTemplate = `<ul><li>Name: ${name}</li><li>Age: ${age}</li><li>City: ${city}</li></ul >`;

document.body.innerHTML = htmlTemplate;


