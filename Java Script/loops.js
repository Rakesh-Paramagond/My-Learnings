//LOOPs in Javascript

//for loop

for (let id = 0; id < 10; id++) {
  const element = id;
  console.log(`print id = ${element}`);
}

const names = ["Me", "You", "Mine", "Ours"];

for (let i = 0; i < names.length; i++) {
  console.log(`print ${names[i]}`);
}

//for of loop

for (i of names) {
  console.log(i);
}

//while loop

let me = 0;

while (me < 6) {
  console.log(me);
  me++;
}

//do while
let mass = 10;
do {
  mass++;
  console.log("Sudeep is mass");
} while (mass < 20);

//for in Loop

const detail = {
  firstName: "Rakesh",
  Role: "react Developer",
};

for(get in detail){   //get is a key here
console.log(detail[get]);
}