const path = require('path');
const appRoot = require('app-root-path');

function createJenv() {
  let _envVar;

  function jenv(options) {
    const env = process.env.NODE_ENV || 'development';

    if (typeof options === 'object') {
      _envVar = require(path.join(appRoot.path, options.path));
      return jenv;
    }

    envVar = _envVar || require(path.join(appRoot.path, '/config/env.json'));

    let service = options;

    return envVar[env][service];
  };

  return jenv;
}


module.exports = createJenv();
