/*
console.log(' Hello from myscript.js file :)')
alert('I am loaded...'); //ok
*/

//confirm("Do you want to proceed?"); //ok and cancel
if(confirm("Do you want to proceed?") == true){
   // alert("You are selected for next round..");
   document.getElementById("proceed").innerHTML = "You are selected for the next round!!";
}else{
   // alert("OOPS!! You are rejected..!!")
   document.getElementById("proceed").innerHTML = "OOPS!! You are rejected..!!";
}

var age = prompt('Please Enter Your Age: '); //ok, cancel,and textbox for user input
//alert('Your age is ' + age);
if(age >= 18){
    //alert('You are valid to vote..!')
   // document.write('You are valid to vote..!');
   document.getElementById('voteStatus').innerHTML = 'You are valid to vote';
}
else{
   // alert('You are not valid to vote!')
   //document.write('You are not valid to vote.');
   document.getElementById('voteStatus').innerHTML = 'You are not valid to vote';
}