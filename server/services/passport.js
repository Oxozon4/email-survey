const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshTocken, profile, done) => {
      console.log(`access token: ${accessToken}`);
      console.log(`refresh token: ${refreshTocken}`);
      console.log(`profile token: ${profile}`);
      console.log(`done token: ${done}`);
    }
  )
);
