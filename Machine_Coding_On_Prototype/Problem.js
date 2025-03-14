// create tea object represnting type of tea with property for name, type, and caffeine content
const tea = {
    name: "rajvadi chai",
    type: "milk tea",
    caffeine: "average",
}
// accesse and print the name and type of tea property
console.log(tea.name)
console.log(tea.type)
// add a new property origine of tea
tea.origin = "China"
//change the caffeine level
tea.caffeine = "Low"
//remove the type property from the tea
delete tea.type
console.log(tea)
if("origin" in tea){
    console.log("yes")
}else{
    console.log("No")
}
//for..in
for(let key in tea){
    console.log(key," : ",tea[key])
}
//nasted object
const myTea = {
    BlackTea : {
        Name: "olongeTea"
    },
    greenTea : {
        Name: "harbleTea"
    }
}
//create the copy of tea object
const tea2 = {
    name: tea.name,
    type: tea.type,
    caffeine: tea.caffeine,
    origin: tea.origin
}

/* second approach 

    const tea2 = {
        ...tea
    }
    third approach and most usely approach  

    const StringObject = JSON.stringify(tea)
    const tea2 = JSON.parse(StringObject)

    fourth approach
    
    const myObject = new Object(tea)
*/