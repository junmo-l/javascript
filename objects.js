["apple", "banana", "orange"];

apple = "apple"
//object = key, value 순서 없음
// {apple : "apple", banana : "banana", orange : "orange", mellon : "apples"};

let name = "George"; 
let species = "gorilla";
let foodEaten = ["apple", "banana", "orange"];

// string 은 기능을 가지고 있다.
// monkey는 name / species / foodEaten 이라는 기능을 가지고 있음
let monkey = {
     name : "George", 
     species : "gorilla",
     foodEaten : ["apple", "banana", "orange"],
     sumTwoAnonymous : function (x, z) {
        let result = x + z;
        return result;
    }
}

monkey.name
monkey.foodEaten[2]
