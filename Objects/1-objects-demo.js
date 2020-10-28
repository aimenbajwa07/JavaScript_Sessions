//Empty Object Literal
var person ={};
console.log(person)

//Object Literal with Properties
var person = {
    firstName: 'King',
    lastName: 'Kocher'
}
console.log(person)
//Object Literal with Properties
var person = {
    firstName: 'King',
    lastName: 'Smith',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person)
console.log(person.firstName)
console.log(person.lastName)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["age"])
console.log(person.getFullName())

var emp1 = {
    name: 'King Kocher',
    age: 23,
    city: 'Muree'
}

var emp2 = {
    name: 'Hodan Gudal',
    age: '22',
    city: 'Mumbai'
}

