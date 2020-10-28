
/**
 * JS Hoisting
 * In JS, variables and mfunctions can be used before declaring it
 */

//number = 100;
//console.log('Number : ' + number); //100
//var number;

/**
 * Hoisting only works with declaration but not initialization
 */
console.log(number) //undefined
var number = 100;

/**
 * JS compiler doesn't move function expression at top
 */
MyFunc();
var MyFunc = function myFunction() {
    console.log("This is my myFunc")
}