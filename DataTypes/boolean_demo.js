
var value = true;
console.log(value)
value = false;
console.log(value)

if(value){
    console.log("Code will execute...")
}else{
    console.log("Code will not execute..")
}

/**
 * JS treats empty string, 0 , null, and undefined as false
 * Rest all are true
 */
//ffffftt
var bol1 = new Boolean(""); 
var bol2 = new Boolean(0);
var bol3 = new Boolean(undefined);
var bol4 = new Boolean(null);
var bol5 = new Boolean(NaN);
var bol6 = new Boolean("some text");
var bol7 = new Boolean(1);

console.log(bol1)
console.log(bol2)
console.log(bol3)
console.log(bol4)
console.log(bol5)
console.log(bol6)
console.log(bol7)