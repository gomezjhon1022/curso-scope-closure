// variable

var a;  //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb';  //reasignacion
var a = 'aa'; //redeclaracion

//global scope

var fruit = 'Apple';  //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia';   //global
    console.log(country);
}
countries();
console.log(country);
