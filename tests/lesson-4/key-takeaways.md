# LESSON 3: Javascripts

## I. Phạm vi của biến var và let.

1. var.
    ```
    for (var i = 0; i < 5; i++) {
        console.log(i);    //0,1,2,3,4 
    }

    console.log("i la", i);  //5
    ```
    → Vì `var` là biến global (không bị giới hạn bởi block {}) nên i vẫn tồn tại bên ngoài. → khó kiểm soát và KHÔNG khuyến khích dùng.

2. let.
    ```
    for (let i = 0; i < 5; i++) {
        console.log(i);    //0,1,2,3,4 
    }

    console.log("i la", i);  //i is not defined.

    ```
    → `let` chỉ tồn tại trong block {}, ra ngoài là biến bị xóa nên khi gọi i ngoài vùng {} thì sẽ hiện lỗi → dễ kiểm soát và nên dùng.

3. Hoisting.
    ```
    //var
    console.log(a);  //undefined.
    var a = 5;  

    //let
    console.log(b);  //lỗi
    let b = 5; 
    ```

    → let chặt chẽ hơn var rất nhiều, nên dùng let để giảm được lỗi code về hoisting phạm vi của biến.

## II. Condition advanced.
1. `if...else`
    ```
    if (condition) {
        //run code when condition = true.
    } else {
        //run code when conditon = false.
    }.
2. `if...else if`
    ```
    if (condition1) {
        //run code when condition1 = true.
    } else if (condition2) {
        //run code when conditon2 = true.
    } else {
        //run code when all conditions = false.
    }
3. `switch...case`: khi cần kiểm tra nhiều giá trị khác nhau của 1 biến hoặc một biểu thức.
    ```
    swicth (bieu_thuc) {
        case gia_tri_1:
            //run code
            break;
        case gia_tri_2:
            //run code
            break;
        case gia_tri_3:
            //run code
            break;
        default:
            //run code
    }

    vd.
    let ngay = 25;
    switch (ngay) {
    case 20:
        console.log("thứ 6");
        break;
    case 21:
        console.log("thứ 7");
        break;
    case 22:
        console.log("chủ nhật");
        break;
    default:
        console.log("thứ nào cũng khổ");
    };

## III. === và !=.
```
const result = "5" === 5; //false → so sánh giá trị + kiểu dữ liệu → so sánh chặt chẻ.
const result1 = "5" == 5; //true → convert từ string sang number rồi so sánh với nhau → so sánh lỏng lẻo.
```

## IV. Advance loops.
1. `for...in:` 
- Dùng để lặp thuộc tính (key & value) trong Object.
- Dùng để lặp các giá trị index trong array.

    ```
    //Object
    let product = {
        Banana: 20,
        Apple: 30,
        Orange: 45,
        "Nải chuối": 75
    }

    for (let property in product) {
        console.log(property); //Banana Apple Orange "Nải chuối"
        console.log(product[property]); //20 30 45 75
    }

    //Array
    const arr = [1, 2, 3, 4];

    for (let i in arr) {
        console.log(i) //0 1 2 3
        console.log(arr[i]) //1 2 3 4 
    }
    ```
2. `forEach()`:  Dùng để lặp qua từng phần tử (giá trị) trong mảng, kèm theo index.
    ```
    array.forEach((value, index) => {
        //logic code
    })

    let nums = [10, 20, 30, 40]

    nums.forEach((value,index) => {
        console.log(index, value);
    })

3. `for...of`: dùng để lặp qua các phần tử ở trong mảng.
    ```
    let nums = [10, 20, 30, 40]
    nums.forEach((value,index) => {
        console.log(index, value);
    })

    for (let value of nums) {
        console.log(value) //10, 20, 30, 40
    }

#### SUMARY.
- `for...in` → dùng cho object và array → lấy key/index + value
- `forEach()` → dùng cho array → lấy value + index
- `for...of` → dùng cho array → lấy value trực tiếp

4. `Break and Continue`
- Continue:     
    - bỏ qua vòng lặp, chạy đến vòng lặp tiếp theo khi gặp continue.
    - nếu gặp continue thì bỏ qua vòng lặp phía dưới và chạy tới vòng lặp tiếp theo.

    ```
    for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    };
    console.log(i) //1,3,5
    }

    /*
    i = 1; i ko chia het cho 2, ko vao continue --> vào console.log in ra 1
    i = 2; i chia hết cho 2, vào continue, chạy tiếp vòng lặp
    i = 3; i ko chia hết cho 2, ko vào continue --> vào console.log in ra 3
    i = 4, i chia hết cho 2, vào continue, chạy tiếp vòng lặp
    i = 5, i ko chia hết cho 5, ko cào continue --> vào console.log in ra 5
    */

