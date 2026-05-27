"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const fetchProducts = async () => {
    const res = await fetch("/api/products");
    return res.json();
};
console.log(fetchProducts());
//# sourceMappingURL=index.js.map