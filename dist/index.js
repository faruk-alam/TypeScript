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
// any type
let age;
age = 25;
age = "twenty five";
age = true;
// any time in arrow
// let things: any[];
// things = [1,"hello",true,];
// things.push({name:"Rahul",age:30});
// function and any type
let addTwoValues = (value) => {
    return value + value;
};
const result1 = addTwoValues(5);
console.log(result1);
//tuples
// tuple is a fixed length array with specific types for each element
// tuple is a special type of array that can hold a fixed number of elements of different types.
let personTuple = ["John", 30, true];
personTuple = [30, 25, false];
let hsla;
hsla = [240, "100%", "50%", 1];
// tuples in function
function usecoords() {
    const lat = 105.55;
    const long = 78.90;
    return [lat, long];
}
const [latitude, longitude] = usecoords();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// named tuples
// named tuples are a way to give names to the elements of a tuple, making it easier to understand the purpose of each element.
let userInfo;
userInfo = ["Alice", 28, true];
console.log(userInfo[0]);
const authorOne = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg"
};
console.log(authorOne);
const newPost = {
    title: "My First Post",
    body: "This is the content of my first post.",
    tags: ["typescript", "programming", "webdev"],
    createdAt: new Date(),
    author: authorOne
};
console.log(newPost);
// as function argument types
function createPost(post) {
    console.log(`created ${newPost.title} by ${newPost.author.name}`);
}
createPost(newPost);
// with array
let posts = [];
posts.push(newPost);
console.log(posts);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: "Alice",
    age: 28
};
function createUser(user) {
    console.log(`User ${user.name} is ${user.age} years old.`);
}
createUser(userOne);
// union types
// union types are a way to define a type that can be one of several types. They are defined using the | operator.
let someId;
someId = 123;
someId = "abc123";
// someId = true; // error
let email;
email = "user@example.com";
email = null;
function swapId(id) {
    if (typeof id === "number") {
        return id.toString();
    }
    else {
        return parseInt(id);
    }
}
const swappedId1 = swapId(123);
const swappedId2 = swapId("456");
console.log(swappedId1, swappedId2);
//# sourceMappingURL=index.js.map