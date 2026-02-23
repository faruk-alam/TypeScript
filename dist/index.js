"use strict";
// array
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Alex", "Bob", "Charlie"];
let numbers = [1, 2, 3];
names.push("John");
numbers.push(5);
numbers.push(6);
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
let f = fruits[3];
let things = [1, true, "hello"];
let t = things[2];
let user = {
    firstName: "John",
    age: 30,
    id: 1
};
user.firstName = "rahul";
user.age = 30;
let person = {
    name: "Max",
    score: 100
};
person.name = undefined;
person.name = "Nick";
person.score = null;
person.score = 200;
// functiom
function addTwoNumbers(a, b) {
    return a + b;
}
;
let substrackTwoNumbers = (a, b) => {
    return a - b;
};
//addTwoNumbers(5,"7");
//addTwoNumbers(6,null);
addTwoNumbers(35, 15);
substrackTwoNumbers(50, 30);
let addAllNumbers = (nums) => {
    const total = nums.reduce((a, b) => a + b, 0);
    console.log(total);
};
addAllNumbers([7, 12, 3, 33, 5]);
let formatGreeting = (name, greeting) => {
    return `${greeting} ${name}`;
};
let result = formatGreeting("Rahul", "Hello");
console.log(result);
//# sourceMappingURL=index.js.map