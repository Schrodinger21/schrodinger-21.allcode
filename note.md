1. Callback và Closure

- Callback là một hàm được truyền qua đối số và được gọi lại trong hàm nhận đối số.
- Closure là một hàm nhớ tất cả các biến đã tồn tại.

2. Scope chain

- có 3 loại scope:

* global: biến toàn cục: có thể truy cập ở tất cả mọi nơi trong chương trình.
* Function scope: Được khai báo bên trong một function và chỉ có giá trị sử dụng bên trong phạm vi mà nó được khai báo.
* block scope: Biến chỉ có giá trị trong cặp ngoặc nhọn. chỉ áp dụn được cho biến let.

3. var, let, const

- Var:

* được hiểu như là một biến toàn cục có thể truy cập được ở mọi nơi trong chương trình.
* Nó có thể được gọi đến trước khi được khai báo nhờ vào hoisting.

- let: khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.
- const:

* được sử dụng để khai báo 1 hằng số
* khi khai báo cần gắn giá trị, giá trị sẽ không được thay đổi.

4. Function

- Có 3 loại function
- Declation function: Bắt đầu bằng từ khóa function và có thể được gọi đến trước khi được khai báo.
- Expresstion function:

* được gán cho một biến và được gọi theo kiểu callback hoặc là cũng có thể được đưa vào trong một object với key là function.
* Không hể gọi đến trước khi nó được định nghĩa.

- Arrow function:

* code ngắn gọn dễ hiểu hơn
* Không có từ khóa this.

5. Dom

- Document Object Model

* Element
* Attribute
* Text
  => Giúp ta có thể lấy ra, thay đổi, thêm, xóa các phần tử của HTML.

- Cách lấy ra Element trong HTML:

* getElementById() => lấy ra phần tử bằng cách chọc vào id
* getElementsByClassName() => Lấy ra các phần tử bẳng cách chọc vào class.
* getElementsByTagName() => Lấy các phần tử thông qua thẻ tag
* querySelector() =>
* querySelectorAll() =>
* HTML collection
* document.write

- Method:

* thêm Element:

- document.createElement() => thêm thẻ tag
- document.createTextNode() => thêm nội dung của thẻ

* Xóa element:
  - document.getElementById(id).remove
  - document.querySelector(id/class).remove

Thêm nội dung vào Dom

- innerHTML:
- textContent: Tạo ra 1 nút văn bản

-----------------------Giải đề cương--------------------------
Đề 1:

1. Nêu khái niệm về biến và các kiểu dữ liệu trong JavaScript.

- Khái niệm về biến:

* Biến được dùng để lưu trữ giá trị và các giá trị này sẽ được sử dụng lại nhiều lần.
* Để lưu trữ một giá trị vào biến thì ta cần khai báo và gán giá trị cho biến đó.
* Để khai báo một biến thì sẽ dùng từ khóa Var, let, const.

- Dữ liệu trong js:

* dữ liệu nguyên thủy: string, double, boolean, number,...
* Dữ liệu phức tạp: object, array, function...

2. Nêu được khái về DOM và DOM Manipulation

- Khái niệm: DOM viết tắt của từ Document Object Model
  gồm 3 thành phần chính: Element, Attribute, Text
  DOM được dùng để truy xuất các tài liệu dạng HTML và XML có dạng một cây cấu trúc dữ liệu.

- Truy xuất vào DOM

* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* queryselector()
* queryselectorAll()
* HTML collection

3. Nắm được các khái niệm như JS engine. JS runtime, Web API, Callback queue.

- JS engine:

* Là một chương trình thực thi code javascript.
* Bất kì một js eengine nào cũng chứa callstack và heap.
* callstck là nơi code được thực thi bằng cách sử dụng Execution context.
* heap là một vùng nhớ không có cấu trúc, lưu trữ tất cả các đối tượng.

- js runtime:

* như một thùng chứa, để chứa tất cả những thứ cần thiết để sử dùng js, Web APIs, js engine, callback queue.

- Web APIs:

* là một phương thức cho phép các ứng dụng khác nhau có thể giao tiếp dữ liệu qua lại.
* Dữ liệu của web apis thường trả về dưới dạng Json hoặc XML thông qua giao thức HTTP hoặc HTTPS.
* Web apis hỗ trợ đầy đủ các phương thức: get/ post/put/delete dữ liệu.

- Callback queue:

* là cấu trúc dữ liệu chứa tất cả các hàm callback sẵn sàng để thực thi.
* khi một event xảy ra thì hàm callback sẽ được đặt vào trong callback queue và khi stack rỗng thì callback sẽ được đặt vào và trong stack và thực thi quá trình này xảy ra theo cơ chế event loop.

4. Vận dụng được các phương thức gọi hàm như call, apply và bind.

- call:

