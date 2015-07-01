'use strict';
var ng = require('ng');
module.exports = ng.module('user', ['ngMessages', require('password')])
		.controller('UserListController', require('./list/UserListController'))
		.controller('ProfileController', require('./profile/ProfileController'))
		.controller('UserCreateController', require('./create/UserCreateController'))
		.factory('UserService', require('./UserService'))
		.name;
