//A function is a way to group codes together that you can run at anytime, as many times as you want.

// function sayHello() {
//     console.log("Hello World")
// };

// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()

// function add(a, b) {
//     console.log(a + b);
// };

// add(2, 4)

//     function subtract(a, b) {
//         return (a - b);
//         console.log('hiiiiiiiiiii')
//     };

//     const result = subtract(9, 4);
//     subtract(9, 4)
//     console.log(result, subtract(4, 2))

//     function registerUser(user="John") {
        
//         return user + " is Registered"

//     }

//     console.log(registerUser())

//     function sum(...numbers) { 
         
//         // let total = 0;

//         // for(const num of numbers){
//         //     total += num
//         // }
//         // return total;
//         return numbers
//     }

// console.log(sum(1,2,3,4,5,6,7,8,9))

// //objects as parameters

//     function loginUser(user){
//         return `the user ${user.name} with id ${user.id} is logged in`
//     }

//     const user = {
//         id: 1,
//         name: "Moses"
//     }
//     console.log(loginUser(user))

//     console.log(loginUser({
//         id:2,
//         name:"Praise"
//     }));

//     const x = 10;

//     function whatEver(){
//         return console.log(x)
//     };

// whatEver()

// function anything(){
//     const y = 50;
//     const x = 30;
//     console.log(x + y)
// };

// anything(console.log(x + y));

// //console.log(x + y)

//Function Declaration

console.log(addDollarSigns(100))

function addDollarSigns(value){
    return "$" + value
}


// Function Expression

// console.log(addDollarSign(100))

// const addDollarSign = function(value) {
//     return "$" + value;
// };
