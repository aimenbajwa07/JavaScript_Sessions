
var fs = require('fs');  //fs is module of node js
//fs.readFile             //by default ecerything is asynchronus in js
//require()  is like import in java

var data_one = fs.readFileSync('demo_one.txt');
console.log(data_one.toString());

var data_two = fs.readFileSync('demo_two.txt');
console.log(data_two.toString());