 let bonus = 20; //its a global value can access from anyplace.
 function sum(num1, num2){
     let result = num1 + num2 + bonus;
     console.log(bonus);
     if(result > 9){
         let mood = "happy";   // let and const have a range.if a write console.log outside from {} range then it give error.let and const are very organized. var is flexible.
         mood = "nice";
         console.log(mood);
     }
     return result;

 }
const output =sum(2, 3);
console.log(bonus);
console.log(output);