const db = require('database'); // Assume this is your database module
const auth = require('auth'); // Assume this is your authentication module
const settings = require('settings'); // Assume this is your settings module
const token = require('token'); // Assume this is your token module

function getUserData(userId, callback) {
  db.getUser(userId, (err, user) => {
    if (err) {
      return callback(err);
    }
    auth.verifyCredentials(user, (err, verifiedUser) => {
      if (err) {
        return callback(err);
      }
      settings.getUserSettings(verifiedUser.id, (err, userSettings) => {
        if (err) {
          return callback(err);
        }
        token.generateToken(verifiedUser.id, (err, userToken) => {
          if (err) {
            return callback(err);
          }
          callback(null, { user: verifiedUser, settings: userSettings, token: userToken });
        });
      });
    });
  });
}

// Usage
getUserData('12345', (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('User data:', result);
  }
});
