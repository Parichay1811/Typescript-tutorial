//Type Assertion in TypeScript

let someValue: unknown = "Hello";

let strLength:Number = (someValue as string).length;

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


/* 
//Example 2 — Using Unknown

// const data: unknown = 'Parichay'
// console.log(data.toUpperCase());  //Error:  'data' is of type 'unknown'.

const data:unknown = "Parichay"
console.log((data as string).toUpperCase());
console.log((data as number).toFixed);

 */


//Example 3 — API Response

const response = {
  name: "Parichay",
  age: 22
} as {
  name: string;
  age: number;
};

//The main difference between unknown and any is

//in any typescript do not care about the type. But, in unknown initially it is unknown but later the value will be asserted.

//Try catch handling in typescript
/* 
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message); //'error' is of type 'unknown'.
}

 */

//Method 1 — instanceof Error (Most Common)

try {
    throw new Error('Something went wrong')
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
}

//Custom Type Guard

function hasMessage(value: unknown): value is { message: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value
  );
}

try {
  throw { message: "Custom Error" };
} catch (error) {
  if (hasMessage(error)) {
    console.log(error.message);
  }
}



//NEVER

function example(value: string | number) {
  if (typeof value === "string") {
    console.log(value);
  } else if (typeof value === "number") {
    console.log(value);
  } else {
    value;
  }
}

//Here inside the else, The value is never
