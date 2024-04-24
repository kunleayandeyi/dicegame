"use strict";
/*var firstname = "ciroma"
var lastname = "adekunle"
console.log(firstname)
console.log(lastname)
let ciromaHeight=1.7
let ciromaMass=80
let bmi = ciromaMass/ciromaHeight**2
console.log(bmi)
let ball = 'red'
let size = 'big'
let ballSize = 'big'+'red'
console.log(typeof(5+'eggs') )
console.log(1 * '5')
// const age = prompt("enter your age")
// console.log(typeof Number(age));
console.log(typeof Number("5"));
console.log("===== equality operators=====")
console.log(18=="18")
console.log(18==="18")
console.log("==========")
console.log(Boolean(""))
console.log(true || true && false && true || false)
console.log(true && false) 
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)*/
/*const score=Number(prompt("enter your score"));
console.log(typeof score);
if(score >=70 && score<=100)(console.log("your grade is A"));
else if(score >=60 && score<=69) (console.log("your grade is B"));
else if(score >=50 && score<=59) (console.log("your grade is C"));
else if(score >=40 && score<=49) (console.log("your grade is D"));
else if(score >=0 && score<=39) (console.log("your grade is F"));
else (console.log("your grade is invalid score"));*/
/*console.log(5);
console.log(2+4);
console.log(`i am ${2024-1990} years old`);
const numbers = [5,10,50*3, 120]
console.log(numbers);
const age = 12;
let agestatus;
if(age>=18) {agestatus = "adult"}
else{agestatus= "not an adult"}
console.log(agestatus);*/
//const gallant = balance>100000?
//const age = Number(prompt("enter your age"));
/*const ageStatus = age >= 18 ? "adult" : "minor";
console.log(ageStatus);*/
function logger() {
  console.log("hey i am happy");
  console.log(
    "the day is the day the lord has made i will rejoice and be glad in it"
  );
}
logger();
logger();
logger();
logger();
/*function simpleEquation(x,y,z) {
  console.log(3*x**2+5*y+10*z+50);
}*/
function simpleEquation(x, y, z) {
  return 3 * x ** 2 + 5 * y + 10 * z + 50;
}
simpleEquation(5, 3, 2);
console.log(simpleEquation(5, 3, 2));
function density(mass, volume) {
  return `${mass / volume} kilogram per cubic meter`;
}
console.log(density(5, 2));
//("***how do i make my unit show in my function and how do i condition my unit in parameters***")

function sayHello(firstName) {
  console.log(`hello ${firstName}`);
}
sayHello("adedoyin");
sayHello("ejire");
sayHello("olayinka");
//function declaration
function calcAge(birthYear) {
  return 2024 - birthYear;
}
console.log(calcAge(2000));
//arrow function
const calcAgeArr = (birthYear) => 2024 - birthYear;
console.log(calcAgeArr(2010));
//array(data structure)
const friends = ["Ifeoluwa", "Segun", "Femi", "Gbenga", "Ademi"];
console.log(friends[4]);
//basic array operations(adding and removing element from an array, getting the index/position of an element in an narray)
//friends.push("feyi")
console.log(friends.push("feyi"));
console.log(friends);
friends.push("fiyin");
console.log(friends);
friends.unshift("bobola");
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("feyi"));
console.log(friends.indexOf("Gbenga"));
console.log(friends.includes("kelvin"));
console.log(friends.includes("Segun"));
const obj = {};
const person1 = { firstName: "adekunle", lastName: "ayandeyi", age: 55 };
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
const cars = {
  camry: "red",
  corolla: "black",
  pilot: "green",
  avensis: "wine",
};
console.log(cars.corolla);
console.log(cars.camry);
console.log(cars);
const vehicle = {
  name: "camry",
  model: "2007",
  color: "red",
  transmission: "auto",
  type: "salon",
  make: "toyota",
  status: "fairlyused",
  millage: "100,000miles",
  carage: function () {
    console.log(2024 - vehicle.model);
  },
};
console.log(vehicle.millage);
console.log(vehicle);
vehicle.carage();
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
for (let age = 0; age <= 10; age++) {
  console.log(age);
}
for (let i = 10; i >= 1; i--) {
  console.log(`${i} kids in the playground`);
}
for (let i = 1; i <= 12; i++) {
  console.log(`5*${i}=${5 * i}`);
}
const team = ["arsenal", "chelsea", "westham"];
for (let i = 0; i < team.length; i++) {
  console.log(`${team[i]} is my favorite team`);
}
let i = 0;
while (i < team.length) {
  console.log(`${team[i]} is my favorite team`);
  i=i+1
}
