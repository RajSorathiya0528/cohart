//problem 1 create report
let expenses = [
    {description: "Groceries", amount: 50, category: "Food"},
    {description: "Electricity Bill", amount: 100, category: "Utilities"},
    {description: "Dinner", amount: 30, category: "Food"},
    {description: "Internet Bill", amount: 50, category: "Utilities"}
];
let expenseReport = expenses.reduce((report, expe) => {
    //console.log("category :",expe.category)
    //console.log("cat :", report[expe.category])
    //console.log("amo :",expe.amount)
    report[expe.category] += expe.amount;
    return report;
}, {Food: 0, Utilities: 0});
//console.log(expenseReport)

//problem 2
let tasks = [
    {description: "write reoprt", completed: false, priority: 2},
    {description: "send email", completed: true, priority: 3},
    {description: "Prepar prosenation", completed: false, priority: 1},
]
let incomplit = tasks
    .filter((task) => task.completed == false)
    .sort((a, b) => a.priority - b.priority)

//console.log(incomplit)

//problem 3
let movieReatings = [
    {title : "movie A", retings: [4,5,3]},
    {title : "movie B", retings: [5,5,4]},
    {title : "movie C", retings: [3,4,2]}
]
let ave = movieReatings.map((movie) => {
    let average = movie.retings.reduce((sum , rating) => sum + rating, 0) / movie.retings.length
    return {title: movie.title, averageRatings: average.toFixed(1)}
})
//console.log(ave)

//function
//scope 
//->globel 
//-> block-scoped
//-> let config = function(){}() immideytlly invoked function defiation.
//-> (()=>{})
//=> example

let person1 = {
    name: "myName",
    greet : function(){
        console.log(`hello ${this.name}`)
    }
}
let person2 = {
    name: "your name"
}
person1.greet.call(person2)// direct call the function
let myfun = person1.greet.bind(person2)//terurn new function
myfun()

//todo topic :- promis, settimeout, event loop, browser for javascript, hoesiting.

