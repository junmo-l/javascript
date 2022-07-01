// ()안에 내용이 맞으면 스코프 실행
// 상수 보다는 변수를 많이 사용

let condition = false;
condition = 30 > 6;

numberFirst = 30;
numberSecond = 6;
condition = numberFirst > numberSecond;

let conditionSecond = (numberFirst <= numberSecond);
condition = condition || conditionSecond;

if (condition) {
    console.log("in if state!")
}

if (!condition) {
    console.log("not in if state!")
}

let score = 50;
if (score >= 90) {
    console.log("well !")
} else if (score >= 50) {
    console.log("good !")
} else {
    console.log("not bad !")
}

console.clear()