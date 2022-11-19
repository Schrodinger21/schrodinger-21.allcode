1.  Asynchronous JavaScript, callBack, async await, promise

- Đồng bộ( Synchronous): chương trình sẽ chạy theo tùng bước, và chỉ khi bước 1 thực hiện xong thì bước hai mới được thực hiện. Khi chương trình chạy xong mới nhảy sang chương trình khác.

* Điểm mạnh: chương trình sẽ chạy theo đúng thứ tự và đúng nguyên tắc => không mắc phải các lỗi về tiến trình không cần thiết.
  Khi có lỗi thì sẽ biết ngay lỗi tại đâu và từ đó có thể dễ dàng khắc phục.
* Điểm yếu: Chương trình sẽ mất thời gian chờ đợi => tràn bộ nhớ

- Bất đồng bộ(Asynchronous):

* Điểm mạnh:
  Việc thực thi không phải đợi một task bất đồng bộ phải thực hiện xong.
  Code ở luồng chính không bị chặn.
  Bất đồng bộ là code sẽ được thực thi sau khi một task chạy ở background kết thúc.
* Nhược điểm: Chương trình đòi hỏi có quy trình thì sẽ không thể xử dụng async.

# 3 cách sử lý bất đồng bộ.

. callback:

- là hàm(function)
- được truyền qua đối số
- Được gọi lại trong hàm nhận đối số.

. promise: 3 trạng thái

- Pending: đang chờ
- fulfilled: thành công
- reject: thất bại

. async await:

2. DOM: cấu tạo gồm 3 phần

- Attribute
- Element
- Text

3. Variable và block Scope:

- global: có thể truy cập ở khắp nơi.
- block: chỉ có thể truy cập ở phạm vị biến được khai báo.

4. function:
   là tập hợp các đoạn mã dùng để thực hiện một nhiệm vụ nào đó.
   Nó được tái sử dụng nhiều lần.

# 3 loại

- Arrow function(hàm mũi tên):
  giúp viết code ngắn gọn, dễ hiểu.
- Declation function(De cơ rây sừn):
  bắt đầu bằng từ khóa function ở đầu và được đặt tên.
  có thể được gọi trước khi định nghĩa hàm.
- Expresstion function:
  Được gán cho một biến / được gọi theo kiểu callback/ được đưa vào trong object với key function.
  Có thể đặt tên hoặc không và không thể được gọi trước khi nó được định nghĩa.

5. JSON: Là một định dạng kiểu dữ liệu

- Stringify: chuyển đổi dữ liệu từ javascript sang JSON
- Parse: chuyển đổi từ JSON sang javascript

6. Data type.

- kiểu dữ liệu nguyên thủy: int, float, double,...
- kiểu dữ liệu phức tạp: object, array, function...

* Array methd:
  map
  find
  filter
  concat
  join
  pop
  forEach
  splice
  slice
  include

7. closure
   Là môt hàm có thể ghi nhớ nơi mà nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó.
