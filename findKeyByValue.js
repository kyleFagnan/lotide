const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:  ${actual}   ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


const findKeyByValue = function(object, value) {
  for (const key in object) {

    if (object[key] === value) {
      return key;
    }


  }
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);