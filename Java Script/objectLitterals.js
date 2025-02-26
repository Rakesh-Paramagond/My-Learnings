//object litarals

const person = {
  name: "Rakesh",
  number: 27,
  car: "BMW",
  colors: ["blue", "black", "green"],
  model: {
    type: "hatch",
    year: 1997,
  },
  getManYear: function () {
    return 1996;
  },
  getOwnerAge: function () {
    return 2024 - this.number;
  },
};

console.log(person.car);

let det;
det = person;

console.log(det.car);

console.log(det.colors);
console.log(det.colors[2]);

console.log(det.model.year);
console.log(det.getManYear());
console.log(det.getOwnerAge());

//Array of objects

const vehicle = [
  {
    car: "Alto",
    color: "white",
  },

  {
    car:"Mazda",
    color:"Blue"
  }
];

console.log(vehicle[1]);

for(let l=0;l<vehicle.length;l++){
console.log(vehicle[l].car);


}
