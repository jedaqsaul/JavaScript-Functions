//Chop 2 medium size red onions
//add cooking oil 5l
//chop 2 big size tomato
//crush 2 cloves of garlic
//add salt
//chop 1 medium size hoho
//Sprinkle a tea spoon of rosemary
//mix till sautee
//Put almost half cup of water ... let it simmer abit
//Cut your fish into 2 or just put it full
//Let the fish simmer on low heat untill all the water is done
//Then for thick stew and add rouce cubes then coconut cream

function makeCoconutNgege() {
  console.log("chop 2 medium sized onions");
  console.log("Add cooking oil 5l");
  console.log("Crush 2 big tomatoes");
  console.log("Crush 2 cloves of garlic");
  console.log("cut your fishs into 2 or just put it full");
  console.log("let the fish simmer on low heat untill all the water is done");
}
makeCoconutNgege();
/*
const doMath = function (num1, num2) {
  return num1 * num2;
};

let multiplication = doMath(3, 4);
console.log(multiplication);

const doSum = (num1, num2) => {
  return num1 + num2;
};
console.log(doSum(3, 5));


//IIFE

(function () {
  console.log("Runs Instantly");
})();

//Anonymous function()
const greeting = function () {
  console.log("Hello");
};
greeting();

//callback
function process(callback) {
  callback();
}
process(() => console.log("Callback executed"));

//Higher-order function
function operate(fn, a, b) {
  return fn(a, b);
}
console.log(operate((x, y) => x + y, 2, 3));

//First class functions

const sayHello = () => "Hello";
const greet = sayHello;
console.log(greet());

//Arrow functions
const add = (a, b) => a + b;
console.log(add(3, 5));


*/

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return "Argument should only be numbers";
  }
}
console.log(add(5, 2));
console.log(add("hello", 2));

console.log(greetings());

function greetings() {
  return "Hello";
}

console.log("Functions Practice");
(function () {
  console.log(10 + 20);
})();

(function (num1, num2) {
  console.log(num1 * num2);
})(50, 50);

document.querySelector(".box").addEventListener("click", () => {
  alert("You just clicked me and I do not lke to be clicked");
});
//IIFE

(function (firstName, lastName) {
  console.log(`My name is:${firstName} ${lastName}`);
})("Aquila", "Jedidiah");

const totalStudents = (femaleStudents, maleStudents) => {
  return `The total number of students is ${femaleStudents + maleStudents}`;
};
console.log(totalStudents(10, 20));
