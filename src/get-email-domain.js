const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let array = str.split(',');

  const a = '@';
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === a) {
      let newArray = array.splice(array[i], -1);
      let newString = newArray.join('');
      return newString
    }
  }
}

module.exports = {
  getEmailDomain
};
