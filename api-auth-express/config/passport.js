const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');

const User          = require('../models/user-model.js');

module.exports = function(passport) {
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'encryptedPassword',
  passReqToCallback: true,
  session: true
},(req ,email, encryptedPassword, next) => {
  User.findOne({email:email}, (err, foundUser) => {
     console.log('found a user in the DB');
     if (err) {  ///Check for errors in query

       console.log('error in query check ');
       next(err);
       return;
     }
     if (!foundUser) {
       console.log('failed to find user');// if there was no username (not found)
       next(null, false, { message: 'Incorrect email'});
       return;
      }

     if (!bcrypt.compareSync(encryptedPassword, foundUser.encryptedPassword)) {

       console.log('error in password');
       next(null, false, { message: 'Incorrect password'});
     }

    next(null, foundUser); //if successfful!
   });
 }));

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
