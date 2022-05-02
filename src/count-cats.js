const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 
function countCats(matrix) {
  let count = 0;
  let newArray = matrix.flat();
  for (let i = 0; i < newArray.length; i++) {
    let currentElement = newArray[i];
    const cat = '^^';
      if (currentElement == cat) {
        count++
    }
  }
  return count;
}

module.exports = {
  countCats
};
