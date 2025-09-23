// let args = process.argv;

// for(let i = 0; i < args.length ; i ++){
//     console.log("hello to", args[i]);
// }



// \\ for reuire from same folder or dir
// const math = require("./math");

// console.log(math);
// console.log(math.sum(2,2), math.mul(-9,6));
// console.log(div);


// \\ for require from different dir or folder.
const path = require('path');

const fruits = require(path.join(__dirname, '../XYZ'));

console.log(fruits);
