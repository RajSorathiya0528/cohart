//negativeIndex

//proxy : the proxy object enables you to create proxy for another object. where can intercept and redefine fundamental operation for that object.
//when some property of the javascript object is hide then we use proxy.
//example : 
const target = {
    message1: "hello",
    message2: "everyone",
}
const handler1 = {}
const proxy1 = new Proxy(target, handler1)

//another example of proxy
const user = {
    Name : "Raj Sorathiya",
    age : 20,
    password : "1234",
}
const proxyUser = new Proxy(user, {
    get(target, prop){
        //console.log(target) //output User object
        //console.log(prop) //output property which access using proxyUser
        if (prop === "password"){
            throw new Error("Password is not accessibel")
        }
        return target[prop]
    },
    set(target, prop, user){
        //set new value
    }
})
//console.log(proxyUser.password) // output is Raj Sorathiya

let arr = [1,2,3,4,5,6,7,8,9,10];

function nagetiveIndex(arr) {
    return new Proxy(arr, {
        get(target, prop){
            console.log(target)
            console.log(prop)
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index]
            }else{
                return target[index]
            }
        },
        set(target, prop, value){
            const index = Number(prop)
            if(index < 0){
                target[target.length + index] = value 
            }else{
                target[index] = value
            }
            return true
        }
    })
}
let tempArr = nagetiveIndex(arr);
console.log(tempArr[-1])
tempArr[-2] = 20
console.log(tempArr)
console.log(arr)

//debounceing and throtrling