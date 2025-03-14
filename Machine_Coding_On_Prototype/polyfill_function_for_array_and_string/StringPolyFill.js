// 1] toUperCase function polifll
// return :- upper case string
// signature :- not take any input from user,
// working :- convert letter into uppercase.
let MyStr = "Hello World 123";
if(!String.prototype.MyToUpperCase){
    String.prototype.MyToUpperCase = function() {
        let userStr = this;
        let newStr = "";
        for(let i = 0; i < userStr.length; i++){
            const ASCIIOfI = userStr.charCodeAt(i);
            if (ASCIIOfI <= 90){
                newStr += String.fromCharCode(ASCIIOfI)
            }
            else {
                Capital = String.fromCharCode(ASCIIOfI - 32)
                newStr += Capital;
            }
        }
        console.log(newStr)
    }
}
s1 = MyStr.MyToUpperCase()
//2] replace polifill function
// return new string 
// working : pelace the chatacter n[target charcter] with m[replace character]
// input (n , m)
if(!String.prototype.MyReplace){
    String.prototype.MyReplace = function(target, replaceValue){
        userStr = this
        newStr = ""
        for(let i = 0; i < userStr.length; i++){
            if(userStr[i] == target) {
                newStr += replaceValue 
            }
            else{
                newStr += userStr[i]
            }
        }
        return newStr
    }
}
s2 = MyStr.MyReplace("l","f")
console.log(s2)