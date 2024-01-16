
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
} else {
  document.write('OK, maybe next time. :)');
} 
