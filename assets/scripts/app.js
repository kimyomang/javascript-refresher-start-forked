// import defaultKey from "./util.js";

// import { apiKey, abc } from "./util.js";

// console.log(apiKey);
// console.log(defaultKey);

import * as util from "./util.js";

console.log(util.apiKey);
console.log("Hello World");

// function keyword is important

function greet(userName, message = "Hi") {
  //put function code
  console.log("Hello!");
  //this function is not executed so I cannot see the log in the console
  console.log(userName);
  console.log(message);
}

function createGreeting(userName, message = "It's good to see you.") {
  return "Hi, I am " + userName + ". " + message;
}

greet("Minji", "Hello, What's up?"); // calling the function

const greeting1 = createGreeting("Stella");
console.log(greeting1);

const greeting2 = createGreeting("Ashely", "What's up?");
console.log(greeting2);

// arrow function () =>
// anonymous function

export default (userName, message) => {
  console.log("anonymous function");
  console.log("arrow function doesn't need keyword _function_");
  return userName + message;
};

let userName = "Minji";
let userAge = 34;

const user = {
  name: "Ella",
  age: 34,
  greet() {
    console.log("This is the method");
    console.log(this.age);
  },
};

console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("It's good to see you!");
  }
}

const user1 = new User("Seongbeom", 29);
console.log(user1);
user1.greet();

// Array is also object

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);
console.log(hobbies.toString());

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
  // If you have the item, it will return true
  return item === "Sports";
});
console.log(index);

// Shorter version of index
const shorterIndex = hobbies.findIndex((item) => item === "Working");
console.log(shorterIndex);

// useful utility method is map.
const editedHobbies = hobbies.map((item) => item + "!");
// map allows you to transform every item in an array to another item.
console.log(editedHobbies);

// could also convert them to javascript objects
const convertObjects = hobbies.map((item) => ({ text: item }));
console.log(convertObjects);

// Destructuring Arrays and Objects
// This is the one way to take first name and last name.
const userNameData = ["Ella", "Swanson"];
const firstName = userNameData[0];
const lastName = userNameData[1];

// This is the 2nd way to do it
const [firstName2, lastName2] = ["Ashely", "Burke"];
console.log(firstName2);
console.log(lastName2);

// this can be used in object as well
const { name: objectNewUserName, age: objectNewUserAge } = {
  // in this name and age should be same as field names that are defined in the object.
  name: "Luna",
  age: 34,
};
// because they are pulled out them by their property name so I have to use the same property name.
console.log(objectNewUserName);

// Spread Operator

//const hobbies = ["Sports", "Cooking"];

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies];
console.log(mergedHobbies);

const mergedHobbies2 = [hobbies, newHobbies];
console.log(mergedHobbies2); //Array with 2 nested array inside

const mergedHobbies3 = [...hobbies, ...newHobbies];
console.log(mergedHobbies3); // pulls out from an array and add them as sperate comma separated values to a new array here

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser); // Spread Operator can take the value from the object. it will bring it with key value paris

// Control Structure

let password = "";
//const password = prompt("Your password"); //Getting password from the user : prompt

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}

// const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log("hobby : " + hobby);
}

// Accessing DOM without React
const list = document.querySelector("ul");
list.remove();
// React will do that for mergedHobbies

// Using Functions as values

function handleTimeout() {
  console.log("Timed out!");
}

const handledTimeout2 = () => {
  console.log("Timed out AGAIN!");
};

setTimeout(handleTimeout, 2000);
// take function itself as a 1st parameter
// handleTimeout옆에 ()를 추가하면 setTimeout이설정될 때 바로 실행된 다음 함수 handleTimeout의 반환값이 전달됨

setTimeout(handledTimeout2, 3000);
setTimeout(() => {
  console.log("Need to more time to think!");
}, 4000);

function greeter(greetFn) {
  greetFn(); // calling a function as it <isindex />
}

greeter(() => console.log("Hi from greeter"));

function init() {
  function greetFromInit() {
    console.log("This is the greet function which is in the init function");
  }
  greetFromInit(); // I can execute this function in here only.
}
// greetFromInit will be working only inside of init function because it is defined inside the init function.

init();

// 참조형과 기본 값 비교

let userMessage = "Hello there!";
userMessage = "I can overwrite the value not the editing.";
