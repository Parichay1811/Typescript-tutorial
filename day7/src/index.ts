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

const scores: Array<number> = [90, 80, 70];
//Mixed Types

// Using Union Types:
const values: (string | number)[] = [
  "Parichay",
  100,
  "TS",
  200
];

const participent: string[] = [
    "parichay",
    "Jyotirmoy",
    "Aritra",
    "Soumajit",
    "Sauvik"
]
console.log(participent[3]);

//Methods
const nums: number[] = [1, 2, 3];

nums.push(4);

nums.pop();

nums.map((num) => num * 2);



/* 
// Readonly Arrays

const names: readonly string[] = [
  "Parichay",
  "Rahul",
  "Ankit"
];
//When we are using readonly that means we can just have the access on the elements. But, we can not update the array.

//Generic Version

const numbers: ReadonlyArray<number> = [
  1,
  2,
  3
];

 */