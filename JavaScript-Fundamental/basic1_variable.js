//Number:
ex_integer = 132;
ex_decimal = 132.23;
console.log(typeof(ex_integer));
console.log(typeof(ex_decimal));

//String:
ex_string = "Vu Duc Viet";
console.log(typeof(ex_string));

//Boolean:
ex_boolean = false;
console.log(typeof(ex_boolean));

//Object:
ex_Object = { "key 1": "value 1", "key 2": "value 2" };
console.log(typeof(ex_Object));


/*
[var] var allows:
- declare
- re-assign
- re-declare
*/
var name = "Vu Duc Viet";
console.log("Declare: " + name);

var name = "Viet Vu";
console.log("Re-declare: " + name);

name = "Duc" + "Viet Vu";
console.log("Re-assign: " + name);

/*
[let] let allows:
- declare
- re-assign
*/
let age = 19;
console.log("Declare: " + age);

age = 17;
console.log("Re-assign: " + age);

/*
[const] const allows:
- declare
*/
const TYPE = "Human";
console.log("Declare: " + TYPE);