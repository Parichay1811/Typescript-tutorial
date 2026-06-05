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



/* 

// in the above if any one properties would be missing in the body then it would throw a new error. Which is a problem;

// example:

type Student = {
    name: string,
    age: number,
    roll: number
}
const Stud = {
    age:23
}
// const stu: Student = Stud //This will throw 'stu' is declared but its value is never read.
// Type '{ age: number; }' is missing the following properties from type 'Student': name, roll

//Here the Partial <T> comes into the picture it makes all the properties optional

//Syntax: type PartialUser = Partial<User>;

type Employee = {
    name: string,
    salary:number,
    email:string
}
function updateEmployee(employee: Partial<Employee>) {
    console.log(employee);
}

updateEmployee({
    email: "abc@meta.co.in"
}) // this is not throwing error because we made all the properties of updateEmployee optional using Partial <T>

//Required <T>
//syntax: type FullUser = Required<User>;

interface User {
  name?: string;
  age?: number;
}

type FullUser = Required<User>
//it means all the properties of user must be present in fullUser

// const user: FullUser = {
//   name: "Parichay",
//   age: 23,
// }; // valid

const user: FullUser = {
  name: "Parichay", //Throws error. because all the properties of User is not present at the  fullUser
};

 */

/* 
//Pick <T , k>
//Pick perticular properties from a type 


interface User {
    id: number,
    name: string
    email: string,
}

type PublicUser = Pick <User, "id" | "name" >

const user: PublicUser = {
  id: 1,
  name: "Parichay",
};
 */
//Omit<T, K>
/* 
Opposite of Pick.
Removes selected properties.

 */
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


type SafeUser = Omit<User, "id" | "password">

const user: SafeUser = {
  name: "Parichay",
  email: "abc@gmail.com",
};

console.log(
    user
);
