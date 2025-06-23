const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];

//let doubleNums = nums.map(num => num*2) //2,4,6,8,10

//4.1
let newScores = scores.map(score => {
    if (score < 90) {
        return score * 0.1
    } else {
        return score * (0.95)
    }
})

console.log(newScores);

//4.2
let strNumbers = numbers.map(number => number.toString());
console.log(strNumbers);

//4.3
let doubleNums = numbers.map(number => number * 2);
console.log(doubleNums);
