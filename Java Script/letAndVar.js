//Differenece bw Var and let

//1. if you decalred the variable as var it can be used outside the block.
// Var --> functional scope
function makeIt() {
  if (true) {
    var name = "React developer";
    console.log(name);
  }
  console.log(name);
}
//2. if you declared the variable as let and const it can not be used outside the block
// Let and const --> block scope
function tryIt() {
  if (true) {
    let me = "rakesh";
    console.log(me);
  }
  console.log(me);
}

makeIt();
tryIt();
