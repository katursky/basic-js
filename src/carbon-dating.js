const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false;
  }

  let num = Number(sampleActivity);

  if (num > MODERN_ACTIVITY || num <= 0) {
    return false;
  }


  if (typeof num === 'number') {
    const log = 0.693;
    const k = log / HALF_LIFE_PERIOD;
    const i = Math.log(MODERN_ACTIVITY / num);
    const result = i / k;
    let final = Math.ceil(result);
    return final
  }
  return false;
}

module.exports = {
  dateSample
};
