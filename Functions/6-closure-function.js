
/**
 * Closure means an inner function
 * Closure function always has access to the variables and parameters of outer function.
 * Helps in data privacy
 */

 function outerFunction() {
     var count =1;
     function innerFunction() {
         console.log(count);
     }
    return innerFunction;
 }

 var innerFuncResult = outerFunction();
 innerFuncResult();

 function Counter() {
     var counter = 0;
     function increaseCounter() {
         return counter += 1;
     }
     return increaseCounter;
 }

 var counter = Counter();
 console.log(counter()); //1
 console.log(counter()); //2
 console.log(counter()); //3
 console.log(counter()); //4