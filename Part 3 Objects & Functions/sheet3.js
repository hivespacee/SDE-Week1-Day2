console.log("OBJECTS AND FUCNTIONS")
console.log("////////////////////////////////////////////")
console.log("*** 1 ***")

const obj ={
    title:"Khaleja",
    director: 'Trivikram Srinivas',
    releaseYear: 2010,
}
console.log(obj.title);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 3 Objects & Functions> node sheet3.js
// Khaleja

console.log("//////////////////////////////////////////////")
console.log("*** 2 ***")


const user = {
    name: "Dontknow",
    age: -1,
    email:"email@wontsay"
}
function printUserDetails({name,age}) {
    console.log(`User's name is ${name}, and they are ${age} years old.`)
}
printUserDetails(user);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 3 Objects & Functions> node sheet3.js
// User's name is Dontknow, and they are -1 years old.

console.log("//////////////////////////////////////////////")
console.log("*** 3 ***")


const object=[
    {id:1, name:"A"},
    {id:2,name:"B"},
    {id:3,name:"C"}
]
const res=object.find(x=>x.id==3).name
console.log(res);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 3 Objects & Functions> node sheet3.js
// C

// console.log("//////////////////////////////////////////////")
// 
