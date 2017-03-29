const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: {type:Schema.Types.ObjectId, ref: 'User'},
  location: {type: String, required: true},
  price: {type: Number, required: true, min: 1},
  description: {type: String},
  extras: {type: String}

  },{timestamps: true});

  const Post = mongoose.model('Post', postSchema);

  module.exports = Post;
