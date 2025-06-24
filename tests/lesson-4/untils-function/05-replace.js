const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

//Replace
//1
console.log(phoneNumber.replace(" ","."));  //replace khoảng trắng đầu tiên
console.log(phoneNumber.replace(/ /g,"."));  //dùng replace với regex có cờ g (global):


//2
console.log(report.replace("lỗi","bug"));

//3
console.log(numbersStr.replace(/,/g,"."));




