// if statement example

//let temp = 30;
//
//if (temp > 25) {
//  console.log("It's a hot day! Stay hydrated.");
//}

// if-else statement example

// const marks = 80;
//
// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 80) {
//   console.log("Grade: B");
// } else if (marks >= 70) {
//   console.log("Grade: C");
// } else if (marks >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// checking for multiple conditions using logical operators (&&, ||)

// const age = 20;
// const hasDrivingLicense = true;

// This checks to see if the person is 18 or older and has a driving license
// If both conditions are true, the statement will return true
// If either condition is false, the statement will return false

// if (age >= 18 && hasDrivingLicense) {
//   console.log("You can drive.");
// } else {
//   console.log("You can not drive.");
// }

// This checks to see if the person is 18 or older or has a driving license
// If one of the conditions is true, the statement will return true
// If both conditions are false, the statement will return false

// if (age >= 18 || hasDrivingLicense) {
//   console.log("You can drive.");
// } else {
//   console.log("You can not drive.");
// }

// Ternary operator (? : ) example

const isLoggedIn = false;

const msg = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(msg);
