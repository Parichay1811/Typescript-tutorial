"use strict";
//Duck Typing / Structural Typing
/* TypeScript does not care about the name of a type.

It only cares about the structure (properties and methods).

This is called Structural Typing (also known as Duck Typing).

"If it looks like a duck and quacks like a duck, it's a duck." */
/* type User = {
    name: string,
    age: number
}

const Person = {
    name: "Parichay",
    age: 25
}

const user:User = Person
console.log(user); // This is valid because the structure of person matches with the user. all the properties of user are present in the Person.

type Customer = {
    name: string
    id: number
}

const Consumer = {
    name: "Parichay",
    id:12334456,
    age:23
}
const cus: Customer = Consumer // This is still valid because all the properties of Customer is present in Consumer.If any one of them would not be there it would throw new Error("");

console.log(cus);


//Real-world Example

interface Animal {
    sound(): void
}

class dog {
    sound() {
        console.log("woof!");
    }
}

const animal: Animal = new dog()
console.log(dog);

 */
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Parichay",
    email: "abc@gmail.com",
};
console.log(user);
//# sourceMappingURL=index.js.map