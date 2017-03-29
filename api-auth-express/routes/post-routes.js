const express     = require('express');
const Post        = require('../models/post-model.js');
const postRoutes  = express.Router();


/// Allows us to retrieve all posts
postRoutes.get('/posts', (req, res, next) => {
  Post.find((err, postList) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong'});
      return;
    }
    res.json(postList);
  });
});

// Make new posts
postRoutes.post('/newPost', (req, res, next) => {
  const author = req.user._id;
  const location = req.body.location;
  const price = req.body.price;
  const description = req.body.description;
  const extras = req.body.extras;

  if (!price || !location || !author || !description ) {
    res.status(400).json({message: 'Please provide all field'});
    return;
  }

  const thePost = new Post({
    author: author,
    location: location,
    price: price,
    description: description,
     extras: extras,
  });

  thePost.save((err) => {
    if (err) {
      res.status(500).json({message: 'Error saving post. Try again l8ter'});
      return;
    }

    res.status(200).json(req.post);
  });
});

module.exports = postRoutes;
