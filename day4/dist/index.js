"use strict";
//Type Assertion in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let someValue = "Hello";
let strLength = someValue.length;
console.log(strLength);
/*
//Here in the above example the type of someValue was unknown. SO TS did not know the exact type of someValue. we told TS that consider someValue as a string and then it allowd the .length operation and we got the length.

//Example 1 — DOM Manipulation

// const inputElement = document.getElementById("username")
// inputElement.value = 'Parichay'

//The above is wrong it will throw an error:Property 'value' does not exist on type 'HTMLElement'.
//Because TypeScript only knows: inputElement -> HTMLElement | null

const inputElement = document.getElementById("unknown") as HTMLInputElement
inputElement.value = "Parichay"

 */
//Example 2 — Using Unknown
/* const data: unknown = 'Parichay'
console.log(data.toUpperCase());  //Error:  'data' is of type 'unknown'.
 */
const data = "Parichay";
console.log(data.toUpperCase());
console.log(data.toFixed);
//# sourceMappingURL=index.js.map