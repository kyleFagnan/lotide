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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (!eqObjects(actual, expected)) {
    console.log(`🛑️🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  } else {
    console.log(`✅️✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
};

// assertObjectsEqual({a:"1",b:"5",c: "9"}, {b:"5", c:"9",a:"1"});