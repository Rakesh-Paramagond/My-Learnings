//few types of creating array

const numbers = [27, 12, 18, 43, 108, 45, 7]; //storing numbers
const numbers2 = new Array(1234, 134, 144, 27, 262, 285, 1);
const cars = ["lambo", "BMW", "Mazda", "Alto"]; //storing string
const details = ["Rakesh", 27, true, null, undefined];

let man;

//get the lenght of the array
man = cars.length;

//to check the object is array or not
man = Array.isArray(details);

//to get the single value from array
man = details[3];

//insert or replace number from existing aray
details[2] = false;

//finding the indesx value of an array
man = numbers.indexOf(43);

//=========================================================
//Mutating the array

//adding number to end of an array
details.push(true, true);
console.log(details);

//removing number from end of array
details.pop(true);

//adding data to starting of array
details.unshift("He is a react developer");

//removing data from starting of an array
numbers.shift(27);

//splicing
numbers2.splice(1, 3); //removes the data from array number of indexes

//reversing the array
numbers2.reverse();

//concating the two array
man = cars.concat(numbers2);

//sorting the arrays
man = numbers2.sort(function (x, y) {
  return x - y;
});

//sorting in desending order
man = numbers2.sort(function (x, y) {
  return y - x;
});

console.log(man);
