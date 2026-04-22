// array

let names : string[] = ["Alex","Bob","Charlie"];
let numbers : number[] = [1,2,3];

names.push("John");
numbers.push(5);
numbers.push(6);


let fruits = ["apple","banana","mango"];
fruits.push("orange");

let f = fruits[3];


let things = [1,true,"hello"];
let t = things[2];


let user: {firstName: string, age: number, id: number} = {
    firstName: "John",
    age: 30,
    id: 1
}

user.firstName = "rahul";
user.age = 30;

let person = {
    name : "Max",
    score: 100
}
person.name = undefined;
person.name = "Nick";

person.score = null;
person.score = 200;


// functiom
function addTwoNumbers(a:number,b:number) : number {
    return a+b;
};
let substrackTwoNumbers = (a:number,b:number) : number =>{
    return a-b;
}
//addTwoNumbers(5,"7");
//addTwoNumbers(6,null);
addTwoNumbers(35,15);
substrackTwoNumbers(50,30);

let addAllNumbers = (nums:number[]) : number => {
    const total = nums.reduce((a,b) => a+b,0);
    console.log(total)   
}
addAllNumbers([7,12,3,33,5]);

let formatGreeting = (name: string, greeting: string) => {
    return `${greeting} ${name}`;
}
let result = formatGreeting("Rahul","Hello");
console.log(result);

// any type
let age:any;

age = 25;
age = "twenty five";
age = true;

// any time in arrow
// let things: any[];
// things = [1,"hello",true,];
// things.push({name:"Rahul",age:30});

// function and any type
let addTwoValues = (value: any) : any => {
    return value + value;
}
const result1 = addTwoValues(5);
console.log(result1)
//tuples
// tuple is a fixed length array with specific types for each element
// tuple is a special type of array that can hold a fixed number of elements of different types.

let personTuple : [string,number,boolean] = ["John", 30, true];
personTuple = [30, 25, false];

let hsla : [number,string,string,number];
hsla = [240,"100%","50%",1];

// tuples in function

function usecoords() : [number,number] {
    const lat = 105.55;
    const long = 78.90;
    return [lat,long];
}
const [latitude,longitude] = usecoords();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

// named tuples
// named tuples are a way to give names to the elements of a tuple, making it easier to understand the purpose of each element.
let userInfo : [name: string, age: number, isAdmin: boolean];
userInfo = ["Alice", 28, true];
console.log(userInfo[0])

// interface for tuple
// interfaces in TypeScript are a powerful way to define the structure of an object. They can be used to define the shape of an object, including the types of its properties 
// and methods. This can help us catch errors at compile time and make our code more maintainable.
interface Author {
    name: string;
    avatar: string;
}
const authorOne: Author = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg"
}
console.log(authorOne)

interface Post {
    title: string;
    body: string;
    tags: string[];
    createdAt: Date;
    author: Author;
}
const newPost: Post = {
    title: "My First Post",
    body: "This is the content of my first post.",
    tags: ["typescript","programming","webdev"],
    createdAt: new Date(),
    author: authorOne
}
console.log(newPost)

// as function argument types
function createPost(post: Post) : void {
   console.log(`created ${newPost.title} by ${newPost.author.name}`);
}
createPost(newPost);


// with array
let posts: Post[] = [];
posts.push(newPost);
console.log(posts)


//type aliases 
// - type aliases are a way to give a name to a type, making it easier to reuse and understand. They can be used to define complex types, such as union types, 
// intersection types, and mapped types.

// type aliases - tuple
type Rgb = [number,number,number]
function getRandomColor() : Rgb {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return [r,g,b]
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne,colorTwo)

// type aliase - object literal
type User = {
    name: string;
    age: number;
}
const userOne: User = {
    name: "Alice",
    age: 28
}

function createUser(user: User) : void {
    console.log(`User ${user.name} is ${user.age} years old.`);
}
createUser(userOne)

// union types
// union types are a way to define a type that can be one of several types. They are defined using the | operator.

let someId: number | string;
someId = 123;
someId = "abc123";
// someId = true; // error

let email: string | null;
email = "user@example.com";
email = null;
//email = undefined; // error

// type guards
// type guards are a way to narrow down the type of a variable within a specific block of code. They are often used in conjunction with union types to determine the actual 
// type of a variable at runtime.
type Id = number | string;

function swapId(id: Id) {
    if (typeof id === "number") {
        return id.toString();
    } else {
        return parseInt(id);
    }}
    const swappedId1 = swapId(123);
    const swappedId2 = swapId("456");
    console.log(swappedId1,swappedId2)