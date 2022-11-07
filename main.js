/*--------------------------------------
  DOM event
  --------------------------------------
 */
// let onEvent = document.querySelector("h1");
// onEvent.onclick = function () {
//   console.log(Math.random());
// };
// document.getElementById("#heading");
// const pClick = document.getElementById("text");
// pClick.onmouseover = function () {
//   console.log(Math.random());
// };

/**
 ------------------------------------------------
 Làm việc với Array
 ------------------------------------------------
 */
var language = ["Java", "PHP", "C++"];
var language2 = ["Ruby", "Reactjs"];
// // console.log(language.join());
// console.log(language.toString());
// xóa phần tử cuối cùng của mảng và in ra độ dài của mảng
// console.log(language.pop());
// thêm phần tử vào mảng và in ra độ dài của mảng
// console.log(language.push("node js"));
// xóa phần tử đầu tiên của mảng
// console.log(language.shift());
// console.log(language);
// Thêm phần tử vào đầu mảng
// console.log(language.unshift("Python"));
// console.log(language);
//  thêm xóa phần tử vào mảng
console.log(language.splice(1, 2));
// tham số 1: vị trí đặt con trỏ, tham số 2: số lượng phần tử muốn xóa, tham số 3(có hoặc không tùy yêu cầu) : phần tử muốn thêm vào mảng
// console.log(language);
// cắt / copy phần tử của mảng
// console.log(language.slice(0));
// // nối các mảng lại với nhau
// console.log(language.concat(language2));

/**
 * Array level 2
 */
/** Array methods:
 * forEach() => duyệt qua từng phần tử
 * every() => Duyệt từng phần tử kiểm tra thỏa mãn điều kiện => tất cả các phần tử trong mảng phải thỏa mãn điều kiện thì trả về true và ngược lại (duyệt qua các phần tử của mảng khi gặp điều kiện sai thì sẽ dừng lại ko tiếp tục duyệt các phần tử còn lại)
 * some() => Duyệt qua các phần tử của mảng => chỉ cần một phần tử của mảng thỏa mãn điều kiện thì sẽ trả về giá trị là true và dừng đoạn code
 * find() => Tìm kiếm phần tử của mảng thỏa mãn điều kiện => chỉ tra về một phần tử thỏa mãn điều kiện
 * filter() => Tìm kiếm phần tử của mảng thỏa mãn điều kiện => Trả về một list phần tử thỏa mãn điều kiện
 * map() => Sửa/ thêm phần tử cho mảng => Mảng mới trả về sẽ phụ thuộc vào kết quả của function được khai báo với cú pháp "map(function)""
 * reduce()
 */
let courses = [
  {
    id: 1,
    name: "Javascrip",
    coin: 1,
  },
  {
    id: 2,
    name: "Java",
    coin: 1,
  },
  {
    id: 3,
    name: "C++",
    coin: 0,
  },
  {
    id: 4,
    name: "Java",
    coin: 100,
  },
];
// courses.forEach(function (course, index) {
//   console.log(index, course);
// });
// // let isFree = courses.every(function (course, index) {
// //   console.log(index);
// //   return course.coin === 0;
// // });
// // console.log(isFree);
// let isFree = courses.some(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);
// let isSeach = courses.find(function (course, index) {
//   console.log(index);
//   return course.name === "Java";
// });
// console.log(isSeach);
let listSeach = courses.filter(function (course, index) {
  console.log(index);
  return course.name === "Java" && course.coin === 1;
  // Đk 1                   ĐK 2
});
console.log(typeof listSeach);

// // Map
// let editCourses = courses.map(function (course, index) {
//   return {
//     id: course.id,
//     name: `Khóa học: ${course.name}`,
//     coin: course.coin,
//     coinText: `Giá: ${course.coin}`,
//   };
// });
// console.log(editCourses);
// rduce
// let courses = [
//   [
//     {
//       id: 1,
//       name: "Javascrip",
//       coin: 1,
//     },
//     {
//       id: 2,
//       name: "Java",
//       coin: 1,
//     },
//   ],
//   {
//     id: 3,
//     name: "C++",
//     coin: 0,
//   },
//   {
//     id: 4,
//     name: "Java",
//     coin: 100,
//   },
// ];
function coinHandel() {}
/*
------------------------------------------------------
Function - tham số - return -
---------------------------------------------------------
 */
// ---------- Tham số -----------
// có 2 cách khai báo function
// function data(write) {
//   console.log(write);
// }
// data("Đây là một function");

// var data2 = function (heo) {
//   // Giá trị trong () của function gọi là tham số. vd: function(tham số) {}
//   // tham số có thể có hoặc không
//   console.log(heo);
// };
// data2("Đây là function 2");
// khi tham số được gọi ra => thì nó là đối số
/**
 * Không giới hạn kiểu dữ liệu của function
 * tính private => chỉ sử dụng trong khối hàm không thể gọi ra bên ngoài khối hàm
 * Không giới hạn tham số, mỗi tham số cách nhau bằng dấu ','
 */
