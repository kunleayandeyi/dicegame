"use strict";
// const firstName = "Ayo";
// function logger() {
//   console.log("Hey, I am writing my first function🚀🚀");
//   console.log("today is bright, its bright and fair");
// }

// logger();
// logger();
// logger();
// logger();
// const x = 5;
// console.log(x);
// function sumNumber(x, y) {
// return x + y;
// }

// console.log(sumNumber(5,6))

// console.log(sumNumber(5,6));
// let x = 10

// x = "Ayo"

//=
//==
//===
// const x = "50";
// // console.log(x == 50); //true
// // console.log(x === 50); //false
// if (x === 50) {
//   console.log("x is equal to 50");
// } else {
//   console.log("x is not equal to 50");
// }

// FUNCTION DECLARATION AND FUNCTION EXPRESSIONS
// 1 FUNCTION DECLARATION
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// sayHello("Dumebi");
// sayHello("Ciroma");
// sayHello("Kate");
// //2 FUNCTION EXPRESSIONS
// const sayBye = function (lastName) {
//   console.log(`Bye ${lastName}`);
// };
// sayBye("Adekunle");
// sayBye("George");
// // 3 ARROW FUNCTIONS
// const sumNumber = (x, y) => x + y;
// console.log(sumNumber(5, 6));

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   console.log(age);
// }
// calcAge(2003);
// const calcAgeExp = function (birthYear) {
//   const age = 2023 - birthYear;
//   console.log(age);
// };
// calcAgeExp(2003);
// const calcAgeArr = (birthYear) => {
//   const age = 2023 - birthYear;
//   console.log(age);
// };
// calcAgeExp(2003);

// ARRAYS
// const friend1 = "Ciroma"
// const friend2 = "joe";
// const friend3 = "Jude";

// const friends = ["Ciroma", "Joe", "Jude"];
// console.log(friends[0]);//Ciroma
// console.log(friends[1]);//Joe
// console.log(friends[2]);//Jude
// console.log(friends[3]);//undefined

// BASIC ARRAY OPERATIONS
// const friends = ["Ciroma", "Joe", "Jude"];
// // adding elements to an array ===> push, unshift
// console.log("Before I used push method", friends);
// friends.push("Kelechi");
// console.log("After I used push method", friends);
// friends.push("Dumebi");
// console.log("After I used push method the second time", friends);
// friends.unshift("Chris");
// console.log("After I used unshift method", friends);
// // removing elements from an array ===> pop, shift
// friends.pop();
// console.log("After I used pop method", friends);
// friends.shift();
// console.log("After I used shift method", friends);
// // getting the index/position of an element
// console.log(friends.indexOf("Jude"));
// //to check if an element exists in array
// console.log(friends.includes("Kelechi"));
// splice method

// INTRO TO OBJECTS

// const friends = {
//   friend1: "Ciroma",
//   friend2: "Kate",
//   friend3: "Jude",
//   arrayOffriends: ["Tayo", "Tiwa"],
// };
// const firstName = ""
// const info = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   birthYear: 2000,
//   calcAge: function () {
//     console.log("hey I am in the method called calcAge");
//     console.log(2023 - info.birthYear);
//   },
// };
// const firstName = "firstName"
// console.log(info[firstName]);
// console.log(info.firstName);

// FOR LOOP
// console.log(`1 rep(s) for pressup`);
// console.log(`2 rep(s) for pressup`);
// console.log(`3 rep(s) for pressup`);
// console.log(`4 rep(s) for pressup`);
// console.log(1);
// console.log(2);

// for(let bunny = 1; bunny <= 100; bunny++){
// console.log(bunny);
// }
// for(let bunny = 1; bunny <= 10; bunny++){
// console.log(`${bunny} rep(s) for pressup`);
// }

// for (let i = 1; i <= 12; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }
// const arrayOffriends = ["Kate", "Ciroma", "Dumebi", "Ugo", "Kelechi"];
// for (let i = 0; i < arrayOffriends.length; i++) {
//   console.log(arrayOffriends[i]);
// }

const transactionMovements = [1000, -2500, 2000, -4000, 5000];
let sum = 0;
for (let i = 0; i < transactionMovements.length; i++) {
  sum = sum + transactionMovements[i];
}
console.log(sum);
// console.log(sum)
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
