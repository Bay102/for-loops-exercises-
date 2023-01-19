
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r', 'a'], ['f', 'y']]) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(arr) {
  let oneArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          for (let j = 0; j < arr[i].length; j++) {
              oneArray.push(arr[i][j]);
          }
      } else {
          oneArray.push(arr[i]);
      }
  }
  return oneArray;


}
// console.log(flatArrays([[1,2,3], [6,5,4], 9]));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
