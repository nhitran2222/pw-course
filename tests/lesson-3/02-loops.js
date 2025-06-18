//1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

//2.
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//3.
const oddNumber = [];     //tạo mảng rỗng

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        oddNumber.push(i)  //.push(i) để thêm value i vào mảng đã tạo
    };
};

console.log(oddNumber);


//4.
const userName = ["Nhi", "Hoang", "Lam", "Chi", "Mai", "Thu", "Chau", "Anh", "Man", "Hoa"];
const ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < userName.length; i++) {
    console.log(`${userName[i]}${ordinalNumber[i]}@gmail.com`);
};

//5.
// const revenue1 = {
//     "month": 1,
//     "total": 100
// };

// const revenue2 = {
//     "month": 2,
//     "total": 100
// };

// const revenue3 = {
//     "month": 3,
//     "total": 100
// };

// const revenue4 = {
//     "month": 4,
//     "total": 100
// };

// const revenue5 = {
//     "month": 5,
//     "total": 100
// };

// const revenue6 = {
//     "month": 6,
//     "total": 100
// };

// const revenue7 = {
//     "month": 7,
//     "total": 100
// };

// const revenue8 = {
//     "month": 8,
//     "total": 100
// };

// const revenue9 = {
//     "month": 9,
//     "total": 100
// };

// const revenue10 = {
//     "month": 10,
//     "total": 100
// };

// const revenue11 = {
//     "month": 11,
//     "total": 100
// };

// const revenue12 = {
//     "month": 12,
//     "total": 100
// };

// let revenueArr = [];

// revenueArr.push(revenue1.total);
// revenueArr.push(revenue2.total);
// revenueArr.push(revenue3.total);
// revenueArr.push(revenue4.total);
// revenueArr.push(revenue5.total);
// revenueArr.push(revenue6.total);
// revenueArr.push(revenue7.total);
// revenueArr.push(revenue8.total);
// revenueArr.push(revenue9.total);
// revenueArr.push(revenue10.total);
// revenueArr.push(revenue11.total);
// revenueArr.push(revenue12.total);

// console.log(revenueArr);

// let sumRevenue = 0;

// for (let i = 0; i < revenueArr.length; i++) {
//     sumRevenue += revenueArr[i];
// }

// console.log("Tổng doanh thu 12 tháng =", sumRevenue);


const revenueArr = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 1111 },
    { month: 4, total: 5672 },
    { month: 5, total: 12 },
    { month: 6, total: 4789 },
    { month: 7, total: 33 },
    { month: 8, total: 99 },
    { month: 9, total: 256 },
    { month: 10, total: 1732 },
    { month: 11, total: 2906 },
    { month: 12, total: 5646546 }
]

let totalRevenue = 0;

for (let i = 0; i < revenueArr.length; i++) {
    totalRevenue += revenueArr[i].total;
};

console.log("Tổng doanh thu 12 tháng =", totalRevenue);