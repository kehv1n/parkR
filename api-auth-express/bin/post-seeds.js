const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-auth-express');
const Post = require('../models/post-model.js');


const posts = [
  {
    author: 'Schmitty Webemernejensken',
    location: 'Latitude: -12.29366, Longitude: -175.63187',
    price: 12,
    decription: 'Great place, nice price. Come by and stay',
    extras: 'Shaded parking, free water.',
  },
  {
    author: 'John F. Kennedy',
    location: 'The White House',
    price: 12000,
    decription: 'Plenty of security, room for everyone except republicans',
    extras: '24/7 Security, Plenty of space, shaded parking',
  },
  {
    author: 'Mathew McConohay',
    location: 'Latitude: 14.61421, Longitude: 74.84015',
    price: 8,
    decription: 'come and stay but dont stay for long..',
    extras: `you get nothing and you'll be thankful!! `,
  },
  {
    author: 'Ben Stiller',
    location: 'Latitude: 29.38460, Longitude: 58.49660',
    price: 2,
    decription: 'Its a museum so, its $2.00 just to get in',
    extras: ` Free museum visits, shaded parking, handicap accessible `,
  },
];

Post.create(posts ,(err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((onePost) =>{
    console.log(`${onePost.author}
      ${onePost._id}`);
  });

  mongoose.disconnect();
});
