const numbers = [1, 2, 3];
const str = "Playwright";

//1.1
numbers.forEach((value) => {
    console.log(value)
});

//1.2
let sum = 0;
let findMax = numbers[0]; //gán findMax là giá trị của phần tử đầu tiên để có giá trị ban đầu để so sánh
let findMin = numbers[0];
numbers.forEach((value) => {
    sum += value;
    findMax = Math.max(findMax, value); //giữ lại số lớn nhất trong 2 số
    findMin = Math.min(findMin, value); //giữ lại số nhỏ nhất trong 2 số
})

console.log("Tổng của mảng numbers là:", sum);
console.log("Max là", findMax);
console.log("Min là", findMin);

//1.3.
const doubleNumber = [];

numbers.forEach((value) => {
    doubleNumber.push(value * 2)
})
console.log(doubleNumber)

