//1
const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};

console.log(`Năm sản xuất xe là: ${car.year}`);
console.log("Năm sản xuất xe là: " + car["year"]);

//2
const person = {
    "name": "Nhi",
    "address": {
        "street": "Hai Ba Trung",
        "city": "Hue",
        "country": "An Dong",
    }
};

console.log('tên đường là:', person["address"]["street"]);
console.log(`tên đường là: ${person.address.street}`);


//3
const student = {
    "name": "Nhi",
    "grades": {
        "math": 100,
        "english": 90
    }
}

console.log('điểm toán là:', student["grades"]["math"]);

//4
const setting = {
    "volume": 50,
    "brightness": 70
};

setting.volume = 100;
console.log(setting);

//5
const bike = {

};

bike.color = "pink";
console.log(bike);


//6
const employee = {
    "name": "Nhi",
    "age": 17
};

delete employee.name;
console.log(employee);

//7.
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

