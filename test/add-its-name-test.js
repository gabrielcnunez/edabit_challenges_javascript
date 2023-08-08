var assert = require('chai').assert
var addName = require('../challenges/add-its-name')

describe('Add its Name', function() {

  it('given three args, returns an object with key value pairs', function() {
    assert.deepEqual(addName({}, "Brutus", 300), {Brutus: 300});
    assert.deepEqual(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400});
    assert.deepEqual(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440});
  });
});