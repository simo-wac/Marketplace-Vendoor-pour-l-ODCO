const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {type: String, require: true, unique: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  firstname: {type: String, require: true},
  lastname: {type: String, require: true},
  type: {type: Boolean, require: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
