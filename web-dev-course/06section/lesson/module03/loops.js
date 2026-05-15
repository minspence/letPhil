// for loop

// for (let i = 0; i <= 5; i++) {
//   console.log("Iternation", i);
// }

// const colors = ["red", "green", "blue", "yellow"];
//
// for (let i = 0; i < colors.length; i++) {
//   console.log("i = ", i);
//   console.log("colors[i] = ", colors[i]);
// }

// while loop

// let count = 0;
//
// while (count <= 5) {
//   console.log("Count =", count);
//   count++;
// }

// user input until correct answer

// let userInput;
//
// while (userInput !== "yes") {
//   userInput = prompt('Type "yes" to continue:');
// }
//
// console.log("You entered 'yes'!");

// do ... while (Execute at least once)

// let number = 0;
//
// do {
//   console.log("Number =", number);
//   number++;
// } while (number <= 5);

let num;

do {
  num = prompt("Enter a number greater than 10:");
} while (num <= 10);

console.log("Thank you!");
