const { count } = require("console");

const str = "Playwright";
//[P,l,a,y,w,r,i,g,h,t]

//2.1

for (let value of str) {
    console.log(value)
}

//2.2
const strArray = [];
let result = "";

for (let i = 0; i < str.length; i++) {
    strArray.push(i);
    strArray.sort((a, b) => b - a);
};

for (let value of strArray) {
    result = result + str[value]
}

console.log(result);

//2.3.
/**
 * hướng dẫn:
Lưu tất cả vị trí của 3 vào 1 mảng indexes.
Sau đó in ra indexes[0] Và indexes[indexes.length -1]
 */
const arr = [1, 2, 3, 4, 3, 55, 23];
const indexes = [];
const target = 3;
let i = 0;

for (let value of arr) {
    if (value === target) {
        indexes.push(i);
    }
    i++;
}

console.log(indexes)
console.log("Vị trí đầu tiên:", indexes[0]);
console.log("Vị trí cuối cùng:", indexes[indexes.length - 1]);


//2.4.
/**
 * tạo 1 object counts= {} mới để lưu số lần lặp của value;
 * khi value (1,2,3) xuất hiện lần đầu thì counts[value] chưa có --> gán 1 cho value đó --> counts[value] = 1
 * nếu value có xuất hiện trc đó rồi --> + 1 cho value đó --> counts[value] = counts[value] +1
 */
const dupArr = [1, 2, 3, 1, 2, 4, 5];
const counts = {};
const result1 = [];

//đếm số lần xuất hiện:
for (const value of dupArr) {
    if (counts[value] === undefined) { //counts[value] chưa xuất hiện lần nào thì là undefined
        counts[value] = 1;
    } else {
        counts[value] = counts[value] + 1
    }
};

//kiểm tra index === 1 hay ko, nếu có push vào mảng result1
console.log(counts)
for (const index in counts) {
    if (counts[index] === 1) {
        result1.push(Number(index));
    }
}

console.log(`Các số xuất hiện một lần: ${result1[0]}, ${result1[1]}, ${result1[2]}`)