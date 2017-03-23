const express     = require('express');
const passport    = require('passport');
const bcrypt      = require('bcrypt');

const User        = require('../models/user-model.js');

const authRoutes  = express.Router();

authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const nickname = req.body.nickname;
  const password = req.body.password;

  //if blank
  if(!username || password) {
    res.status(400).json({message: 'Provide the username and password, dummy'});
    return;
  }


  User.findOne({username }, '_id', (err, foundUser) => {
    //if error in the query
    if (err) {
      res.status(500).json({message: 'Something went wrong, sorry'});
      return;
    }

    //if user found
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
    //save user
    theUser.save((err) => {
      //if the save errors..
      if (err) {
        res.status(400).json({message: 'Something went wrong...'});
        return;
      }
      req.login(theUser, (err) => {
         //if all else passes, automatically log in the user..
         // if login fucks up
        if (err){
          res.status(400).json({message: 'Something went wrong...'});
          return;
        }
        res.status(200).json(req.user);
      });
    });
  });
});

authRoutes.post('/login', (req, res, next) => {
  const passportFunction = passport.authenticate('local',
  (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong'});
      return;

    }

    if (!theUSer) {
      res.status(401).json({message: failureDetails});
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({message: 'Something went wrong'});
        return;
      }
      res.status(200).json(req.user);
    });
  });
});

authRoutes.post('/logout', (req, res, next) => {
  req.logout();

  res.status(200).json({message: 'Success'});
});

authRoutes.get('/loggedin', (req, res, next) => {
  //if the user is logged in
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  //if the user is not logged in
  res.status(401).json({message: 'Unauthorized.'});
});

function gtfoIfNotLogged(req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(403).json({message: 'FORBIDDEN'});
    return;

  }
}
authRoutes.get('/private',gtfoIfNotLogged, (req, res, next) => {
  res.json({ message: 'Todays lucky number 76787'});
});

module.exports = authRoutes;
