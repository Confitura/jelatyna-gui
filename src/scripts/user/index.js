'use strict';
require('angular-resource/angular-resource');
var ng = require('ng');

module.exports = ng.module('user', ['ngResource', 'ngMessages', require('password')])
		.controller('ProfileController', require('./profile/ProfileController'))
		.controller('UserCreateController', require('./create/UserCreateController'))
		.factory('UserService', require('./UserService'))
		.name
;
