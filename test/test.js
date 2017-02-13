'use strict';

var expect = require('chai').expect;
var tellMeMore = require('../index');

describe('tell-me-more', function() {

  it('should return "Tell me more"', function() {
    var result = tellMeMore();
    expect(result).to.equal('Tell me more');
  });

  it('should not return "Tell me more"', function() {
    var tmm = "Hey tell me more";
    var result = tellMeMore(tmm);
    expect(result).to.equal(tmm);
  })
})