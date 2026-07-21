const passport = require("passport");
const User = require("../models/user");

// passport-local-mongoose automatically createStrategy deta hai
passport.use(User.createStrategy());

module.exports = passport;