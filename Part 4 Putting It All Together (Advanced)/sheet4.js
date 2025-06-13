console.log("Putting It All Together (Advanced)")
console.log("////////////////////////////////////")
console.log("*** 1 ***")
    const obj=[
    {id:1, name:"A", score: 81},
    {id:2, name:"B", score: 92},    
    {id:3, name:"C", score: 58},
    {id:4, name:"D", score: 85},
    {id:5, name:"E", score: 87}
]
const getHighAchievers=(obj,passingScore)=>{
    const filtered = obj.filter(item=>item.score>=passingScore)
    return filtered.map(item=>item.name)
}
const passingScore = 85;
const result=getHighAchievers(obj,passingScore)
console.log("High achievers are : ", result);

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 4 Putting It All Together (Advanced)> node sheet4.js
// High achievers are :  [ 'B', 'D', 'E' ]

console.log("//////////////////////////////////////////////")
console.log("*** 2 ***")

function createGame(){
    let secretNumber=Math.floor(Math.random()*10);
    // console.log(secretNumber);

    return function guess(num){
        if(num>secretNumber){
            console.log("Too high! Try again.");
        }
        else if(num<secretNumber){
            console.log("Too low! Try again.");
        }
        else if (num===secretNumber){
            console.log("Congratulations! You've guessed the number!");
            return true;
        }
        else {
            console.log("Invalid input. Please enter a number between 0 and 9.");
        }
        // console.log("Secret Number is: ",secretNumber);
        // console.log("Your guess is: ",num);
        // console.log("=========================================");
    };
}
const guessing=createGame()
for(let i=0;i<10;i++){

    found=guessing(Math.floor(Math.random()*10));
    if(found){
        break;
    }
}

// OUTPUT
// PS C:\Users\Minfy\Desktop\Week 1 Assignment\DAY 1\Part 4 Putting It All Together (Advanced)> node sheet4.js
// Too low! Try again.