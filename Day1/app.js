////////// Question 1 //////////
// var math = require('./Question1');

// console.log(math.add(1, 3)); // Output: 4
// console.log(math.sub(5, 2)); // Output: 3
// console.log(math.multi(2, 4)); // Output: 8

// try {
//   console.log(math.add('A', 3));
// } catch (error) {
//   console.error(error.message); // Output: Invalid arguments: both must be numbers
// }



////////// Question 2 //////////
var customModule = require('./Question2');
try {
  var ageString = customModule.getAge('Menatallah', new Date(2000, 3, 9));
  console.log(ageString);
} catch (error) {
  console.error(error.message);
}