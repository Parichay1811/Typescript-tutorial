//type inference and type annotation

/* let name = "Parichay"
name = "23" //shadoing Parichay
console.log(name);
 */

let name:String = 'Parichay'


//union and any

//let suppose we have sent an API request and we do not know that what is going to be the respons. In that case we use union. 

//union
let requestStatus: 'pending' | 'success' | 'failed' = "pending"
//Here, we have given the probably datatypes so it will take any of them not anything from the out of the context.

// any

const orders = ['13', '22', '35', '86']

let currentOrder

for(let order of orders){
    if(order === "22"){
        currentOrder = order
        break
    }
}
console.log(currentOrder);

// in the above example initially when we initialized the currentOrder it is a type of any. But, when we are passing the currentOrder as argument it is showing the value as string | undefined. because, TS thinks currentOrder can be a string OR it can still remain undefined

// 1:00:00