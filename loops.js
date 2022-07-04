// 컨디션은 true or false
// while
// let count = 0;
// let condision = count > 100;
// while (count > 100) {
//     count = count + 1; 
//     console.log('in while : '+count);
// } 

// console.log("program end !");


// // for
// for (let count = 0; count < 5; count = count + 1) {
//     console.log("in for with count : "+count);
// }

// let fruits = ["apple", "banana", "orange"] ;
// for (let index = 0; index <= 2; index ++) {
//     console.log("in for with fruits : "+fruits[index]);
// }

// iteral 변수안에 어레이 인덱스 값을 그대로 넣어 출력하는방법 어레이가 끝나면 자동종료
// let fruit = fruits[index];
// let fruits = ["apple", "banana", "orange"] ;
// for (fruit of fruits){
//     console.log("fruit : "+fruit);
// }

// let animals = ["tiger", "lion"] ;
// for (animal of animals){
//     console.log("animals : "+animal);
// }
// console.log("program end !");

// 어레이 안의 어레이 뽑는법 for (let mixin of mixins[위치])
// let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]];
// for (let mixin of mixins) {
//     console.log("mixins : " + mixin);
//     // console.log(!(((typeof mixin)  == 'number') || ((typeof mixin)  == 'string') || ((typeof mixin)  == 'boolean'))) {
//     let condition = !(((typeof mixin)  == 'number') || ((typeof mixin)  == 'string') || ((typeof mixin)  == 'boolean'))
//     if (condition) {
//     for (let animal of mixin) {
//             console.log("animals : " + animal);
//         }
//     }
// }

// 변수속성]\
// typeof mixin
// 'string'
// (typeof mixin)  == 'string'
// true
// (typeof mixin)  == 'number'
// false


let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]];
let fruits = ["apple", "banana", "orange"] ;

console.log("program end !");