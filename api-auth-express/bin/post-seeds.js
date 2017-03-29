const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-auth-express');
const Post = require('../models/post-model.js');


const posts = [
  {
    author: '58db3518f1d0f69c5df4cc05', //refers to the "users" in DB
    location: {
      latitude: 25.765373,
      longitude: -80.196787,
    },
    price: 12,
    decription: 'Great place, nice price. Come by and stay',
    extras: 'Shaded parking, free water.',
  },
  {
    author: '58d55bb3f48ae4a725f6ae21',
    location: {
      latitude: 38.897957,
      longitude: -77.036560,
    },
    price: 12000,
    decription: 'Plenty of security, room for everyone except republicans',
    extras: '24/7 Security, Plenty of space, shaded parking',
  },
  {
    author: '58db3518f1d0f69c5df4cc03',
    location: {
      latitude: 25.768581,
      longitude: -80.194335,
    },
    price: 8,
    decription: 'come and stay but dont stay for long..',
    extras: `you get nothing and you'll be thankful!! `,
  },
  {
    author: '58d55f1a0c8a17aebb90dacd',
    location: {
      latitude: 25.767248,
      longitude: -80.196599,
    },
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
