# 1. Asynchronous JavaScript, callBack, async await, promise

- Đồng bộ( Synchronous):
  Chương trình sẽ chạy theo tùng bước, và chỉ khi bước 1 thực hiện xong thì bước hai mới được thực hiện.
  Khi chương trình chạy xong mới nhảy sang chương trình khác.

* Điểm mạnh:
  chương trình sẽ chạy theo đúng thứ tự và đúng nguyên tắc => không mắc phải các lỗi về tiến trình không cần thiết.
  Khi có lỗi thì sẽ biết ngay lỗi tại đâu và từ đó có thể dễ dàng khắc phục.
* Nhược điểm:
  Chương trình sẽ mất thời gian chờ đợi => tràn bộ nhớ

- Bất đồng bộ(Asynchronous):
  Cần gửi request lên server hoặc truy xuất dữ liệu từ database.

* Điểm mạnh:
  Việc thực thi không phải đợi một task bất đồng bộ phải thực hiện xong.
  Code ở luồng chính không bị chặn.
  Bất đồng bộ là code sẽ được thực thi sau khi một task chạy ở background kết thúc.
* Nhược điểm: Chương trình đòi hỏi có quy trình thì sẽ không thể xử dụng async.

# 3 cách sử lý bất đồng bộ.

- callback:

* là hàm(function)
* được truyền qua đối số
* Được gọi lại trong hàm nhận đối số.

=> Khi sử dụng callback sẽ gặp phải trường hợp callback hell.

- promise(Lời hứa):
  3 trạng thái

* Pending: đang chờ
* fulfilled: thành công
* reject: thất bại

=> trả về phương 3 phương thức.
(.then => thành công(resolve )
.catch => thất bại(reject)
.finally => khi trả về một trong hai kết quả(có thể có hoặc không)
)

- async/await: Giúp cấu trúc xử lý chương trình bất đồng bộ giống với xử lý đồng bộ.

* async:
  khai báo một chương trình bất đồng bộ với từ khóa "async"
  Biến một hàm thông thường thành promise.
  Dù thành công hay thất bại thì hàm cũng trả về kết quả.

- await:
  Tạm dừng các hàm async.
  khi được đặt trước promise thì nó sẽ đợi cho đến khi promise kết thúc và trả ra kết quả.
  Nó chỉ hoạt động với promise
  Chỉ có thể sử dụng được bên trong function async
  => async/await cho phép bắt các lỗi không mong đợi bằng cách sử dụng try/catch.
  // Ví dụ:
  async function doSomethingAsync(){
  try {
  // This async call may fail.
  let result = await someAsyncCall();
  }
  catch(error) {
  // If it does we will catch the error here.
  }  
   }

# 2. DOM: Document Object Model

- cấu tạo gồm 3 thành phần

* Element: thẻ tag trong file HTML
* Attribute: thuộc tính
* Text

- HTML DOM:
- DOM API:
- DOM event:

# 3a. Variable:

Được coi là một thùng chứa có tên chứa dữ liệu được đưa vào.

- var: khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục.
- let: khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.
- const: được sử dụng để khai báo 1 hằng số, khi khai báo cần gắn giá trị, giá trị sẽ không được thay đổi.

# 3b: Block scope:

- global scope: được khai báo bên ngoài hàm có thể truy cập ở khắp nơi( ngoài hàm, trong hàm)
- local scope: được khai báo bên trong hàm và chỉ có thể truy cập ở phạm vị biến được khai báo.

# 4. function:

là tập hợp các đoạn mã dùng để thực hiện một nhiệm vụ nào đó.
Nó được tái sử dụng nhiều lần.

3 loại

- Arrow function(hàm mũi tên):
  giúp viết code ngắn gọn, dễ hiểu.
- Declation function(De cơ rây sừn):
  bắt đầu bằng từ khóa function ở đầu và được đặt tên.
  có thể được gọi trước khi định nghĩa hàm.
