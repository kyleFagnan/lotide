const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:  ${actual}   ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==   ${expected}`);
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

const eqObjects = function (object1, object2) {
  result = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const values of Object.keys(object1)) {
    
    if (object1[values] !== object2[values]) {
      return false;
    }
  }


  return result;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2));