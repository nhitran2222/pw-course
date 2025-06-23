const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];


//2.1
let newScores = scores.filter(score => score > 80);
console.log(newScores);

//2.2
let newAges = ages.filter(age => age > 20);
console.log(newAges);

//2.3
let newWords = words.filter(word => word.length > 5);
console.log(newWords);