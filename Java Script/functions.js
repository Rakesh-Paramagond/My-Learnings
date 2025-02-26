//functions declaration and expression

function greet(){
    console.log("Hello Rakesh, You are a react developer");
}

greet();

function getTheYear(){
    return 2025;
}

console.log(getTheYear());

function getMyName(firstName,lastName){
    return `My name is ${firstName} ${lastName}`
}

console.log(getMyName('Rakesh','Paramagond'));

function myRole(role="React developer"){
    return `Rakesh is a ${role}`
}

console.log(myRole());

//function expression

const thing= function(a,b){
    return a*b;
}

console.log(thing(2,3));

//IIFE ---> Immedetly Invokable Function Expression

(function(){
    console.log (`Hey Rakesh , you are a react devloper`);
})();

(function(name){
    console.log(`Hey ${name}, you are really a react devloper`);
})('Rakesh');

//function in object

const details={
    getDetails:function(){
        return "I will not give details";
    }
}

console.log(details.getDetails()); 