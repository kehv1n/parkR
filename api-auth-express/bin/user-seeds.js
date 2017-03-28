const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-auth-express');
const User = require('../models/user-model.js');


const users = [
  {
    fullname: 'Joe Schmoe',
    email: 'JoeSmoe@yourmom.com',
    encryptedPassword: 'JoeyDontGo',
    buyerInfo: {
      carMake: 'Honda',
      carModel: 'Civic',
      carYear: '1989'
      }
  },
  {
    fullname: 'Josh Dillain',
    email: 'JoshD@yahoo.com',
    encryptedPassword: 'gojoshgo',
    buyerInfo: {
      carMake: 'Lamborghini',
      carModel: 'Gollhardo',
      carYear: '2017'
      }
  },
  {
    fullname: 'Jp Zee',
    email: 'jeanpaulzune@gmail.com',
    encryptedPassword: 'beesgobzz',
    buyerInfo: {
      carMake: 'Toyota',
      carModel: 'Carolla',
      carYear: '2006'
      }
  },
  {
    fullname: 'Hue Heffner',
    email: 'playboyHue@playboy.com',
    encryptedPassword: 'softerthanyouthink',
    sellerInfo: {
      propertyType: 'Beach Front Plaza',
      lotCap: 95
      }
  },
  {
    fullname: 'Bear Grylls',
    email: 'manvwild@discovery.com',
    encryptedPassword: 'drinkmypiss',
    sellerInfo: {
      propertyType: 'Lot in the wild',
      lotCap: 4
      }
  },
  {
    fullname: 'Barack Obama',
    email: 'barackisback@whitehouse.com',
    encryptedPassword: 'yourefucked2017',
    sellerInfo: {
      propertyType: 'White House Parking Garage #2',
      lotCap: 150
      }
  },
];

User.create(users ,(err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneUser) =>{
    console.log(`${oneUser.fullname}
      ${oneUser._id}`);
  });

  mongoose.disconnect();
});
