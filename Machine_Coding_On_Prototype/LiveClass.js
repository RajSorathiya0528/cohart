/* 
    Prototype
    Dot operator object ki property ok accesses karne me halp karta he.
    -->prototype contain pre define method on data type for example for array prototype contain some method like
        1] .forEach 
        2] .mep 
        3] .filter
    when we cheate new array than all those method are avalable for those array
    summary :-
    Array.prototype = { properties }
    when we creat object of the Array then javascript create __proto__
    arr.__proto__ = Array.prototype

    Array.prototype.myFunction = function(){
        console.log("Hello From JavaScript")
    }
    const myArray = [10,20,30]
    myArray.myFunction()
    here in myArray property of the Array is inherited

    polyfill function :- 
        -->function of the protutype that is not devlope by the browser then that time we create our own function this function is call polyfill function.
        -->here we chack if function is avaliable in __protp__ then use that function atherwise use my ownfunction.

*/

const arr = [1,2,3]
if(!Array.prototype.fill()){
    Array.prototype.fill() = {
        //functionality of fill method
    }
}

const myArray = [1,2,3,4,5,6];

//Error: .forEach function dose not exist on myArray on variable

//polyfill dunction for forEach method.

// forEach : no return , function input :- index, value

if (!Array.prototype.MyForEach){
    Array.prototype.MyForEach = function(UserFunction){
        const originalArray = this;
        for(let i = 0; i < originalArray.length; i++){
            UserFunction(originalArray[i], i);
        }
    }
}

const ans = myArray.MyForEach((value, index) => {
    //console.log(`index at ${index} value is ${value}`)
})

//map polyfill function

//Signature of the map function 
//return : new array
//working : eitret each element and perform task given by using callbeck function

if(!Array.prototype.MyMap){
    Array.prototype.MyMap = function(callbeck) {
        const originalArray = this;
        const newArray = new Array(originalArray.length)

        for(let i = 0;i < originalArray.length; i++){
            newArray[i] = callbeck(originalArray[i], i);
        }

        return newArray
    }
}
const m2 = myArray.MyMap((e) => e*2)
//console.log(m2)

//fliter polyfill function
//Signature :- return new array
//working :- if user function of input return true then that element is insert into new array

if(!Array.prototype.MyFilter){
    Array.prototype.MyFilter = function(callBack){
        const originalArray = this;
        let index = 0;
        const newArray = [];
        for(let i = 0; i < originalArray.length; i++){
            const state = callBack(originalArray[i], i)
            if(state){
                newArray[index] = originalArray[i];
                index++;
            }
        }
        return newArray
    }
}
m3 = myArray.MyFilter((e) => e % 2 == 0)
console.log(m3)