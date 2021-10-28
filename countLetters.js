const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed:  ${actual}   ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==   ${expected}`);
  }
};

const countLetters = function(sentence){
  const letterCount = {};

   for(const letters of sentence){
     if (letters !== " "){
    if(letterCount[letters]){
      letterCount[letters] += 1;
    } else{
      letterCount[letters] = 1;
    }
  }
 }
  console.log(letterCount);
}

