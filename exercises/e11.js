
// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  let withdrawalSums = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    if (array[i].withdrawals) {
      for (let x = 0; x < array[i].withdrawals.length; x++) {
        sum += array[i].withdrawals[x];
      }
    }
    withdrawalSums.push(sum);
  }
  return withdrawalSums;
}

// console.log(getAllWithdrawals(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
