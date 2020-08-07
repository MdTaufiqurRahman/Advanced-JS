 const numbers = [2, 3, 5, 4, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element ;
//     output.push(result);
// }
// console.log(output);

const result = numbers.map(x => x * x); //map .looping in array and gives array.
console.log(result);
 

const bigger = numbers.filter(x => x > 5); //filter ,if filter has no value then gives an empty array
console.log(bigger);
  //filter's special version is find.find gives only element
  const findNumber = numbers.filter(x => x > 5); 
  console.log(findNumber);
