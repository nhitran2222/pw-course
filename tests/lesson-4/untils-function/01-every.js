const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//1.1
let highScore = scores.every(score => score > 70);
console.log(highScore);

//1.2.
let newAge = ages.every(age => age > 15);
console.log(newAge);

//1.3
let lenghOfhWord = words.every(word => word.length > 3)
console.log(lenghOfhWord);