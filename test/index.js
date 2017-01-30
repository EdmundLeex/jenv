var assert = require('assert');

describe('jenv', () => {
  it('loads production env if NODE_ENV is "production"', () => {
    process.env.NODE_ENV = 'production';
    let jenv = require('../lib/index')({path: '/test/env.json'});
    assert.equal(jenv('database').userName, 'production_user_name');
    assert.equal(jenv('database').password, 'production_password');
  });

  it('loads development env if NODE_ENV is "development"', () => {
    process.env.NODE_ENV = 'development';
    let jenv = require('../lib/index')({path: '/test/env.json'});
    assert.equal(jenv('database').userName, 'development_user_name');
    assert.equal(jenv('database').password, 'development_password');
  });
});