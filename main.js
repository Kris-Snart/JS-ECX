// For Question1
// i created a function greet that takes an argument of the name and outputs a greeting Good morning with the name

function greet(name) {
  let set = "Good morning" + name;
  console.log(set);
}
greet(" Sixtus");

// For Question2
// i  created a variable Multiply that has a function Times in it that takes 2 parameters and does the multiplication in the console .log()
let Multiply = function Times(a, b) {
  let result = a * b;
  return result;
};
console.log(Multiply(5, 5));

For Question3
i decided to switch things up a bit and use the arrow fction to
calculateSquare = (a) => {
  let squares = a ** 2;
  return squares;
};
calculateSquare(12);
console.log(calculateSquare(12));
