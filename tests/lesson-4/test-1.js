//1.
let departurePlanet = "Trái Đất";
let mission = "Khám phá vũ trụ K15";
let crew = ["Nhi", "Hoa", "Ngoc", "Loan", "Hoang"];

//cách 1:
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew[0]}, ${crew[1]}, ${crew[2]}, ${crew[3]}, ${crew[4]} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
}
let message = launchShip(crew);
console.log(message)

//cách 2:
function launchShip(crew) {
    let crewList = crew.join(", ");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
}
let message1 = launchShip(crew);
console.log(message1)

//2.
function calculateDistance(speed, time) {
    return `khoảng cách đến hành tinh bí ẩn: ${speed * time} km`;
}

console.log(calculateDistance(1000, 24));


//3.

function convertTimeToHex(time) {
    let hexadecimalNumber = time.toString(16)
    return `Thời gian ở hành tinh bí ẩn: ${hexadecimalNumber} giây.`
}

console.log(convertTimeToHex(120));

//4. không làm dc 😭

function decryptCode(code) {
    let convertStr = "";
    for (let i = 0; i < code.length; i++) {
        let character = code[i];

        if (character === character.toUpperCase()) {
            convertStr += character.toLowerCase()
        } else {
            convertStr += character.toUpperCase();
        }
    }
    console.log(convertStr);
}

decryptCode("K15 Challenge");




//5.
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!")
};

returnToEarth();