//Condition and comparison

// if(something){
//     do something;
// }else{
//     do something else;
// }

//EQUAL TO
const num = 27;

if (num == 27) {
  console.log("The number is ".concat(num));
} else {
  console.log("The number is not ".concat(num));
}

//NOT EQUAL TO
const id = 23;

if (id != 24) {
  console.log("The number is ".concat(id));
} else {
  console.log("The number is not ".concat(id));
}

//EQUAL to VALUE and DATATYPE
const name1 = "27";

if (name1 === 27) {
  console.log("number is same type");
} else {
  console.log("Number is not same type");
}

//when value is undefined

if (typeof mom != "undefined") {
  console.log("Mom defined");
} else {
  console.log("Mom not defined");
}
// Greater than ">" and Lesser than "<"
const val = 100;

if (val >= 27) {
  console.log("val is high");
} else {
  console.log("Val is less");
}

//else if statment

const color = "red";

if (color === "Blue") {
  console.log("Color is blue");
} else if (color === "green") {
  console.log("Color is green");
} else {
  console.log("Color is red");
}

//LOGICAL OPERATORS
// "&&"" operator

const age = 25;

if (age > 13 && age < 19) {
  console.log("he is teenager");
} else {
  console.log("he is not teenager");
}

//  "||" operator

const man="rakesh";

if (man==="rakesh" || man=== "Sush") {
    console.log("yes its correct")
    
} else {
    console.log("No ,its not correct")
    
}

//TERNARY Operator

const bottel="Water";
//shortform of "if else statement" by using ternary operator
console.log(bottel==="Water"? "yes, its bottel of water":"No Its not bottel of water")