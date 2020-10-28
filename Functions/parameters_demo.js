/** 
 * Default Parameters
*/

function getFullName(firstName, lastName = 'Smith') {
    console.log(`${firstName} ${lastName}`);
}

getFullName('King');
getFullName('Aimen', 'Bajwa');

console.log("----------------------------");

/**
 *  Rest Parameters ...
 */

 function add(a, b, c) {
     var total = a + b + c;
    console.log(total);
 }
 add(10, 20, 30);

 function add2(...numbers) {
     var total =0;
     for(var a of numbers) {
         total= total + a;
     }
     console.log(total);
 }

add2(10,20);
add2(1,2,3,4,5,6,7,8,9);

console.log("----------------------")

/**
 * Spread Parameters
 */

 var odd = [1, 3, 5, 7];
 var even = [2, 4, 6, 8];
 var combined = [...odd, ...even];
 console.log(combined)
