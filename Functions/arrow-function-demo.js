/**
 * Arraor Function is the convept of EF6
 * An alternative way to wrote a shorter syntax compared to the functions or function expression.
 */

 function addition(a,b){  //arrow
     return a+b;
 }

 console.log(addition(200,100)); 

 add = function addition(a,b){ //arrow and expression
     return a+ b
 }
 console.log(add(200,200));

 add=function(a,b) { //annonymous = arrow
     return a+b;
 }
 console.log(add(200,300));

 var sayHello = () => console.log('Hello Everyone!!');
 sayHello();

 console.log("----------------------------------------");
 
 var sayHelloWithMessage = () => {
     console.log('Hello Everyone');
     console.log('Lets Learn Interesting facts about JS!!');
 }

 sayHelloWithMessage();

 console.log("----------------------------------------");
 
 var add = (num1, num2) => {return num1 + num2;}
 console.log(add(10,200));

 console.log(typeof add);

 let numbers = [4, 2, 6];
 numbers.sort((a,b)=>b-a)
 console.log(numbers);