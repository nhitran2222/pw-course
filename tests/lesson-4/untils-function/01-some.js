const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];


//5.1
let hasScore = scores.some(score => score > 80);
console.log(hasScore)

//5.2
let hasAge = ages.some(age => age < 18);
console.log(hasAge);


//5.3
let hasWord = words.some(word => word.length > 5);
console.log(hasWord);