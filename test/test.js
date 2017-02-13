'use strict';

var expect = require('chai').expect;
var tellMeWhere = require('../index');

describe('tell-me-where', function() {

  it('should return "Tell me where"', function() {
    var result = tellMeWhere();
    expect(result).to.equal('Tell me where');
  });

  it('should not return "Tell me where"', function() {
    var tmw = "Hey tell me where";
    var result = tellMeWhere(tmw);
    expect(result).to.equal(tmw);
  })
})