//for loop

// for([initial expression]; [condition expression], [increment expression]){ code to execute}

// for(let i = 0; i <= 11; i++){
//     console.log(i)
// }

// for(const i = 0; i <= 10; i++){
//     console.log(i)
// }
// for(let i = 0; i <= 11; i++){
//    if(i === 7){
//     console.log("7 my lucky number")
//    }else{
//     console.log(i)
//    }
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i)

//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

//looping through an Array

// const names = ["john", "peter", "job", "paul", "moses"]

// for(let i = 0; i < names.length; i++){

//     if(names[i] === "job"){
//         console.log("Job is the best")
//     }else{
//         console.log(names[i])
//     }
// }

// break

// for(let i = 0; i <= 20; i++){
//     if(i === 15){
//         console.log("breaking")
//         break;

//     }
//     console.log(i)
// }

// for(let i = 0; i <= 20; i++){
//     if(i === 15){
//         console.log("breaking")
//         continue;

//     }
//     console.log(i)
// }

//while loop
// let i = 0
// while(i <= 10){
//     console.log( i)
//     i++
// }

//do while
// let i = 0
// do {
//     console.log(i)
//     i++
// }
// while (i < 10)

//print the number 1 to 100. for multiples of 3 print "Fizz" instead of the number. for multiples of 5 print "Buzz" instead of the number

// let i;

// for(i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// for of loop

// const items = ["car", "bag", "goat", "phone", "person"]

// for(const item of items){
//     console.log(item)
// }

//for in loop
// loping through an object values

// const colors = {
//     color1: "red",
//     color2: "blue",
//     color3: "green",
//     color4: "yellow"
// }
// for( const key in colors){
//     console.log(key, colors[key])
// }

// high order array method
// forEach()

// const arr = ['house', 'car', 'bag', 'bicycle', 'shoe']

// const arrNum = [1,2,3,4,5,6,7,8]
// arrNum.forEach(function(x){
//     console.log(x * 2)
// })
//console.log(arr.__proto__)

// array.filter()

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0
// })
// console.log(evenNumbers)

// const oddNumbers = numbers.filter((number) => {
//     return number % 2 === 1
// })
// console.log(oddNumbers)

// array.map()

// const numbers = [1,3,4,8,9,6,4]
// const doubledNumbers = numbers.map((x) => {
//     return x * 2;
// })

// console.log(doubledNumbers)

//array.reduce()

const price = [233,533,566,222,11]
const sum = price.reduce(function(acc, cv){
    return acc + cv
}, 0)

console.log(sum)