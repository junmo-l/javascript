let varFirst = 1;
console.log(varFirst);

{
    var varSencond = 2;
    console.log(varSencond);
}
console.log(varSencond);

{
    let varThird = 3;
    console.log("Third - first : " + varThird);
}
console.log("next");

{
    let varThird = 4;
    console.log("Third - second : " + varThird);
    {
        let varFifth = 5;
        console.log("Third - third : " + varThird);
        console.log("First : " + varFirst);
        console.log("test1 : " + varThird);
        console.log("test2 : " + varFifth);
    }
    console.log("Third - fourth : " + varThird);

}
console.log("End !");
