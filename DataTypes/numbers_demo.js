
//Declare number as a variable
var num1 = 100;

console.log(num1);
console.log(typeof num1);

//Declare number as an object
var number1 = new Number(1000);
var number2 = new Number(1000);
var number3 = number1;

console.log(number1==number2) //False because they are two different objects
                              //have two different locations in memory allocation
console.log(number3==number1)//True
console.log(number3===number1)//True check for type and value both

/**
 * ==: operator compares number object and not the value
 * ===: operator compares object/type and value
 */