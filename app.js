// Syntax ES5 - Javascript
const {simpleLogin, simpleCalc} = require("./custom_modules.js")


// Login succesfull
simpleLogin("admin@mail.com", "admin");

// Login failed
simpleLogin("admin@mail.com", "wrong");


// 10 + 20
console.log(simpleCalc(10, 20, "+"))

// // 81 / 9
console.log(simpleCalc(81, 9, "/"))

// // 15 * 3
console.log(simpleCalc(15, 3, "*"))

// // 20 - 10
console.log(simpleCalc(20, 10, "-"))