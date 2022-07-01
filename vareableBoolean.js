// 변수타입 boolean
// false : 0, null, NaN, undefined, ''
// true : any others value
// breakpoint 에서 가장 가까운 값을 확인해야 boolean을 알수있음
let flag = true; // 1   명확히 해줘야함
flag = false; // 0

let condition = 20 > 5;
condition = 20 <= 5;

let conditionFirst = 15 > 5;
let conditionSecond = 15 < 7;

// 계산 ||(or)둘중하나만 긍정=긍정, &&(and)둘중 하나만 부정=부정, !(not)부정 상태값을 변경해야할때 사용
let result = conditionFirst || conditionSecond;
result = conditionFirst && conditionSecond;
!result;
console.clear();