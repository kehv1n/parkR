  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    fullname: String,
    email: String,
    phoneNumber: Number,
    Car : {
      make: String,
      model: String,
      year: Number
    },
    username: String
  }, {
    timestamps: true
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
