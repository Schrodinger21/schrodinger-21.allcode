"use strict";

let info;
console.info("test 1");

// new Promise((resolve, reject) => {
//   //   return resolve(1);
//   return reject("Lỗi rồi");
// })
//   .then((k) => {
//     console.info(k);
//     return k + 10;
//   })
//   .then((k) => {
//     console.info(k);
//   })
//   .then(() => {
//     console.info("done");
//   })
//   .catch((err) => console.info(err));

// console.info("test 2");
// console.info("test 3");

// new Promise((resolve, reject) => {
//   resolve("Bài tập của tôi về promise!!!");
//   //   reject("Test lỗi về promise");
// })
//   .then((res) => {
//     console.log(res);
//     return res + " Cố hiểu hơn là cố thuộc";
//   })
//   .then((res) => console.log(res))
//   .then(() => console.log("complete"))
//   .catch((err) => console.log(err));

// new Promise((resolve, reject) => {
//   resolve("Giá trị trả về thành công!!!");
//   //   reject("Thất bại rồi bạn ơi!!!");
// })
//   .then((res) => {
//     console.log(res);
//     return res + " Tiếp tục nào, đừng từ bỏ nhé ^^";
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));(

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Xin chào, chờ tôi một chút nhé ^^"), 2000);
//   });
// };
// const test = async () => {
//   const v = await getData();
//   console.log(v);
// };
// test();

// console.log("synchronous");
// console.log("synchronous 2");

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement("img");
//     imgEl.src = imgPath;

//     // bắt sự kiện load ảnh
//     imgEl.addEventListener("load", function () {
//       imgEl.classList.add("images");
//       //Ảnh load xong thì thêm imgEl vào Dom
//       document.body.appendChild(imgEl);
//       // gọi hàm resolve khi thành coog ==> và trả về kết quả là imgEl1
//       resolve(imgEl);
//     });
//     imgEl.addEventListener("error", function () {
//       // gọi hàm reject khi gặp lỗi ==> trả về 1 lỗi
//       reject(new Error("Đã bị lỗi!"));
//     });
//   });
// }

const createImage = (imgPath) => {
  new Promise((resolve, reject) => {
    const imgEL = document.createElement("img");
    imgEL.src = imgPath;

    imgEL.addEventListener("load", function () {
      imgEL.classList.add("images");
      document.body.appendChild(imgEL);
      resolve(imgEL);
    });
    imgEL.addEventListener("error", function () {
      reject(new Error("Bị lỗi"));
    });
  });
};
// const upLoad = async () => {
//   try {
//     const imgEl = await createImage("./img/a1.jpg");
//     await wait(4);
//     imgEl.style.display = "none";

//     const imgEl2 = await createImage("./img/img_61484c622a514.png");
//     await wait(3);
//     imgEl2.style.display = "none";
//   } catch (error) {
//     console.error(error);
//   }
// };
// upLoad();
// const upLoad = async () => {
//   try {
//     // const imgEL = await createImage("./img/a1.jpg");
//     // await wait(2);
//     // imgEL.style.display = "none";

//     // const imgEL2 = await createImage("./img/img_61484c622a514.png");
//     // await wait(3);
//     // imgEL2.style.display = "none";
//     // img 1
//     const imgEl = await createImage(`img/a1.jpg`);
//     await wait(2);
//     imgEl.style.display = "none";

//     // img 2
//     const imgEl2 = await createImage(`img/img_61484c622a514.png`);
//     await wait(2);
//     imgEl2.style.display = "none";
//     // img 3
//     const imgEl3 = await createImage(`img/nobita-va-hon-dao-dieu-ki-hanh-trinh-muong-thu-1024x576.png`);
//     await wait(2);
//     imgEl3.style.display = "none";
//     // Bắt lỗi, nếu trong try có lỗi thì cat
//   } catch (error) {
//     console.error(error);
//   }
// };
// upLoad();

async function timChuXe() {
  let f1 = await getInfof1();
  let f2 = await getInfof2();
  let f3 = await getInfof3();

  return f1 + "-" + f2 + "-" + f3;
}
