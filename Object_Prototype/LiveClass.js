/* 
    object :- object is entites ehich have some property and method.
    property :- propety is atribute.
    method : action that entity perform
    -->for example car is object
    -->property of car is Number_of_site, Top_Speed, Average, Price and method is break, speedUp, drive ect.
    -->stand alone function is call function.
    -->functin is attached with object is called method.
    when we create object like 
        const person1 = {
            Fname : "ABC",
            Lname : "XYZ",
            age : 20
        }
        const persion2 = {
            Fname : "ABC",
            Lname : "XYZ",
            age : 20
        }
    --> here we add one property into any one object then we have to manually add that property into second object so the chance of the error is more.

*/
//object creation without using class
const person1 = {
    fName : "abc",
    Lname : "xyz",
    fullname : function(){
        return `${this.fName} ${this.Lname}`
    }
}
const person2 = {
    fName : "mno",
    Lname : "pqr",
    fullname : function(){
        return `${this.fName} ${this.Lname}`
    }
}
console.log(person1.fullname())
console.log(person2.fullname())

// create object with class
class person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullname() {
        return `${this.fname} ${this.lname}`
    }
}
const p1 = new person("raj","sorathiya")
console.log(p1.getFullname())
const p2 = new person("wsxed","Dr.")
console.log(p2.getFullname())

//prototype chaining

per1 = {
    fname : "Abc",
    lname : "Ganesh",
    fullname : function(){
        return `${this.fname} ${this.lname}`
    }
}
per2 = {
    fname : "Karan",
    lname : "singh",
}
per2.__proto__ = per1;
console.log(per2.fullname())
per1.__proto__ = null;
//console.log(per2.toString()) error

//inheritance 
class A  {
    myMethod(){

    }
}
class B extends A{
    methodOfB(){

    }
}
obj1 = new B();
obj1.myMethod();

//inheritance without extends keyWord

class UnivarsalPerson {
    constructor(gender, hight, weight){
        this.gender = gender,
        this.hight = hight,
        this.weight = weight
    }
    walking(){
        return "All person can walk"
    }
}
class employee{
    constructor(employee_Id,salary){
        this.employee_Id = employee_Id;
        this.salary = salary;
    }
}
employee.__proto__ = UnivarsalPerson.__Proto__;
emp1 = new employee("123","20000")
emp1.walking()
