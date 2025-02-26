//Template Literals

const type = "car";
const brand = "BMW";
const model = 1997;
const color = "Black";

let html;

//without using template litterals, i.e ES5, we are going to render HTML in browser with JS

html =
  "<ul><li>Type:" +
  type +
  "</li><li>Brand:" +
  brand +
  "</li><li>Model:" +
  model +
  "</li><li>Color:" +
  color +
  "</li></ul>";

document.body.innerHTML = html;

//now using template litterals,

html = `
  <ul>
    <li>Type : ${type}</li>
    <li>Brand : ${brand}</li>
    <li>Model : ${model}</li>
    <li>Color : ${color}</li>
  </ul>
  `
;

document.body.innerHTML = html;

