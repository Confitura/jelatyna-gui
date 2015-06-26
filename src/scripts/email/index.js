'use strict';

var ng = require('ng');
require('angular-sanitize/angular-sanitize.min');
module.exports = ng.module('email', ['ngSanitize'])
		.controller('EmailController', require('./EmailController'))
		.factory('Email', require('./Email'))
		.name
;
