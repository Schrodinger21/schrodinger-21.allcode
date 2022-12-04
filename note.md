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
- textContent:
