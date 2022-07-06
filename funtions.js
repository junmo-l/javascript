// x = "str" // x = 2 --> y = 3
// y = x + 1

// function sum(x)
// {
//     let y = x + 1
//     return y;
// }

// function muliply(x)
// {
//     let y = x * 1
//     return y;
// }

// sum(5);
// muliply(6);

// y = x + z

// 호이스팅 펑션의 순서를 스스로 변경

// let result = sumTwo(5, 7);
// let print = `sumTwo : ${result}`;
// console.log(print)

// // normal
// function sumTwo(x, z) {
//     let result = x + z;
//     return result;
// }

// anonymous
// let sumTwoAnonymous = function (x, z) {
//     let result = x + z;
//     return result;
// }

// anonymous function
// let sumTwoAnonymous = function (x, z) {
//     let result = x + z;
//     return result;
// }

// sum function 3th number type variables 
// use params with variables
// result by variable and then print with back tick

// let sumTwoAnonymous = function (x, y, z) {
//     let result = x + y + z;
//     return result;
// }

// let result = sumTwoAnonymous(5, 3, 2);
// let print = `sumTwoAnonymous : ${result}`;
// console.log(print)
{
    // result = item_1 + item_2 + item_3;
}

function sumThree(item_1, item_2, item_3) {
    let result = item_1 + item_2 + item_3;
    return result;
}

let first = 2;
let second = 3;
let third = 4;
result = sumThree(first, second, third);
let backtick = `sumThree : ${result}`
console.log(backtick);

// // arrow function
// let sumTwoArrow = (x, z) => {
//     let result = x + z;
//     return result;
// }

// sumThree(first, second);

// function in fuction
// function sumThree(item_1, item_2, item_3) {
//     let result = sumTwo(item_1, item_2);
//     let backtick = `sumTwo : ${result}`
//     console.log(backtick);
//     result = item_1 + item_2 + item_3;
//     return result;
// }
// console.log(sumThree(first, second));


