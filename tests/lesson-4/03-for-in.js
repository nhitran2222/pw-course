const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
};


//3.1.
for (let property in student) {
    console.log(`${property}:${student[property]}`);
};

//3.2.
const numberArr = [];
let sum = 0;
for (let property1 in student) {
    if (typeof student[property1] === "number") {
        numberArr.push(student[property1]);
    }
}
console.log(numberArr);

for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
}

console.log("Giá trị tổng 2 số có type là number:", sum)

//3.3
const attribute = [];
for (let key in student) {
    attribute.push(key);
};

console.log(attribute)