const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//6.1
let sumScores = scores.reduce((total, score) => total + score, 0)
console.log(sumScores);

//6.2
let sumNumbers = numbers.reduce((total, number) => total + number, 0);
console.log(sumNumbers);

//6.3
let sumExpenses = expenses.reduce((total, expense) => total + expense, 0)
console.log(sumExpenses);