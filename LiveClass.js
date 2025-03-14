/* Object data structure in Js
-->Data structure : how to store your data in memeury. for example you put in it into stack data structure, stack data structure, key value pair etc.
-->in any language there are two data structure
    1] primitive : a structure which inbuilt support
        * integer
        * float
        * String
        * Boolean
        * undefined
        * symbol
        * null
        * array
        * object
    2] non-primitive : a structure which we will create out of the box.
        * Stack
        * queue
        * Linked list
    Array : 
        --> we store data in siquential manae
        --> to create array ew use [ ].
    Object :
        --> we store data in key value pair
        --> to creat object we use { }.
        --> we can group number of element in singel object.
        --> object is use to slove the real world problem and to define realworld entinty in to code.for example pan, remot etc.
*/
//creating object
const person = {
    name : "raj",
    age : "20",
    eno : 230433116020,
    branch : "IT",
    class : "B",
    address : {
        houseNumber : "B102",
        streat : "narayan streat",
        countryCode : "IN91",
        state : "Gujrat"
    }
}
//accessing value of object
//console.log(person.age);
//console.log(person.name)
//console.log(person.address.state)

const remot = {
    color : "white",
    numberOfSwitch : 16,
    purpos : "TV",
    isCellAvaliable : "True",
    isWorkProperly : "True",
    rangeInRadiaus : "10m",
    volum : 0,
    turnOff : function() {
        this.turnOff = !this.turnOff;
    },
    addVolum : function() {
        this.volum= this.volum++;
    }
}

// second example 
//problem related to heap memory access by refrence.
const p1 = {
    name : "jay"
}
let p2 = p1
p2.name = "karama"
console.log(p2)
console.log(p1)

// solution
 const obj1 = {
    name : jay
 }
 const obj2 = {
    ...obj1 // spread obj1
    // spread operator are not work on inner object it is call shallow copy
 }

 obj2.name = "kanak"

/* 
 in any language we have two type of memory 
    1] stack memory
        --> all the variable store in stack memory
        --> a data structuer which can aquwire dynamicaly memory that is not store in stack memory for example array, object ect.
    2] heap memory
        --> array and object are store in heap memory.
        --> the refrence address is store in stack mpmory.

    Suppos we have one object obj1 that is store in heap memory at 12F memory lecotion and that address is store in stack memory with obj1 variable name,
    when ew assign obj2 = obj1 then obj2 get location of obj1 so when we change obj2 so obj1 also change.

garbeg collector : when the refrence of the object is remove from the stack memory then garbage collector delete that actuall value in heap memory.

memory lick : when you have one objecgt and two refrence of that objecj and any one of the object is remove from the memory and also delete that actual data from the heap memory so in thisa case one refrence is also point to that location and the value of that location empty this condition is call memorylick. only possible in c , c++ language that not contain garbage collector.
*/ 