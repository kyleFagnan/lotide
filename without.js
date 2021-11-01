// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅✅✅ Assertion passed:  ${array1}   ===   ${array2}`);

//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed:  ${array1}   !==   ${array2}`);
    
//   }
// };

// const eqArrays = function(array1, array2) {
//   let result = true;
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
   
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
    
//   }
//   return result;
// };




  
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};




// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]