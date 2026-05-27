//Type Aliases (type)
//Type aliases works like a nickname to our data structure. 
/* 
let user1 = {
    name: String,
    age:Number,
    isParent:Boolean
}
let user2 = {
    name: String,
    age:Number,
    isParent:Boolean
}
 */
// in the abve things are repetative. Now let suppose I have millions of users then I can not manually repeate the attributes again and again. So, for that reason we can create one type and use them as many times we want.
/* 
type user = {
    name: String,
    age:Number,
    isParent:Boolean
}

let user1 = user
let user2 = user
let user3 = user
let user4 = user
let user5 = user
let user6 = user
let user7 = user
// ..,,,
let user98 = user
let user99 = user
let user100 = user

 */

// type User = {
//     name: string;
//     age: number;
//     isParent:boolean
// }

// const person: User = {
//     name: "Parichay",
//     age: 26,
//     isParent: false
// }

// console.log(person);
/* 
// Type Aliases with Nested Objects

type Address = {
    city: string,
    pin: number
}

type User = {
    name: string,
    age: number
    address: Address
}

const user: User = {
    name: "Parichay",
    age: 25,
    address: {
        city: "Bangalore",
        pin: 560076
    }
}
console.log(user);

 */
/* 

//Optional Properties

type User = {
  name: string;
  phone?: string;
};

 */
/* 
// Readoly Properties

type user = {
    readonly id: number,
    name: string
}
// in this case we just can read the property, we can not change ot modified.


 */

//Combining types(Intersection)

type Person = {
    name: string,
}
type Employee = {
    salary: number
}

type worker = Person & Employee

const work: worker = {
  name: "Parichay",
  salary: 50000,
};
console.log(work);

/* 
//Type Aliases with API Data

type Product = { 
    id: number,
    title: string,
    price: number,
    inStock: boolean
}
const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("/api/products");
  return res.json();
};
console.log(fetchProducts());
 */