const express     = require('express');
const passport    = require('passport');
const bcrypt      = require('bcrypt');

const User        = require('../models/user-model.js');

const authRoutes  = express.Router();

authRoutes.get('/users',(req, res, next) => {
  User.find((err, userList) => {
    if(err){
      res.status(500).json({message: 'Something went wrong'});
      return;
    }
    res.json(userList);
  });
});

authRoutes.post('/signup', (req, res, next) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const encryptedPassword = req.body.encryptedPassword;

  //if blank
  if(!email || !encryptedPassword) {
    res.status(400).json({message: 'Provide the email and password, dummy'});
    return;
  }


  User.findOne({email}, '_id', (err, foundUser) => {
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
    const hashPass = bcrypt.hashSync(encryptedPassword, salt);

    const theUser = new User({
      fullname,
      email,
      encryptedPassword: hashPass
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

    if (!theUser) {
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
