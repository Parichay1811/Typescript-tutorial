"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Narrowing in TypeScript
let value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
let age = 25;
if (typeof age === "number") {
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
if (pet instanceof Dog) {
    pet.bark();
}
//# sourceMappingURL=index.js.map