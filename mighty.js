#!/usr/bin/env node

var argv = require('optimist')
	.usage('Usage: ./mighty.js -t [type{:port}]')
	.demand('t')
	.alias('t', 'types')
	.describe('t', 'list of the required cache protocols, e.g -t memcached:11211 -t redis -t rest:8080')
	.argv;
	
var modules = {};
modules.memcached = {'mem' : ''};
modules.redis = {'mem' : ''};
for(i in argv.t){
	console.log(modules[argv.t[i]]);

}