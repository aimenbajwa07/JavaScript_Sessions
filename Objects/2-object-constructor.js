/* //Class in JavaScript
function Person() {
    this.firstName = 'King';
    this.lastName = 'Kocher';
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Creating Object Constructor
var person1  = new Person();
console.log(person.firstName)
console.log(person.lastName)
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person.getFullName());

*/

//---------------------------------------------------//
/*
function Person(fName, lName) {
    this.firstName = fName || 'Unknown';
    this.lastName = lName || 'Unknown';
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

var p1 = new Person('King', 'Kocher');
console.log(p1.getFullName())
var p2 = new Person('Aimen', 'Bajwa');
console.log(p2.getFullName())
var p3 = new Person('Hodan', 'Gudal');
console.log(p3.getFullName())
var p4 = new Person();
console.log(p4.getFullName())
*/
//---------------------------------------//

function Person(fName, lName) {
    this.firstName = fName || 'Unknown';
    this.lastName = lName || 'Unknown';
   
    Object.defineProperties(this, {
        "FirstName": {
            get: function() {return this.firstName},
            set: function(value) { this.firstName = value }
        },
        "LastName": {
            get: function() {return this.lastName},
            set: function(value) { this.lastName = value }

        }
    })
}

var p1 = new Person();
console.log(p1.FirstName);
p1.FirstName = "Bhawna";
console.log(p1.FirstName);
console.log(p1.LastName);
p1.LastName = "Ghunwani";
console.log(p1.LastName);