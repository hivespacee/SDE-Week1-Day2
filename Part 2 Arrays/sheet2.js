console.log("ARRAYS")
console.log("/////////////////////////////////////")
console.log("*** 1 ***")
let colors = ["red","blue","green"];
console.log("Initial colors:", colors);

colors.push("black");
console.log("After push:", colors);

colors.unshift("orange");
console.log("Final colors array:", colors);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// Initial colors: [ 'red', 'blue', 'green' ]
// After push: [ 'red', 'blue', 'green', 'black' ]
// Final colors array: [ 'orange', 'red', 'blue', 'green', 'black' ]

console.log("//////////////////////////////////////////////")
console.log("*** 2 ***")

const numbers=[10, 20, 30, 40, 50];
const updatedNumbers=numbers.map(num => num+5);
console.log("Original numbers: ",numbers);
console.log("Numbers increased by 5: ",updatedNumbers);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// Original numbers:  [ 10, 20, 30, 40, 50 ]
// Numbers increased by 5:  [ 15, 25, 35, 45, 55 ]

console.log("//////////////////////////////////////////////")

console.log("*** 3 ***")
let scores = [25, 80, 45, 95, 60, 75];
let highScores = scores.filter(score => score >= 70);
console.log("Initial scores:", scores);
console.log("Scores 70 or higher than 70:", highScores);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// Initial scores: [ 25, 80, 45, 95, 60, 75 ]
// Scores 70 or higher than 70: [ 80, 95, 75 ]

console.log("//////////////////////////////////////////////")

console.log("*** 4 ***")
// let scores = [25, 80, 45, 95, 60, 75];
let avg = scores.reduce((sum, s) => sum + s, 0);
let answer= avg / scores.length;
console.log("Average score:", answer);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 1 Basics and Variables> node sheet1.js
// Average score: 63.333333333333336

console.log("//////////////////////////////////////////////")



///////////////////////////////////////////////