// create a array that containg diffrient type of tea
const myTeaList = new Array("Masala Tea", "Rajvadi Tea", "Harble Tea","Ice Tea","Lamon Tea");
//console.log(myTeaList)
// add Chamomile Tea in list
myTeaList.push("Chamomile Tea")
//remove rajvadi chai
let index = myTeaList.indexOf("Rajvadi Tea")
myTeaList.splice(index,1)
//splice method take two argument first is statring point and second is where to stop this method is simlpely remove element from starting point to number of element which you give second argument.
//filter the list that only include caffeindted tea.
const caffeindted = myTeaList.filter((tea) => tea != "Harble Tea")
//console.log(caffeindted)
// filter method go to perticular element and chack the condition and when the condition is true then that element is remove from the array and return other element of the array.
//it normally work like.
/*
for(let i = 0; i < arral.length; i++){
    if(array[i] != 'item'){
        array2.push(item)
    }
}
*/
//sort the list in alphabetical order.
console.log(myTeaList.sort())
//use the loop to find the type of tea in array
for(let i = 0; i < myTeaList.length; i++){
    console.log(typeof(myTeaList[i]))
}
//find the number of count how many number of tea is not caffenited
let caffenitedTeaCount = 0;
for(let i = 0; i< myTeaList.length; i++){
    if(myTeaList[i] != "Harble Tea"){
        caffenitedTeaCount++;
    }
}
console.log(caffenitedTeaCount)
// use the loop to create new array to store tealist in uppercase
const myUpperCaseName = new Array();
for(let i = 0; i < myTeaList.length; i++){
    myUpperCaseName[i] = myTeaList[i].toLocaleUpperCase();
}
console.log(myUpperCaseName)
//use loop to find the teaname with most character
let mostCharCount = 0;
let longName = null;
for(let i = 0; i < myTeaList.length; i++){
    if(mostCharCount < myTeaList[i].length){
        mostCharCount = myTeaList[i].length
        longName = myTeaList[i]
    }
}
console.log(mostCharCount)
console.log(longName)