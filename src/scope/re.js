var firstName; // Undefined
firstName = 'Juliana';
console.log(firstName);

var lastName = "Ana";   // declarar asignar
lastName = 'Carolina';   // reasignar
console.log(lastName);

var secondName = 'Eva';    //declarando asignando
var secondName = 'Scarlet';   //reasignarlo
console.log(secondName);

// let

let fruit = 'Apple';  //declarar y asignar
fruit = 'Kiwi'        //reasignar
console.log(fruit);
let fruit = 'Banana';   //SyntaxError: Identifier 'fruit' has already been declared

// const

const animal = 'Dog';  //declara y asigna
animal = 'Cat';        //reasignado,    TypeError: Assignment to constant variable.
console.log(animal);  

const vehicles = [];
vehicles.push("mercedez");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
