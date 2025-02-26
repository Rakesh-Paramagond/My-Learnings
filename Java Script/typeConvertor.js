let value;

//number to String

value = String(5);

console.log(value);
console.log(typeof value);
console.log(value.length);

//boolean to String

value =String(true);

//date to String

value = String(new Date());

//Array to String 

value= String([1,2,3,4]);

//using toString () method;

value =(5).toString();
value =true.toString();

//String to Number

value =Number("5");

//boolean to number 

value=Number(true);

//using parseInt (); method

value=parseInt("5");

//Type Cohesion

//javascript automatically converts another number as String
const value1= "5";
const value2=6;

const sum= value1+value2;
console.log(sum)