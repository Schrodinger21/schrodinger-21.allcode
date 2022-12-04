const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     console.log(true);
//   } else {
//     console.log("Rất tiếc giá trị bạn cần tìm không có");
//   }
// }
// arr.forEach((element) => {
//   if (element === 1) {
//     console.log("Có bạn ơi");
//   }
// });
// const seach = arr.filter(function (element, index) {
//   console.log(index);
//   return element === 3;
// });
// console.log(seach);
// arr.splice(1, 4);
// console.log(arr);

const myArr = [
  {
    name: "Yashita",
    age: 18,
    food: "Pizza",
    drink: "coca cola",
  },
  {
    name: "meo",
    age: 17,
    food: "beef",
    drink: "pesi",
  },
];
console.log(myArr);

let editmyArr = myArr.map(function (elArr) {
  return {
    name: elArr.name,
    age: `${elArr.age} tuổi`,
    food: elArr.food,
    drink: elArr.drink,
  };
});
console.log(editmyArr);

const style = ["Jazz", "Blues"];

style.push("Rock-n-Roll");
console.log(style);

style.splice(1, 2, "Classic", "Rock-n-Roll");
console.log(style);

style.shift();
console.log(style);

style.unshift("Rap", "Reggae");
console.log(style);

// const sumInput = () => {
//   const myArray = [1, 2, 3, 4, 5];

//   const number = prompt("Mời nhập vào số");
//   if (!isFinite(number)) {
//     alert("Vui lòng nhập vào giá trị là số");
//     return false;
//   } else {
//     myArray.push(+number);
//     console.log(myArray);
//   }
// };
// sumInput();

const Arr = [1, -2, 3, 4, -9, 6];
const Arr1 = [1, -2, 3, 4, -9, 6];

// Sắp xếp giảm dần
Arr.sort(function (a, b) {
  return b - a;
});
console.log(Arr);

// Sắp xếp tăng dần.
Arr1.sort(function (a, b) {
  return a - b;
});
console.log(Arr1);

// coppy mảng
const array1 = ["HTML", "CSS", "Javascript", "Java"];
array1.slice();
console.log(array1);

const user = {
  ten: "tung",
  age: 20,
  frend: ["vy", "tuan", "hai"],
  address: {
    tinh: "HCM",
    quan: "Q1",
  },
};
console.log(user.frend);

// lấy ra phần tử cuối của mảng.

// console.log(user.frend.pop());
// console.log(user.frend.at(-1));
// console.log(user.frend.reverse()[0]);

console.log(user.address);
console.log(user.address.tinh);
console.log(user.address.quan);

// Thêm phần tử vào mảng
user.address.duong = "nguyen tuan";
console.log(user);

user.frend.push("thai");
console.log(user.frend);

console.log("nối mảng");
const arr1 = ["java", "python", "HTML"];
const arr2 = [1, 2, 3, 4, 5];
console.log(arr1.concat(arr2));

console.log("sử dụng join : ", arr1.join());

const everyArr = [
  {
    name: "Thu",
    age: 18,
    address: "BG",
    language: "Viet Nam",
  },
  {
    name: "Fri",
    age: 17,
    address: "HN",
    language: "English",
  },
  {
    name: "Sun",
    age: 20,
    address: "HCM",
    language: "Japan",
  },
  {
    name: "Sat",
    age: 33,
    address: "DN",
    language: "Japan",
  },
];
console.log(everyArr);
const every = everyArr.every(function (el, index) {
  console.log(index);
  return el.language === "English";
});
console.log(every);

const some = everyArr.some(function (el, index) {
  console.log(index);
  return el.language === "English";
});
console.log(some);

const find = everyArr.find(function (el) {
  // console.log(index);
  return el.language === "Japan";
});
console.log(find);

const filter = everyArr.filter(function (el) {
  return el.language === "Japan";
});
console.log(filter);

const map = everyArr.map(function (el) {
  return {
    name: el.name,
    age: `${el.age} tuổi`,
    address: `Đang sống ở ${el.address}`,
    language: el.language,
  };
});

console.log(map);

//reduce
const reduce1 = [1, 2, 4, 5, 7, 8];
const total = reduce1.reduce((el, item) => el + item);
console.log(total);
