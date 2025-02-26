// data types are 2 types

//1. prmitive data types
//2. reference data types

//primitive data types

//1.String
const cake = "rakesh";
console.log(typeof cake);

// number
const rank =123;
console.log(typeof rank);

//boolean
const meBoy=true;
console.log(typeof meBoy);

//null
const me= null;
console.log(typeof me);// we are storing value of nothing

//undefined
//we will not be able to undefined the variable in using "const", but we can do it by using "let"
let mc;
console.log(typeof mc);

//2.referance datatype

//Arrays
const cars = ["BMW","Alto","Dodge"];
console.log(typeof cars);

//object literals
const carDetails = {
    brand : "Suzuki",
    model:"Alto",
  color:"White"
}
console.log(typeof carDetails);

//dates

const yesterday=new Date();
console.log(yesterday)
console.log(typeof yesterday)




