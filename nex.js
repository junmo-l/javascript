let mixins = ["apple", false, "banana", 4, "orange", ["tiger", "lion"]];

// mixins.foreach((mixin, index) => {
//     console.log("mixins : " + mixin);
//     let condition = !((typeof (mixin) == 'number') || (typeof (mixin) == 'string') || (typeof (mixin) == 'boolean'))
//     if (condition) {
//         for (let animal of mixin) {
//             console.log("animals : " + animal);
//         }
//     }
// });

mixins.forEach((mixin, index) => {
    console.log("mixins : " + mixin);
    
    let condition = !((typeof (mixin) == 'number') || (typeof (mixin) == 'string') || (typeof (mixin) == 'boolean'))
    
    if (condition) {
        for (let animal of mixin) {
            console.log("animals : " + animal);
        }
    }
});