const setStyle = document.getElementById("h1");
document.querySelector(".addText").innerHTML = "Hello world";
document.querySelector(".addText").style.color = "blue";
document.querySelector(".addText").style.fontSize = "2rem";
document.querySelector(".addText").style.fontFamily = "Arial";
const animation = document.querySelector(".addText");

// setTimeout(function () {
//   animation.style.display = "none";
// }, 2000);
// setTimeout(function () {
//   animation.style.display = "block";
//   setTimeout(function () {
//     animation.style.color = "yellow";
//   }, 3000);
//   animation.style.fontSize = "1rem";
//   animation.innerHTML =
//     "Xin chòa tất cả mọi người, đây là bài tập về js Dom của tôi";
// }, 4000);

// const changeType = document.querySelector(".list");
// setTimeout(function () {
//   changeType.style.display = "none";
//   setTimeout(function () {
//     changeType.style.display = "block";
//     changeType.style.color = "red";
//   }, 6000);
// }, 5000);

// thêm một Element vào HTML
// function add() {
//   let addP = document.createElement("p");
//   let text = document.createTextNode("Thẻ p vừa được thêm ^^");
//   addP.style.color = "blue";
//   addP.style.fontSize = "3rem";
//   addP.appendChild(text);
//   let dom = document.getElementsByTagName("body");
//   document.body.appendChild(addP, dom);
// }
// setTimeout(function () {
//   add();
// }, 5000);
// setTimeout(function () {
//   setStyle.style.fontSize = "4rem";
//   setTimeout(function () {
//     setStyle.style.color = "green";
//   }, 2000);
// }, 3000);

// Xóa phần tử trong DOM

// let deleteDiv = document.getElementById("element");
// let deleteDiv = document.getElementsByClassName("del");
// let deleteDiv = document.querySelector(".del");
// let deleteDiv = document.querySelectorAll(".del");
// deleteDiv.remove();
// function deleteDiv(data) {
//   let deleteDiv = document.getElementsByTagName("div");
//   for (i = 0; i < deleteDiv.length; i++) {
//     if (data[i] === deleteDiv.length[i]) {
//       data[i].remove();
//     }
//   }
// }
// deleteDiv(data[1]);

// document.getElementById("element").remove();

// Dom animation

// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(animations, 10);
//   function animations() {
//     if (pos == 250) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// myMove();
// function myMove2() {
//   let id = null;
//   const elem = document.getElementById("animate1");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(animations, 8);
//   function animations() {
//     if (pos == 250) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.right = pos + "px";
//     }
//   }
// }
// myMove2();

// function move() {
//   const e = document.getElementById("testanima");
//   let w = 0;
//   const id = setInterval(testAnimation, 30);
//   function testAnimation() {
//     if (w == 100) {
//       clearInterval(id);
//     } else {
//       w++;
//       e.style.width = w + "%";
//     }
//   }
// }
// move();
// const addtext = document.getElementById("element");
// addtext.textContent = "Thêm textcontent vào html";

// function changeText() {
//   const addText = document.getElementById("element2");
//   addText.textContent =
//     "Xin chào mọi người, tôi được thêm vào nhờ phương thức textContent ^^";
//   addText.style.color = "red";
// }
// setTimeout(function () {
//   changeText();
// }, 3000);

function changeText3() {
  const addText3 = document.getElementById("element3");
  addText3.textContent =
    "xin chào, tôi là phần tử được thay đổi nội dung thứ 3";
  addText3.style.color = "green";
  addText3.style.foneSize = "2rem";
}
setTimeout(function () {
  changeText3();
}, 5000);

console.log(document);
document.write("Hello DOM");

// const addEL = document.createElement("p");
// const textEl = document.createTextNode("Nội dung mới được thêm qua Dom");
// addEL.appendChild(textEl);
// let domEl = document.getElementsByTagName("body");
// document.body.appendChild(addEL, domEl);

const add = document.createElement("a");
const title = document.createTextNode("Thẻ mới được thêm");
add.href = "#";
add.appendChild(title);
const domA = document.getElementsByTagName("body");
document.body.appendChild(add, domA);

function changeTextDiv() {
  const changeDiv = document.getElementById("element2");
  //   changeDiv.textContent = "Nội dung được sửa đổi của thẻ div";
  changeDiv.innerHTML = "Nội dung được thay đổi bằng innerHTML";
}
changeTextDiv();
