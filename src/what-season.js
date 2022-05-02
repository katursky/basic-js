const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   let dateString = date.toISOString();
   let dateStringSlice = dateString.slice(4, 8);
   let dateStringFin = dateStringSlice.replace('-', '')
   let dateStringRes = dateStringFin.replace('-', '')

   const winter = 'winter';
   const spring = 'spring';
   const summer = 'summer';
   const autumn = 'autumn';
   
   let monthNum = Number(dateStringRes);
   
   if (monthNum <= 2) {
     return winter;
   } else if (monthNum <= 5) {
     return spring
   } else if (monthNum <= 8) {
     return summer
   } else if (monthNum <= 11) {
     return autumn
   } else {
     return winter;
   }
 }
 

module.exports = {
  getSeason
};
