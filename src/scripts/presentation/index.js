'use strict';
var ng = require('ng');

ng.module('presentation', ['ngMessages'])
		.controller('PresentationListController', require('./list/PresentationListController'))
		.controller('PresentationController', require('./PresentationController'));

module.exports = 'presentation';