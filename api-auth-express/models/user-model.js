  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    fullname: {type: String, require: true} ,
    email: {type: String, require: true},
    encryptedPassword: {type: String, require: true},
    buyerInfo: {
      carMake: String,
      carModel: String,
      carYear: Number
    },
    sellerInfo: {
      propertyType: String,
      lotCap: Number
    }
  }, {
    timestamps: true
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
