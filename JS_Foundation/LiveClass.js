let Name = "Raj Sorathiya" // not use
const pi = 3.14 // const vlaue is not change

// variable, datatype and its value
let number = 42 // Number
let text = "Hello" //String
let isTrue = true //Boolean
let nothing = null // Object
let undefineValue = undefined //Undefined
let symbolvar = Symbol() // Symbol

//Object in javascript
let person = {
    name : "raj sorathiya",
    age : 20,
    isStudent : true
}

//type conversion
//operation add, sub, div, mod, power
//comperision equal, grater then, less then, === strict ckeck
random = Math.ceil(Math.random()*10 % 6)
console.log(random)

//String operation
//Array
//object
//object distrucharing
let chaiRecipe = {
    name : "green tea",
    ingredients : "spicese"
}
let chaiType = ["green Tea", "Masala tea", "lemon tea"]
let { name, ingredients } = chaiRecipe;
//array distruchring
let [firstChai, secondChai] = chaiType;
console.log(firstChai)
//if-else
//function
let totalAmount = 999;
if(totalAmount >= 1000){
    let discount = [(totalAmount * 10) / 100];
    totalAmount = totalAmount - discount
}else{
    totalAmount = totalAmount;
}
//console.log(`total amount is ${totalAmount}`)

function chackValue(value) {
    if(value){
        console.log("Truth");
    }else{
        console.log("False");
    }
}
//why it return true or false
//console.log(chackValue(1))
//console.log(chackValue(0))
//console.log(chackValue([]))
//console.log(chackValue(""))
//ternatry operater 
// && -> and || -> or ! -> not

let selesData = [
    {product : "leptop", price: 1200},
    {peoduct : "mobile", price: 800}
]

let inventory = [
    {name: "Widget A", stock:30},
    {name: "Widget B", stock:120},
    {name: "Widget C", stock:45},
    {name: "Widget D", stock:70},
]

let highStock = inventory.reduce((acc, inve)=>{
    if(inve.stock > acc.stock){
        return inve
    }else{
        return acc
    }
})
console.log(highStock)



//reduce() take one callback function and one initial value.
// call back function take two parameter one accumlator and one is Current value
// accumulator : the value resulting from the privious call to callbackfun. on first call, its value is initialvalue if the letter is specified otherwise its value is array[0].

let initialValue = 0
let totalSales = selesData.reduce((acc, sale) => acc + sale.price, initialValue)
//console.log(totalSales)