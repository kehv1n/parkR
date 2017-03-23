const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');

const User          = require('../models/user-model.js');

module.exports = function(passport) {
  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({username}, (err, foundUser) => {

      if (err) {  ///Check for errors in query
        next(err);
        return;
      }
      if (!foundUser) { // if there was no username (not found)
        next(null, false, { message: 'Incorrect username'});
        return;
       }

      if (!bcrypt.compareSyncy(password, foundUser.encryptedPassword)) {
        next(null, false, { message: 'Incorrect password'});
      }

     next(null, foundUser); //if successfful!
    });
  }));

  //take the user object and tell me what to save about them in the session
  // with the id in the session, you can take the Id and make a DB query and retrive
  // all information about the foundUser

    passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
  });

  // I have the ID of the user, find me the user in the DB
  // Here is where you put the database stuff that you ALWAYS want displayed
  // to the user!

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
      cb(err);
      return;
      }
      cb(null, userDocument);
    });
  });
};
