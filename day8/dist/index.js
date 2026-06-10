"use strict";
// console.log("Aap kaise Ho?");
Object.defineProperty(exports, "__esModule", { value: true });
/*
let user = ["Parichay",25,true]  //javascript doesn't know that in the 1 position there is a number
console.log(user[1]);
 */
//TypeScript Tuple
// let user: [string, number, boolean];
// user = ["Parichay", 25, true];
//real world use case
/*
let response: [number, string]
response = [200, "success!"]

enum Status {
  SUCCESS,
  FAILED,
  LOADING
}
let currentStatus: Status = Status.SUCCESS;
console.log(Status.LOADING);

//Numeric Enum

enum direction {
    east,
    west,
    north,
    south
}
console.log(direction.north);

//String Enum

// Most commonly used in projects.

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}
let role: UserRole = UserRole.ADMIN;
enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED"
}

function trackOrder(status: OrderStatus) {
  console.log(status);
}

trackOrder(OrderStatus.SHIPPED);

// Classes

// class User{
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
// }


// Multiple Properties
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const student = new Student("Parichay", 23);
console.log(student);

//Methods in Class
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
const user = new User("Parichay");

user.greet(); //Hello Parichay


 */
//Constructors
// Same like the last example
//Shorthand Constructor
// TypeScript provides a shorter syntax.
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
//Equivalent to 
// class Employee {
//   name: string;
//   salary: number;
//   constructor(name: string, salary: number) {
//     this.name = name;
//     this.salary = salary;
//   }
// }
// Access Modifiers (Public & Private)\
//Public
// class User {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const user = new User("Parichay");
// console.log(user.name);
//Private
// class BankAccount {
//   private balance: number = 1000;
// }
//We can not access the properties if this class
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(5000);
console.log(account.getBalance());
//Real world Example:
class User {
    name;
    password;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    checkPassword(password) {
        return this.password === password;
    }
}
const user = new User("Parichay", "12345");
console.log(user.name);
console.log(user.checkPassword("12345"));
//# sourceMappingURL=index.js.map