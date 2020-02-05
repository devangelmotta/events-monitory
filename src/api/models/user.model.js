const mongoose = require('mongoose');


/**
* User Roles
*/

/**
 * User Schema
 * @private
 */
const userSchema = new mongoose.Schema({
  message: String
});

module.exports = mongoose.model('User', userSchema);
