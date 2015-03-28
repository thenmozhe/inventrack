var config = {
  detailedErrors: false
, hostname: null
, port: process.env.PORT
, sessions: {
    store: 'memory'
  , key: 'sid'
  , expiry: 14 * 24 * 60 * 60
  }
};

module.exports = config;