const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:  ${actual}   ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      console.log(key);
    }
  }
};




