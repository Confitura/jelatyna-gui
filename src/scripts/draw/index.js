'use strict';
require('./draw.less');
var ng = require('ng');
module.exports = ng.module('draw', ['ngAnimate'])
		.controller('DrawController', require('./DrawController'))
		.controller('DrawModalController', require('./DrawModalController'))
		.factory('Draw', require('./Draw'))
		.name
;
