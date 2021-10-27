const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion passed:  ${array1}   ===   ${array2}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${array1}   !==   ${array2}`);
    
  }
};

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
   
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return result;
};

const middle = function(array) {
  const middleArray = [];
  const midPoint = array.length / 2;
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    const evenNumMiddle = array.slice(midPoint - 1, midPoint + 1);
    return evenNumMiddle;
  } else {
    Math.round(midPoint);
    const oddNumMiddle = array.slice(midPoint, midPoint + 1);
    return oddNumMiddle;
    
  }
};

console.log(middle([1,2,3,4,5,6,7]));