
function sayHello(name) {
   // console.log("Hello " + name + "!!") ;
   // console.log(`Hello ${name} !!`);
    alert(`Hello ${name}!!`);
}

function getFullName(firstName, lastName) {
   // console.log(`${firstName} ${lastName}`);
    alert(`${fName} ${lName}`);
}

function getFullNameAgain(){
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    alert(`${fName} ${lName}`);
}

/*
sayHello('King');
sayHello("Aimen");
getFullName('Aimen', 'Bajwa');
getFullName('John'); //John undefined  lack of value = undefined
getFullName('a', 'b','c'); // a b
*/