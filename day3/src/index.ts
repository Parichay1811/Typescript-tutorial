// Type Narrowing in TypeScript
let value: string | number = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


let age: string | number = 25;

if (typeof age === "number") { // the typeof is the guard
  console.log(age + 10);
}

//Inside the if block: TypeScript now knows value is a string. so, string methods are allowed


//Narrowing using instanceof
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

let pet = new Dog();

if (pet instanceof Dog) { //instanceof is the guard
  pet.bark();
}

// in Guard

type Admin = {
  name: string
  role: string
}

type User = {
  name: string
  email: string
}

function checkPerson(person: Admin | User) {
  if ("role" in person) {
    console.log(person.role)
  } else {
    console.log(person.email)
  }
}

/* Exhaustive Checks

Exhaustive checking ensures we handled ALL possible cases.

 */

// Example Without Exhaustive Check
// type Status = "loading" | "success" | "error"

// function handleStatus(status: Status) {
//   if (status === "loading") {
//     console.log("Loading...")
//   } else if (status === "success") {
//     console.log("Success")
//   }
// }

// Problem:
//  "error" was forgotten.

type Status = "loading" | "success" | "error"

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      console.log("Loading...")
      break

    case "success":
      console.log("Success")
      break

    case "error":
      console.log("Something went wrong")
      break
  }
}

//All the cases are handled

// Discriminated Unions 

// This is one of the MOST IMPORTANT TypeScript concepts.

type Loading = {
  status: "loading"
}

type Success = {
  status: "success"
  data: string[]
}

type ErrorState = {
  status: "error"
  message: string
}

type ApiResponse = Loading | Success | ErrorState

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case "loading":
      console.log("Loading...")
      break

    case "success":
      console.log(response.data)
      break

    case "error":
      console.log(response.message)
      break
  }
}