* là một phương thức có sẵn của js
* đối số đầu tiên là đối tượng mà ta muốn this trỏ tới

- đối số tiếp theo là đối số mà ta muốn truyền vào hàm gốc.

* apply:

- tương tự như call.
- Đối số đầu tiên cũng là đối tượng nà ta muốn this trỏ tới.
- khi truyền vào đối số thứ hai thì ta phải truyền dưới dạng 1 array.

* bind:

- xác định this cho function tương tự như call.
- nó không trả về giá trị ngay mà trả về một function mới.

* Điểm khác nhau:

- bind: nó không trả về giá trị ngay mà trả về một function mới

* call: Trả về giá trị, các đối số có thể truyền lần lượt.
* apply: Trả về giá trị, nhưng khi truyền vào đối số thì ta phải truyền dưới dạng một array

5. Khai báo được ES6 Class

- class: giống như một bản thiết kế để tạo ra đối tượng.

* Khi khai báo 1 class thì bắt đầu bằng từ khóa class.
* Ta dùng từ khóa constructor để khai báo thuộc tính và phương thức của đối tượng.
* Khi gọi đến class ta sẽ dùng đến toán tử new.

6. Sử dụng được Promises và Fetch API

- Promise: Là một cơ chế cho phép thực hiện các tác vụ bất đồng bộ

* 3 trạng thái: Pending(chờ), fulfilled(thành công), reject (thất bại)
* 2 dạng trả về kết quả: Resolve (thành công) trả về qua phương thức .then() và reject(thất bại) trả về qua phương thức .catch()
  => prosime sinh ra đê giải quyết vấn đễ callback hell.

- Fetch API:

* Là một API đon giản cho việc gửi và nhận requesst bằng js.\
* Sử dụng fecth api giúp việc thực hiện yêu cầu web và xử lý đơn giản dễ dàng hơn XMLHttpRequesst cũ.

Ví dụ
const useFetch = "https://jsonplaceholder.typicode.com/posts";
fetch(useFetch)
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

# Đề 2

1. Hiểu được nguồn gốc ra đời, lịch sử phát triển các phiên bản cũng như đặc trưng của ngôn ngữ lập trình JavaScript
2. Sử dụng XMLHttpRequesst.

const url = "https://jsonplaceholder.typicode.com/users";
const xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.send();
xhttp.onreadystatechange = function () {
if (xhttp.status === 200) {
console.log(xhttp);
}
};

3. This là gì. Áp dụng this.

- This: là một biến đặc biệt tạo ra trong mọi ngữ cảnh thực thi và cho mọi function.

* this trỏ tới giá trị của hàm cha nơi mà this được gọi.
  Loại ngữ cảnh của this.
* global context: Mặc định khi không khai báo gì thì this sẽ là đối tượng WD trong trình duyệt hoặc là global trong Nodejs
* normal function:
  non-Stict mode: this là WD hoặc global
  stric-mode: this lại undifined.
* Arrow function: this là WD

- this trong method: this sẽ trỏ đến đối tượng mà nó được gọi

Ví dụ:

const student = {
name: "Mon",
age: 18,
showStudent: function () {
console.log("Tên sinh viên: ", this.name);
},
};
student.showStudent();

4. Hiểu được khái niệm về OOP và 4 đặc trung cơ bản của OOP trong JS.
   OOP:

- Là mô hình dựa trên khái niệm đối tượng, mô hình này sẽ quyđịnh phong cách code, cách viết và cách tổ chức code.
- Sử dụng để mô hình hóa đối tượng thực tế trong cuộc sống.
- Các đoạn khối mã đọc lập với nhau, nhưng chúng sẽ tương tác với nhau.
- có tính linh hoạt, dễ quản lý cấu trúc và dễ bảo trì code.

* 4 đặc trưng:

- trừu tượng: bỏ đi hoặc ẩn đi những chi tiết không quan trọng => sẽ có cái nhìn tổng quan về những gì mà chúng ta đang triển khai.
- Đóng gói: là nó sẽ giữ lại một số thuộc tính và cách phương thức private để chúng không được truy cập từ bên ngoài class.
- Kế thừa: class con được kế thừa lại tất cả các phương thức và thuộc tính của class cha. nó tạo thành một hệ thống phân cấp.
- đa hình: class con có thể ghi đè phương thức mà nó được kế thừa từ class cha.
- các cách kế thừa trong class

5. Async/await
   Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API
   Khi có await buộc phải nằm trong phương thức async
   Khi có từ khoá await thì hành động sẽ phải chờ cho đến khi thực hiện xong

- Async luôn trả về một promise.
- Handle error với try/catch
- Cú pháp ngắn gọn và được sử dụng nhiều hơn promise.

ví dụ:
async function getUser() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
} catch (err) {
console.log(err);
}
}
getUser();