- Expresstion function:
  Được gán cho một biến / được gọi theo kiểu callback/ được đưa vào trong object với key function.
  Có thể đặt tên hoặc không và không thể được gọi trước khi nó được định nghĩa.

# 5. JSON: Là một định dạng kiểu dữ liệu

- Stringify: chuyển đổi dữ liệu từ javascript sang JSON
- Parse: chuyển đổi từ JSON sang javascript

# 6. Data type.

- kiểu dữ liệu nguyên thủy: int, float, double,...
- kiểu dữ liệu phức tạp: object, array, function...

# 7. closure

Là môt hàm có thể ghi nhớ nơi mà nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó.

# 8. Toán tử - và độ ưu tiên.

- Toán tử Số học: Cộng(+), trừ(-), Nhân(\*), chia(/), chia lấy dư(%), lũy thừa(\*\*)...
- Toán tử gán:
- toán tử so sánh: trả về kiểu dữ liệu bolean(true/false)
- Toán tử logic: and(&&), or(||), not(!)
- Toán tử chuỗi:
- Toán tử 3 ngôi:
  .....

# 9. Vòng lặp(loop)

- for:

* for of:
* for in

- while
- do/while
- break
- continue

# 10. if/else - switch

Câu lệnh điều kiện.

- khi nào nên sử dụng if/else :

* khi bài toán liên quan đến toán tử so sánh

- khi nào nên sử dụng switch/case :

* khi bài toán đề ra cho sẵn các giá trị cần so sánh, nhưng khi bài toán cho giá trị cần so sánh <=2 case thì nên dùng câu lệnh if/else thay thế

# 11. Object(đối tượng)

- Đại diện cho môt thực thể:

* property: chứa các thông tin về thuộc tính
* method: những hành vi của đối tượng

# 12. Array methd:

- push(): thêm phần tử vào mảng và in ra độ dài của mảng
- concat(): Nối các phần tử của mảng
- join()
- pop(): xóa phần tử cuối cùng của mảng và in ra độ dài của mảng
- splice(): xóa phần tử của mảng(nhận vào 2 tham số)
- slice(): Cắp/copy phần tử của mảng
- includes: Method này giúp các bạn check sự tồn tại của item nào trong mảng, cà đương nhiên nếu bạn muốn

- forEach() => duyệt qua từng phần tử
- every() => Duyệt từng phần tử kiểm tra thỏa mãn điều kiện => tất cả các phần tử trong mảng phải thỏa mãn điều kiện thì trả về true và ngược lại (duyệt qua các phần tử của mảng khi gặp điều kiện sai thì sẽ dừng lại ko tiếp tục duyệt các phần tử còn lại)
- some() => Duyệt qua các phần tử của mảng => chỉ cần một phần tử của mảng thỏa mãn điều kiện thì sẽ trả về giá trị là true và dừng đoạn code
- find() => Tìm kiếm phần tử của mảng thỏa mãn điều kiện => chỉ tra về một phần tử thỏa mãn điều kiện
- filter() => Tìm kiếm phần tử của mảng thỏa mãn điều kiện => Trả về một list phần tử thỏa mãn điều kiện
- map() => Sửa/ thêm phần tử cho mảng => Mảng mới trả về sẽ phụ thuộc vào kết quả của function được khai báo với cú pháp "map(function)""
- reduce()

# 13. OOP - Lập trình hướng đối tượng

- Là mô hình dựa trên khái niệm đối tượng, mô hình này sẽ quyđịnh phong cách code, cách viết và cách tổ chức code.
- Sử dụng để mô hình hóa đối tượng thực tế trong cuộc sống.
- Các đoạn khối mã đọc lập với nhau, nhưng chúng sẽ tương tác với nhau.
- Tương tác giữa chúng xảy ra công khai - public interface(API) => các phương thức code bên ngoài có thể truy cập và sử dụng.
- có tính linh hoạt, dễ quản lý cấu trúc và dễ bảo trì code.
- 4 đặc tính:

* Trừu tượng
* Đóng gói
* Kế thừa
* Đa hình

# 14. Execution Context, Call Stack

# 15.
