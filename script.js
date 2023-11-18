// Get the current URL of the website
var url = window.location.href;

// Create a new URLSearchParams object with the query string
var params = new URLSearchParams(url.split('?')[1]);

// Get the value of the name parameter
var name = params.get('name');

// Get the value of the age parameter
var age = params.get('age');

// Display the values in the console
console.log("Hello?")
console.log('Name: ' + name);
console.log('Age: ' + age);

document.write(name)
document.write(age)
