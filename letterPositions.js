const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion passed:  ${array1}   ===   ${array2}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${array1}   !==   ${array2}`);

  }
};


const letterPositions = function (sentence) {
  const results = {};

  for (const index in sentence) {
    const letter = sentence[index];
    if (letter !== " ") {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  }
  }
  return results;
};




