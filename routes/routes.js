const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/1', (req, res) => {
    res.send({ hi: 'there'});
  });

};