// in ra các phần tử theo dạng mảng
// function writeLog() {
//   console.log(arguments);
// }
// writeLog("xin chào", "hello", "ni hao", "konichiwa");

// in ra các phần tử theo dạng danh sách
// function writeLog() {
//   for (let param of arguments) {
//     console.log(param);
//   }
// }
// writeLog("xin chào", "hello", "ni hao", "konichiwa");
// ------------- return -----------
// function sum(a, b) {
//   alert("You are sure?");
//   return a > b;
// }
// let result = sum(10, 4);
// let isConfirm = confirm("you are sure?");
// console.log(result);
// console.log(isConfirm);
/* một biến được khai báo trong một function chỉ xử dụng trong phạm vi function không thể sử dụng bên ngoài function
 * có thể đặt trùng tên nhưng khi gọi hàm thì nó chỉ trả về giá trị cho function gần nhất được viết
 * Có thể định nghĩa hàm trong hàm.
 */
// function showAll() {
//   function showMe() {
//     console.log(`Hello world, i'm developper fond-end`);
//   }
//   showMe();
// }
// showAll();

/**
 * Có ba loại function
 * 1. declaration function
 * 2. Expression function
 * 3. Arrow function
 */

// 1. declaration function
// data();
// function data() {
//   // => bắt đầu bằng từ khóa function ở đầu, và được đặt tên
//   console.log("Xin chào");
// }
// // => có thể được gọi trước khi được định nghĩa hàm

// // 2. Expression function
// let data2 = function () {
//   // được gán cho một biến / được gọi theo kiều callback / đưa vào trong object với key function
//   // => có thể đặt tên hoặc không, không thể được gọi trước khi đinh nghĩa hàm
//   console.log("dev fond-end");
// };
// data2();

// 3. Arrow function

/**
 -----------------------------------------
 Object
 -----------------------------------------
 */
// let myInfo = {
//   name: "Schrodinger",
//   age: 3,
//   address: "BG, Vn",
//   weight: 4,
//   height: 25,
//   // value là function
//   getName: function () {
//     return this.name;
//   },
//   getWeight: function () {
//     return this.weight;
//   },
//   getPhone: function () {
//     return this.phone;
//   },
// };
// console.log(myInfo.getName());
// console.log(myInfo.getWeight());
// // thêm key mới cho object
// // myInfo.email = "schrodinger21@gamil.com"; // c1
// myInfo["my-email"] = "schrodinger21@gamil.com"; //c2
// myInfo.phone = "0936933xxx";
// console.log(myInfo.getPhone());
// // lây value ra ngoài
// console.log(myInfo.address); // c1
// console.log(myInfo["age"]); // c2
// // xóa một value
// delete myInfo.age;
// console.log(myInfo);

// function => phương thức (method)
// others => thuộc tính (property)

//-------------------- object constructor ---------------

let User = function (firstname, lastName, avt) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.avt = avt;
  this.getName = function () {
    return `${this.firstname} ${this.lastName}`;
  };
};

let author = new User("Schrodinger", "cute", "avt");
let user = new User("Yashita", "Thu", "avt");

console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());

/**------------------------------------
 * Câu điều kiện - statements
 * ------------------------------------*/
// 1. if / else
// let a = 5;
// if (a === 1) {
//   console.log("xin chào");
// } else if (a === 2) {
//   console.log("Hello");
// } else if (a === 3) {
//   console.log("a = 3");
// } else if (a === 5) {
//   console.log("giá trị trả về bằng 5");
// } else {
//   console.log("chr hiểu mày muốn tìm số mấy");
// }

// 2. switch / case - break(kết thúc câu lệnh) - default(kết thúc lệnh)
// let b = 3;

// switch (b) {
//   case 1:
//     console.log("là 1");
//     break;
//   case 2:
//     console.log("là hai");
//     break;
//   case 3:
//     console.log("là ba");
//     break;
//   default:
//     console.log("giá trị cần tìm???");
// }

/* khi nào nên sử dụng if/else : khi bài toán liên quan đến toán tử so sánh
 * khi nào nên sử dụng switch/case : khi bài toán đề ra cho sẵn các giá trị cần so sánh, nhưng khi bài toán cho giá trị cần so sánh <=2 case thì nên dùng câu lệnh if/else thay thế
 */
/**------------------------------------------
 * Toán tử 3 ngôi - ternary operator
 * -----------------------------------------*/
// let course = {
//   name: "Javascrip",
//   coin: 0,
// };
// console.log(typeof course);
// let result = course.coin > 0 ? `${course.coin} coin` : "Miễn phí";
// console.log(result);

// let a = 1;
// let b = 2;
// let c = a > b ? `a > b a= ${a}` : `a < b  b = ${b}`;
// console.log(c);
/**
 * 3 vế
 * vế 1: điều kiện
 * vế 2: giá trị trả về nếu điều kiện đúng
 * vế 3: giá trị trả về nếu điều kiện sai
 */

/**--------------------------------
 * Vòng lặp - Loop
 * --------------------------------*/
