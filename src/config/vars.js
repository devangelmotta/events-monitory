const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: "mongodb+srv://acaballero:acaballero@cluster0-k9bkd.mongodb.net/test?retryWrites=true&w=majority",
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
