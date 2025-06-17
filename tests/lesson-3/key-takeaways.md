# LESSON 3: Git & Basic JS (continue)

## I. Git
1. Undo actions.
- `git commit --amend -m "message"`   → Sửa lại commit message gần nhất.
- `git restore --staged <file>`  → Gỡ file khỏi Staging, đưa về Working Directory.
- `git reset HEAD~1` → Hủy commit gần nhất, đưa về Staging.

2. Branching Model.
- `git branch <branch-name>`  → Tạo nhánh mới.
- `git checkout <branch-name>`  → Chuyển sang nhánh mới.
- `git checkout -b <branch-name>`   → Tạo và chuyển sang nhánh mới.

3. .gitignore file: dùng để bỏ qua các file không cần git theo dõi.
- `ignore file <file-name>`  → Thêm file vào folder ignore.
- `ignore file <folder-name>`  → Thêm folder vào folder ignore.

## II. Javascript.
1. Conventions.

    | Conventions | Usage     |
    |-------------|-----------|
    | snake_case  | chưa dùng |
    | kebab-case  | Tên file  |
    | camelCase   | Tên biến  |
    | PascalCase  | Tên class |

2. Formatted console.log.
    ```
    console.log("Nhi Tran");
    console.log('Nhi ne');

   let name = "Nhi"
   console.log(`Toi la ${name});
   console.log("Toi la" + name);

3. Object: lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số.
    
    __let/const <tên biến> = {
        <thuộc tính> : <giá trị>
    }__

    ```
    example:
    let user = {
        "name" : "Nhi",
        "age" : 25,
        "email" : "tttnhi.fw@gmail.com"
    }

    const product = {
    "name": "Laptop",
    "price": 500,
    "isWindow": true,
    "manufacturer": {
        "name": "Acer",
        "year": 2024
        }
    }

- console.log("name = " + user.name);
- console.log("manufacturer name = " + product.manufacturer.name);
- console.log("price = ", product["price"]);
- console.log("year = ", product["manufacturer"]["year"]);


4. Array.
    ```
    const arr = [1,2,3,4,5];
    const str = ["nhi", "nhan", "mai", "hoa", "huyen"];

console.log(arr.length): lấy độ dài của mảng.
console.log(arr[0]): lấy giá trị theo index.