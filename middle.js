

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



module.exports = middle;