'use strict';

require('mocha');
var assert = require('assert');
var yarnLinks = require('./');

describe('yarn-global-links', function() {
  it('should get the yarn global links directory', function() {
    assert.equal(typeof yarnLinks(), 'string');
    assert(/yarn/i.test(yarnLinks()));
  });
});
