let first = 2;
let second = 3;
let third = 4;

let sumOne = function (x, z) {
    let result = x + z;
    return result;
}

let multipyTwo = function (x, z){
    let result = x * z;
    return result;
}

let divideThree = function (x, z){
    let result = x / z;
    return result;
}


let sumFour = function (item_1, item_2, item_3, callback) {
    let result = callback(item_1, item_2);       // callback F
    let backtick = `callback result : ${result}`
    console.log(backtick);

    result = item_1 + item_2 + item_3;
    return result;
}

// console.log(sumFour(first, second, third, multipyTwo));
// console.log(sumFour(first, second, third, sumOne));
console.log(sumFour(first, second, third, divideThree));



//