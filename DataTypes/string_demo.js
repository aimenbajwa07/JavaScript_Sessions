var first_name = 'King';
var last_name = "Kocchar"

console.log(first_name)
console.log(last_name)
console.log(first_name + last_name)
console.log(first_name + ' ' + last_name)

var description1 = "Hello Everyone, we are talking about 'JavaScript' ";
var description2= 'Hello Everyone, we are talking about "JavaScript" ';
console.log(description1)
console.log(description2)

var description = "Hello Everyone, we are talking about \"JavaScript\" ";
console.log(description)

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

console.log(str1 == str2); //false
console.log(str1 == str3); //true
console.log(str1 === str4); //true

console.log(typeof (str1)) //object
console.log(typeof (str3)) //string