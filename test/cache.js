var Hash = require('hashish');
var assert = require('assert');
var cache = require('../lib/cache');

exports.map = function () {
	var c = new cache.createCache();
	c.set('a','b')
    assert.deepEqual(c.get('a'), 'b');
};