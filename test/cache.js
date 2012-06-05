var Hash = require('hashish');
var assert = require('assert');

exports.map = function () {
    var ref = { a : 1, b : 2 };
    var items = Hash(ref).map(function (v) { return v + 1 }).items;
    var hash = Hash.map(ref, function (v) { return v + 1 });
    assert.deepEqual(ref, { a : 1, b : 2 });
    assert.deepEqual(items, { a : 2, b : 3 });
    assert.deepEqual(hash, { a : 2, b : 3 });
};