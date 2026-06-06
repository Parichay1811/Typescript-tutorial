"use strict";
//Functions
/*
// Functions in JavaScript

function sumOfTwoNumbers (a, b) {
    return  a + b
}
console.log(sumOfTwoNumbers(2,3));

 */
/*
//Functions in Typescript

function sumOfTwoNumbers(a:number, b:number) {
    return `Sum of a and b is ${a + b}`
}
console.log(sumOfTwoNumbers(2,3));

//in type script we have to mention the type of the parameter as well.
//I can also add the type in which I am expecting the output

//Example:
function print(name:string): string {
    return`Namaste ${name} 🙏🏻`
     
}
console.log(print("Parichay"));


//Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

//Void return type

// void means which returns nothing.

// const multiply = (a: number, b: number): void => {
//   return a * b;
// }; //This is wrong because the function is returning a * b

function call(name:string):void {
    console.log(`Hey ${name} come here!`);
}
call("Rahul")

 */
Object.defineProperty(exports, "__esModule", { value: true });
//Arrays
/*
const arr: number[] = [1,2,3,4,5,6,7]
console.log(arr + " ");
const participent: string[] = [
    "parichay",
    "Jyotirmoy",
    "Aritra",
    "Soumajit",
    "Sauvik"
]

 */
//Generic Syntax
const scores = [90, 80, 70];
//Mixed Types
// Using Union Types:
const values = [
    "Parichay",
    100,
    "TS",
    200
];
const participent = [
    "parichay",
    "Jyotirmoy",
    "Aritra",
    "Soumajit",
    "Sauvik"
];
console.log(participent[3]);
//# sourceMappingURL=index.js.map