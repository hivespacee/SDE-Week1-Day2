console.log("BASICS AND VARIABLE")
console.log("/////////////////////////////////////////////")
console.log("*** 1 ***")
const favoriteFood = "pizza";
console.log(favoriteFood);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// pizza

console.log("//////////////////////////////////////////////")
console.log("*** 2 ***")
const numA=69;
const numB=96;

if(numA>numB) {
    console.log("numA is larger than numB");
} 
else if(numB>numA) {
    console.log("numB is larger than numA");
} 
else{
    console.log("Both are equal");
}

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// numB is larger than numA


console.log("//////////////////////////////////////////////")
console.log("*** 3 ***")

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz


