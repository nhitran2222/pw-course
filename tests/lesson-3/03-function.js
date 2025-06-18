//1
function multiply(a, b) {
    console.log(a, b);
};
multiply(10, 20);

//2.
function findMin(a, b, c) {
    console.log(Math.min(a, b, c));
};

findMin(1, 5, 6);
findMin(1111, 52.2, 99);

//3.
const students = [
    { name: "Nhi", score: 10 },
    { name: "Hoa", score: 9 },
    { name: "Le", score: 1 },
    { name: "Ngan", score: 6 },
    { name: "Nguyen", score: 10 }
]

let threshold = 8;

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)
}

function getTopStudents(students, threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            console.log(`${students[i].name} đạt danh hiệu học sinh giỏi`)
        } else {
            console.log(`${students[i].name} đạt danh hiệu học sinh khá`)
        }
    }
}

getTopStudents(students, threshold);

//4.
function calculateInterest(principal, rate, years) {
    console.log(`Số tiền nhận được sau ${years} năm là:`, principal + ((principal * rate * years) / 100));
}

calculateInterest(5000, 5, 10);