'use strict';
require('angular-resource/angular-resource');
var ng = require('ng');

ng.module('user', ['ngResource', 'ngMessages'])
    .controller('ProfileController', require('./profile/ProfileController'))
    .controller('ResetPasswordController', require('./reset_password/ResetPasswordController'))
    .controller('UserCreateController', require('./create/UserCreateController'))
    .factory('UserService', require('./UserService'))
    .factory('ResetPasswordService', require('./reset_password/ResetPasswordService'))

;

module.exports = 'user';