const envVar = require('./env.json');

module.exports = function(service) {
  const env = process.env.NODE_ENV || 'development';
  return envVar[env][service];
};
