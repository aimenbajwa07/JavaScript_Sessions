/**
 * JS provides error-handling using try, catch and finally block
 * try is the block in which we write the code in which chances of getting
 * exceptions or errors is high
 * catch is the block to write to do sth when an error occurs
 * finally is the block that will always be execute whether an error occurs or not
 */


try{
    addition(100, 200);
}catch(ex) {
    console.log("There is some error")
    console.log(ex)
}
finally{
    console.log("Finally block always gets executed")
}
//function addition(num1, num2) {
//    console.log("Result: " + (num1+num2));
//}

//------------------------------------------------------------------------------//

var age =1;
try{
    if(age>=18){
        console.log("You are ready to vote..!!");
    }
    else{
       // throw "You are not valid to vote..!!";
       throw{
           code: 1001,
           messasge: "You are not valid to vote.."
       }
    }
}catch(ex){
    console.log('There is some error')
    console.log(ex.code+ ' : ' + ex.messasge)
    //console.log(ex)
}
finally{
    console.log("finally always executed!")
}