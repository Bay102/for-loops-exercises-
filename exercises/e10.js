const bankAccounts = [
  {
    id: 1, name: 'Susan',
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120]
  },
  { id: 2, name: 'Morgan', balance: 1100.00, deposits: [1100] },
  { id: 3, name: 'Joshua', balance: 18456.57, deposits: [4000, 5000, 6000, 9200, 256.57], withdrawals: [1500, 1400, 1500, 1500] },
  { id: 4, name: 'Candy', balance: 0.00 },
  { id: 5, name: 'Phil', balance: 18, deposits: [100, 18], withdrawals: [100] },
];

// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let accountNames = [];
  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    for (let j = 0; j < account.name.length; j++) {
      if (account.name[j].toLowerCase() === letter.toLowerCase()) {
        accountNames.push(account.name);
      }
    }
  }
  return accountNames;
}

// console.log(getClientsWithLetterInName(bankAccounts, 'g'));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
