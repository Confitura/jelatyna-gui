'use strict';
require('angular-resource/angular-resource');
var ng = require('ng');

ng.module('admin', ['ngResource', require('menu')])
    .controller('AdminCreateCtrl', require('./AdminCreateCtrl'))
    .controller('UserCtrl', require('./UserCtrl'))
    .factory('AdminService', require('./AdminService'))
    .factory('PasswordService', require('./PasswordService'));

module.exports = 'admin';