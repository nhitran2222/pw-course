const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//3.1
let firstFoundScore = scores.find(score => score > 80);
console.log(firstFoundScore)

//3.2
let firstFoundAge = ages.find(score => score > 20);
console.log(firstFoundAge);

//3.3
let firstFoundWord = words.find(word => word.length > 5);
console.log(firstFoundWord);

