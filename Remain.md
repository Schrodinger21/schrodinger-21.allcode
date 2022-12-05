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
  => là một cơ chế cho phép thực thi các nhiệm vụ bất đồng bộ.

  promise trả về 3 trạng thái

* Pending: đang chờ
* fulfilled: thành công => thu về giá trị mà ta mong muốn
* reject: thất bại => đã xảy ra lỗi trong quá trình thực thi bất đồng bộ.

=> trả về phương 3 phương thức.
(.then => thành công(resolve )
.catch => thất bại(reject)
.finally => khi trả về một trong hai kết quả(có thể có hoặc không)
)

- async/await: Giúp cấu trúc xử lý chương trình bất đồng bộ giống với xử lý đồng bộ. giúp code ngắn gọn và dễ sử dụng.

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

- Ajax (Asynchronous Javascript And XML):
  cho phép chúng ta giao tiếp với các máy chủ web từ xa theo cách không đồng bộ.
  Cho phép truy cập dữ liệu linh động
- API (Application Programming API):
  là một phần của phần mềm có thể được sử dụng bởi một phần mềm khác, cho phép các ứng dụng nói chuyện với nhau và trao đổi thông tin.
  Như là một phần mềm độc lập cho phép các phần mềm khác tương tác với nó

# 2. DOM: Document Object Model

- HTML DOM:

* Element: thẻ tag trong file HTML
  . cách lấy element trong Dom:
  1. ID(getElementById) => lấy ra được một element
  2. class(getElementsByClassName)
  3. tag(getElementsByTagName)
  4. querySelector
  5. querySelectorAll
  6. HTML collection
  7. document.write.
* Attribute: thuộc tính
* Text:
  innerText
  textContent

- DOM API:
- DOM event:

- Thêm một Element vào HTML

* document.createElement('thẻ')
* document.createTextNode('Nôi dung của thẻ')

- Xóa một Element trong DOM

* document.getElementById(id).remove
* document.querySelector(id/class).remove

# 3a. Variable:

Được coi là một thùng chứa có tên chứa dữ liệu được đưa vào.

- var: khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục và nó có hoisting.
- let: khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.
- const: được sử dụng để khai báo 1 hằng số, khi khai báo cần gắn giá trị, giá trị sẽ không được thay đổi.

* obj có thể thay đổiđc thuộc tính bên trong.
* có thể dùng freze để ngăn cản việc thay đổi thuộc tính bên trong của obj.

# 3b: Scope: là không gian hoặc môi trường khai báo của một biến, nơi mà code có thể truy cập vào biến đó.

- global scope: được khai báo bên ngoài hàm có thể truy cập ở khắp nơi( ngoài hàm, trong hàm)
- function scope(local scope): được khai báo bên trong hàm và chỉ có thể truy cập ở phạm vị hàm mà biến được khai báo.
- block scope: là các biến được nằm trong cặp ngoặc nhọn{} có tình chất như function scope nhưng điểm khác biệt là chúng chỉ được áp dụng cho biến let

# 4. function:

là tập hợp các đoạn mã dùng để thực hiện một nhiệm vụ nào đó.
Nó được tái sử dụng nhiều lần.

3 loại

- Arrow function(hàm mũi tên):
  giúp viết code ngắn gọn, dễ hiểu. ko có từ khóa this
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

- Là một function trong function
- Truy cập được các biến trong scope chain: global, localtion, block.

* ví dụ:
  function sayHello() {
  var say = function() { console.log(hello); }
  // Local variable that ends up within the closure
  var hello = 'Hello, world!';

  return say;
  }
  var sayHelloClosure = sayHello();
  sayHelloClosure(); // ‘Hello, world!’

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

# 14. Execution Context, Call Stack, Heap

- CallStack: là nơi code được thực thi bằng cách sử dụng Execution Context. các EC sẽ được xếp chồng lên nhau và khi một EC thực hiện xong thì nó sẽ đc xóa khỏi stack => việc thực thi code này theo kiểu last in frist out.
- Heap: là một vùng nhớ (memory pool) không có cấu trúc, lưu trữ tất cả các đối tượng mà ứng dụng cần.
- Excution context: là môi trường thực thi đoạn code trong js, nơi nó được lưu trữ mọi thông tin cần thiết để code có thế thực thi như là biến toàn cục hay đối số truyền vào.

* môi trường biến
* Scope chain
* từ khóa this

# 15. Js: là ngôn ngữ lập trình bậc cao, hướng đối tượng, có cơ chế quản lý bộ nhớ, được thông dịch hoặc biên dịch(Just-in-time) đơn luồng.

- js engine:

* là chương trình mà máy tính thực thi code js.
* Bất kì một js engine cũng chứa callStack và heap

- js runtime: nơi chưas tất cả những thứ cần thiết để sử dụng js.

* Js engine
* Web APIs(là một chức năng được cung cấp sẵn cho engine): giúp nó có quyền truy cập vào các API này thông qua đối tượng global wd
* callback Queue: dữ liệu chứa các hàm callback sẵn các hàm chờ được thực thi, các hàm này được đặt vào trong stack để thực thi và quá trình này sảy ra theo cơ chế event loop.

# 16: Primitives and Objects(primitive và reference)

- Primitves(kiểu dữ liệu nguyên thủy) => đc lưu trữ trong EC trong callstack
- Reference (kiểu dữ liệu object) => được lưu trữ trong heap

- Phân biệt pass by value và pass by reference?

# 17. Cách sử dụng từ khóa this

- this chỉ tới một đối tượng mà nó đang thuộc về
- this chỉ tồn tại ở các hàm thông thường
