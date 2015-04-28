'use strict';
require('angular-resource/angular-resource');
var ng = require('ng');

ng.module('user', ['ngResource', 'ngMessages'])
    .controller('ProfileController', require('./profile/ProfileController'))
    .factory('UserService', require('./UserService'));

module.exports = 'user';