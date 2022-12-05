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

// ví dụ closure

function myFun() {
  let couter = 0;

  function inFun() {
    return ++couter;
  }
  return inFun();
}
const sum = myFun();
// console.log(sum());
// console.log(sum());
// console.log(sum());
console.log(sum);

// function fullName() {
//   let name = "Mon";

//   function myName() {
//     console.log(name);
//   }
//   return myName;
// }
// const displayName = fullName();
// // console.log(displayName());
// displayName();

// Sử dụng call, bind, apply

const obj = {
  fristName: "Mon",
  lastName: "Nobi",
  info: function () {
    console.log(fristName + " " + lastName);
  },
};
function printName(age, address) {
  console.log(this.fristName + " " + this.lastName);
  console.log(age, address);
}

// const myInfo = printName.apply(obj);
const myInfo = printName.apply(obj, [22, "BG"]);
// console.log(myInfo());
// printName();
const Info = printName.bind(obj, 21, "BG");
Info();

// const Infor = printName.call(obj);
const Infor = printName.call(obj, 22, "BG");

const obj1 = {
  name: "Thu",
  age: 21,
  showInfor: function (address, food) {
    console.log(this.name + " " + this.age);
    console.log(address, food);
  },
};
// console.log(showInfor());
const showName = obj1.showInfor.bind(obj1, "BG", "Pizza");
showName();
const Name = obj1.showInfor("BG", "Pizza");
const nameShow = obj1.showInfor.call(obj1, "BG", "Pizza");
const myName = obj1.showInfor.apply(obj1, ["BG", "Pizza"]);

// cách khai báo class.

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
const peson1 = new Person("thu", 22, "HCM");
const peson2 = new Person("Mon", 28, "DN");
const peson3 = new Person("Fri", 29, "HN");
console.log(peson1);
console.log(peson2);
console.log(peson3);

class Car {
  constructor(name, color, weigt) {
    this.name = name;
    this.color = color;
    this.weigt = weigt;
  }
}
const showCar = new Car("BMW", "black", 1000);
const showCar2 = new Car("Messedes", "blue", 2000);
const showCar3 = new Car("audi", "while", 1500);
console.log(showCar);
console.log(showCar2);
console.log(showCar3);

// tính kế thừa class.
class Animal {
  constructor(name) {
    this.type = "Animal";
    this.name = name;
  }
  sayType() {
    console.log("type: " + this.type);
  }
  sayName() {
    console.log("name: " + this.name);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.type = "Dog";
  }
  shout() {
    console.log("shout: " + "Go go go");
  }
}
let myDog = new Dog("Rex");
myDog.shout();
myDog.sayName();
myDog.sayType();
