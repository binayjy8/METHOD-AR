// let arr = [1, 2, 4, 8, 5];

// arr.forEach( (el) => {
//     console.log(el);
// });

// let info = [ {
//     name: "biki",
//     mark: 45,
// }, {
//     name: "binay",
//     mark: 73,
// }, {
//     name: "mohanta",
//     mark: 34,
// },];

// info.forEach( (el) => {
//     console.log(el.mark);
// });

// let arr = [1, 2, 3, 4];

// let double = arr.map( (el) => {
//     return el * 2;
// });

// let num = [1, 3, 4, 5, 6, 8, 9, 10, 12];
// let ans = num.filter( (el) => {
//     return el % 2 != 0;
// });

// let num = [1, 2, 3, 4];
// let finalVal = num.reduce( (result, el) => result + el);

// let arr = [2, 4, 5 ,9 ,11, 39];

// let ans = arr.reduce( (max, el) => {
//     if(el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(ans);

// let arr = [10, 20, 40, 80];

// let ans = arr.every( (el) => el%10 == 0);
// console.log(ans);

// let arr = [3, 4, 5, 1, 8];

// function getMin(arr) {
//     let min = arr.reduce( (min, el) => {
//         if( min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });

//     return min;
// }

// function sum(a, b = 4) {
//     return a+b;
// }

// let char = [..."binay"];

// let arr = ["peter", "eliza", "swan", "max", "sony"];

// let [winner, runnerups, ...others] = arr;

// const info = {
//     name: "peter",
//     age:42,
//     subject: ["eng", "math", "sci", "zlo"],
//     city: "khuntapingu",
//     username: "lepe@123",
//     password: "aswe"
// }

// let {username: user, password} = info;

let nums = [1, 2, 4, 7, 9];

let square = nums.map( (num) => num * num);
console.log(square);

let sum = square.reduce( (acc, el) => acc+el, 0);
let avg = sum/nums.length;

console.log(avg);