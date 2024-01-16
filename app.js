
let name = prompt("What is your name?");
function sayHello() {
document.write("<p>Hello, " + name + "!<p>");
}
let favCountry = prompt("What is your favorite country?");
function loveCounty (){
document.write("<p>" + name + "'s favorite country: " + favCountry + ".<p>");
}

let y_or_n = prompt("Looking for great prices? y/n");
if(y_or_n === 'yes') {
  document.write("<p>Check out <a href='https://expedia.com' target='_blank'>Expedia</a> for great travel deals!</p>");
} else 
if(y_or_n === 'no') {
    document.write('OK, maybe next time. :)');
}
  


console.log('There are so many beautiful places to visit!');

// console.log 3 times
// This code is not DRY????
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');

for (let i = 0; i < 3; i++) {
  console.log('hello there');
}

// for loop syntax
let numberOfCountries = prompt('How many countries have you been to?');
for (let i = 0; i < numberOfCountries; i++) {
  // here goes code to be repeated.
  document.write('<p>Visit here! '+ i + '</p>');
}

let user = 'Enjoy';
// while (!user) {
//   user = prompt('Where too next?');
// }

// do {
//   user = prompt('Where too next?');
// } while(!user);

// document.write("<p>" + user + "</p>");

let username = 'Enjoy';
while (username.length < 4 || username.length > 10) {
  username = prompt('Give me a number');
}

