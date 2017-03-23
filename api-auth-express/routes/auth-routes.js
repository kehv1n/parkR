const express     = require('express');
const passport    = require('passport');
const bcrypt      = require('bcrypt');

const User        = require('../models/user-model.js');

const authRoutes  = express.Router();

authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const nickname = req.body.nickname;
  const password = req.body.password;

  if(!username || password) {
    res.status(400).json({message: 'Provide the username and password, dummy'});
    return;
  }

  User.findOne({username }, '_id', (err, foundUser) => {

    if (err) {
      res.status(500).json({message: 'Something went wrong, sorry'});
      return;
    }

    if (foundUser) {
      res.status(400).json({message: 'The username already exists'});
      return;
    }

    ///Encrypt the password before saving...
    const salt = bcrypt.genSaltSync(11);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      encryptedPassword: hashPass,
      nickname
    });

    theUser.save((err) => {
      if (err) {
        res.status(400).json({message: 'Something went wrong...'});
        return;
      }
      req.login(theUser, (err) => {  //if all else passes, automatically log in the user..
        if (err){
          res.status(400).json({message: 'Something went wrong...'});
          return;
        }
        res.status(200).json(req.user);
      });
    });
  });
});

module.exports = authRoutes;
