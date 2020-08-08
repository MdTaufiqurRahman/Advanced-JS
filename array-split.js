const nums = [1, 2, 5, 6, 7, 8]
const part = nums.slice(2, 5);// slice cut from main array.and main array value not changed.
console.log (part);

const remove = nums.splice(2, 5, 55, 77); //splice remove from array which number of i given. also removed from main array.and remove item we can inject with splice.
console.log (remove);

const together = nums.join(","); // create a string.
console.log(together);