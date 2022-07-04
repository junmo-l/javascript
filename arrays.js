// array is in order 배열은 순서가 있음
let fruits = ["apple", "banana", "orange"] ;
// fruits[2]

// 뒤에 추가
fruits.push("grape");
// 뒤에서 뺌
fruits.pop();
// fruits.splice(1(위치), 2(개수)) 삭제
// fruits.indexOf("orange") 위치
// fruits.includes("orange") 값이 있는지 찾기
// fruits.join(" and ") 어레이 안의 값 찾기
// 'apple and banana and orange and grape'.split(" and ") 스트링 값을 다시 배열로
console.log("");

// 값 추가하여 담기
let animal = ["tiger", "lion"] ;
let mixin = animal.concat(fruits);

let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]] ;

// "end" --> ["e", "n", "d"];

console.log("program end !");

// mixins[6]
// undefined
// mixins[[6]]
// undefined
// mixins[[5]]
// (2) ['tiger', 'lion']
// mixins[5]
// (2) ['tiger', 'lion']
// mixins[[5], 2]
// 'banana'
// mixins[5][1]
// 'lion'