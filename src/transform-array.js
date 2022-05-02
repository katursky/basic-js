const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  const disNext = '--discard-next';
  const disPrev = '--discard-prev';
  const doubNext = '--double-next';
  const doubPrev = '--double-prev';
  
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArray.push(array[i]);
    } else if (array[i] === doubNext) {
      newArray.push(array[i + 1])
    } else if (array[i] === doubPrev) {
      newArray.push(array[i - 1])
    } else if (array[i] === disPrev) {
      newArray.splice(newArray[i - 1], 1)
    } else if (array[i] === disNext) {
      newArray.splice(newArray[i + 1], 1)
    }
  }
  return newArray
}

module.exports = {
  transform
};
