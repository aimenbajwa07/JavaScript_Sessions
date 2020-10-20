/**
 * null means absence of value
 * undefined means lack of value
 * A null and undefined value evaluates to false in conditional expression.
 */

var myValue1 = null;
console.log(myValue1);
if(myValue1){
    console.log('Good')
}else{
    console.log('Bad')
}

var myValue3; //Undefined
console.log(myValue3);
if(myValue3){
    console.log('Good')
}else{
    console.log('Bad')
}

