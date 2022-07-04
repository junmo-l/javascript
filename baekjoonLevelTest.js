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

// 1단계 1330 조건문 두 수 비교하기
// 파일 불러오기
// const fs = require('fs');
// const input = fs.readFileSync('./ee.txt').toString().split('\n');
// let A = Number(input[0]);
// let B = input[1].split(' ')
// // 0,'utf8'


// console.log(A+B);
// console.log(A-B);
// console.log(A*B);
// console.log(parseInt(A/B));
// console.log(A%B);

// 반복문 1단계 구구단
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf8').toString();
// let A = Number(input);

// for (let B = 1; B <= 9; B++) {
//     console.log(`${A} * ${B} = ${A*B}`);
// }

// 반복문 2단계 210950 A+B - 3
// const fs = require("fs");
// // const input = fs.readFileSync(0,'utf8').toString().split('\n');
// const input = fs.readFileSync('./ee.txt').toString().split("\n");

// for (let i = 0; i < input[0]; i++) {
//     let num = input[i+1].split(" ");
//     console.log(Number(num[0])+Number(num[1]));
// }

// 반복문 3단계 8393 합
// const fs = require("fs");
// const input = fs.readFileSync(0,'utf8').toString();
// let A = Number(input);
// sum = 0;
// for (let i = 1; i <= A; i++) {
//      sum +=  i
// }
// console.log(sum);

// // 반복문 4단계 15552 빠른 A+B
// const fs = require("fs");
// // const input = fs.readFileSync(0,'utf8').toString().split("\n");
// const input = fs.readFileSync('./ee.txt').toString().split("\n");
// let A = Number(input[0]);
// let answer = ' ';

// for (let i = 1; i <= A; i++) {
//     let num = input[i].split(" ");
//     answer += Number(num[0]) + Number(num[1])+"\n";
// }
//     console.log(answer);

// 반복문 5단계 
// const fs = require("fs");
// const input = fs.readFileSync(0,'utf8').toString();
// // const input = fs.readFileSync('./ee.txt').toString();
// let A = Number(input);
// for (let i = 1; i <= A; i++) {
//     console.log(i);
// }

// // 반복문 9단계 8393 합
// const fs = require("fs");
// // const input = fs.readFileSync(0,'utf8').toString();
// const input = fs.readFileSync('./ee.txt').toString().trim();
// // let A = input;
// for (let i = 1; i <= input; i++) {
//     console.log('*'.repeat(i));
// }

// 반복문 10단계 8393 합
const fs = require("fs");
// const input = fs.readFileSync(0,'utf8').toString().trim();
const input = fs.readFileSync('./ee.txt').toString().trim();
// let A = input;
for (let i = 1; i <= input; i++) {
    console.log(' '.repeat(input-i)+'*'.repeat(i));
}