// 1. Vòng lặp for
// let x = 10;
// for (let i = 1; i <= x; i++) {
//   console.log(`x = ${i}`);
// }
// let myArray = ["javascript", "java", "PHP", "nodejs", "C++"];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// 2. for in
// - object
// let myInfo = {
//   name: "schrodinger",
//   age: 12,
//   address: "BG, Vn",
// };
// for (let key in myInfo) {
//   console.log(key); // lấy ra key
//   console.log(myInfo[key]); // lấy ra value
// }
// // - Array
// let language = ["java", "nodejs", "javascript"];
// for (let key in language) {
//   console.log(key); // lấy ra vị trí
//   console.log(language[key]); // lấy ra value
// }

// // - String -- sẽ lấy ra số lương chữ cái trong chuỗi => trả ra từng chữ cái trong chuỗi và vị trí từng chữ cái
// let language2 = "Javascript";
// for (let key in language2) {
//   console.log(key); // số lượng phần tử
//   console.log(language2[key]); // lấy ra value tương ứng
// }
// 3. for of
//-String
// let kachi = "Javascript";
// for (let value of kachi) {
//   console.log(value);
// }
// // Array
// let kachi1 = ["js", "java", "PHP"];
// for (let value of kachi1) {
//   console.log(value);
// }
// object
// let myKachi = {
//   name: "THT",
//   age: 12,
//   address: "BG",
// };
// // Object.keys(myKachi) => chuyển object thành một mảng và lấy ra key
// for (let value of Object.keys(myKachi)) {
//   console.log(value);
// }
// // Object.values(myKachi) => chuyển object thành một mảng và lấy ra value
// for (let value of Object.values(myKachi)) {
//   console.log(value);
// }

// 4. vòng lặp while
// let myArray = ["js", "PHP", "java"];
// let i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }
// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// // 5. vòng lặp do/while
// do {
//   i++;
//   console.log("Xin chào");
// } while (i <= 3);
// 6. sử dụng break và continue
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // Vòng lặp lồng nhau
// let listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Span"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
//   }
// }
// Vòng lặp ngược
// for (let i = 50; i > 0; i--) {
//   console.log(i);
// }
// // ví dụ thêm về vòng lặp
// for (let i = 50; i > 0; i -= 5) {
//   console.log(i);
// }
/*-------------------------
callback
--------------------------*/

/**
 * Closure
 * - Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
 */
// function createCounter() {
//   let couser = 0;
//   function increase() {
//     return couser++;
//   }
//   return increase;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createApp() {
//   let cars = [];
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars);
//     },
//     delete() {
//       cars.splice(0, 1);
//     },
//   };
// }
// const app = createApp();
// app.add("x1");
// app.add("x2");
// app.add("x3");
// app.show();
// app.add("Xin chào");
// app.show();

const modal = document.getElementsByClassName("modal");
const overlay = document.getElementsByClassName("overlay");
const btnCloseModal = document.getElementsByClassName("close-modal");
const btnsOpenModal = document.querySelectorAll(`.modal-show`);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// classList property
/**
 * add: thêm class vào element => add class to elment
 * remove: xóa class trong element => remove class on element
 * contains: kiểm tra emlement có tồn tại tên class hay không => trả về giá trị true hoặc false.
 * toggle: thêm class vào element nếu chưa trong element chưa có class này và xóa class nếu nó đã tồn tại trong element
 */

/**
 * JSON : là một định dạng dữ liệu
 *        JavaScript Object Notation
 *        Number, String, Null, Array, object, Boolean
 */
// Stringify: chuyển đổi kiểu dữ liệu từ Javascript => JSON
// Parse: chuyển đổi kiểu dữ liệu từ JSON => Javascript
// syntax:
let json = '["Javascript", "PHP", "Java"]';
let json2 = '{"name": "Yashita", "age": 18}';
console.log(typeof JSON.parse(json));
console.log(JSON.parse(json2));

let jav = ["javascript", "php", "nodejs"];
console.log(JSON.stringify(jav));
console.log(jav);
// Bài tập thêm
const str = '{"name": "Yashita", "age": 18}';
const obj = JSON.parse(str);
console.log(obj);
obj.name = "Schrodinger21";
console.log(obj);

//Trong JSON, đối tượng date là không được phép do đó JSON.stringify() sẽ chuyển đổi ngày bất kì thành chuỗi.
const day = { name: "yashita", date: new Date(), age: 18 };
const js = JSON.stringify(day);
console.log(js);
/*
Lưu ý:
* function không được phép làm giá trị của một object, do đó JSON.stringify sẽ xóa function ra khỏi giá trị của Javascript
* Muốn giữ lại function thì cần phải chuyên đổi kiểu dữ liệu của function => String sau đó sử dụng JSON.stringify
*/
console.log("sử dụng JSON khi obj chứa function");
const today = {
  name: "yashita",
  birth: function () {
    return 2022 - 10 - 25;
  },
  age: 18,
};
const objtoday = JSON.stringify(today);
console.log(objtoday);

// chuyển đổi type của function
today.birth = today.birth.toString();
console.log(JSON.stringify(today));

localStorage.setItem("fullName", "Schrdinger");
localStorage.getItem("fullName");
