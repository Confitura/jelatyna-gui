'use strict';
require('angular-resource/angular-resource');
var ng = require('ng');

module.exports = ng.module('password', ['ngResource', 'ngMessages'])
		.controller('ResetPasswordController', require('./ResetPasswordController'))
		.factory('PasswordService', require('./PasswordService'))
		.name;
