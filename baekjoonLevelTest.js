// 텍스트불러오기
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// let A = input;

// 1단계 1330 조건문 두 수 비교하기
//파일 불러오기
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf8').toString().split(' ');

// //파일의 첫번째 값
// let A = Number(input[0]);
// //파일의 두번째 값
// let B = Number(input[1]);

// if(A>B){
//     console.log(">");
// } else if (A<B){
//     console.log("<")
// } else {
//     console.log("==")
// }

// `${A+B}??!`
// ""

// // 2단계 9498 시험 성적
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf8').toString();

// let score = Number(input[0]);

// if (score >= 90) {
//     console.log("A")
// } else if (score >= 80) {
//     console.log("B")
// } else if (score >= 70) {
//     console.log("C")
// } else if (score >= 60) {
//     console.log("D")
// } else  {
//     console.log("F")
// }

// 3단계 9498 윤년
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf8').toString();

// let year = Number(input);

// if ((year%4===0 && year%100!==0) || year%400===0) {
//     console.log("1");
// } else {
//     console.log("0");
// }


// let A = 1 <= 4000
// let year = 2000;
// !B%100==0

// let year = 2000;

1단계 1330 조건문 두 수 비교하기
파일 불러오기
const fs = require('fs');
const input = fs.readFileSync(0,'utf8').toString().split(' ');
let A = Number(input[0]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);