- Break: khi gặp thì sẽ thoát ra khỏi vòng lặp.
    ```
    for (let i = 1; i <= 5; i++) {
        if (i % 2 === 0) {
            break;
        };
        
        console.log(i) //1
    }
    

    /*
    i = 1; i ko chia het cho 2, ko vao break --> vào console.log in ra 1
    i = 2; i chia hết cho 2, vào break, thoát
    */

## V.String utils function.

| Hàm             | Chức năng ngắn gọn                                                                             |
|-----------------|------------------------------------------------------------------------------------------------|
| `trim()`        | Xoá khoảng trắng đầu và cuối chuỗi                                                             |
| `toLowerCase()` | Chuyển chuỗi thành chữ thường                                                                  |
| `toUpperCase()` | Chuyển chuỗi thành chữ in hoa                                                                  |
| `includes()`    | Kiểm tra chuỗi có chứa đoạn con hay không                                                      |
| `replace()`     | Thay thế đoạn trong chuỗi                                                                      |
| `split()`       | Cắt chuỗi thành mảng theo ký tự phân tách                                                      |
| `substring()`   | Cắt một phần chuỗi từ vị trí start đến end (vị trí index của chuổi sẽ giống mảng bắt đầu từ 0) |
| `indexOf()`     | Tìm vị trí xuất hiện đầu tiên của đoạn chuỗi con                                               |

```
let str = " Hello JavaScript ";

console.log(str.trim());                    // "Hello JavaScript"

console.log(str.toLowerCase());             // " hello javascript "
console.log(str.toUpperCase());             // " HELLO JAVASCRIPT "

console.log(str.includes("Java"));          // true
console.log(str.includes("java"));          // false

console.log(str.replace("Java", "Type"));   // " Hello TypeScript "

console.log(str.split(" "));                // [" ", "Hello", "JavaScript", " "]

console.log(str.substring(1, 6));           // "Hello"
console.log(str.substring(6));              // " Javascrips"

console.log(str.indexOf("Java"));           // 7 -- nếu tìm đc trả về số dương
console.log(str.indexOf("ZZZZ"));           // -1 -- nếu không tìm đc trả về -1
```

## VI.Array utils function.
| Hàm        | Chức năng ngắn gọn                                        |
|------------|-----------------------------------------------------------|
| `map()`    | Tạo mảng mới bằng cách biến đổi từng phần tử của mảng gốc |
| `filter()` | Trả về mảng mới gồm các phần tử thỏa điều kiện            |
| `find()`   | Tìm **phần tử đầu tiên** thỏa điều kiện                   |
| `reduce()` | Tính toán ra 1 giá trị duy nhất từ mảng                   |
| `some()`   | Kiểm tra **ít nhất 1** phần tử đúng điều kiện             |
| `every()`  | Kiểm tra **tất cả** phần tử đúng điều kiện                |
| `push()`   | Thêm phần tử vào cuối mảng                                |
| `shift()`  | Xoá phần tử đầu mảng                                      |
| `sort()`   | Sắp xếp mảng (theo chuỗi hoặc số, có thể custom)          |

```
let nums = [1, 2, 3, 4, 5];
let nums1 = [" 1 ", " 2 ", " 3 ", " 4 "];

let doubleNums = nums.map(num => num*2) //2,4,6,8,10
let doubleNums = nums1.map(num => console.log(num1.replace(" ", "e"))) //e1 , e2, e3, e4.
let newNums = nums.filter(num => num % 2 === 0); //[2,4]
let firstFound = nums.find(x => x > 3);   // 4
let sum = nums.reduce((total, num) => total + num, 0) //15

    //total: biến để nhận giá trị duy nhất = 0
    //num: phần tử trong mảng
    //0: giá trị khởi tạo cho biến total

    /*
    total = 0 
    total + 1 = 1 => total = 1
    total + 2 = 3 => total = 3
    total + 3 = 6 => total = 6
    total + 4 = 10 => total = 10
    total + 5 = 15 => total = 15
    */
let hasBig = nums.some(num => num % 2 === 0);       // true -- logic giống OR
let allPositive = nums.every(num => num % 2 ===0 ); // false -- logic giống AND

nums.push(6);           // Thêm 6 vào cuối
nums.shift();           // Xoá phần tử đầu (1)
nums.sort();            //sắp xếp tăng dần
nums.sort((a,b) => b - a)   // sắp xếp giảm dần (b>a)

