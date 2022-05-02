const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumb, turnSp) {
  const toSeconds = 3600;
  let turn = Math.pow(2, diskNumb) - 1;
  let time = Math.floor((turn / turnSp) * toSeconds);
  let result = {
    turns: turn,
    seconds: time
  };
  return result
}

module.exports = {
  calculateHanoi
};
