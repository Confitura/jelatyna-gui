'use strict';
require('angular-cookies/angular-cookies.min');
var ng = require('ng');

ng.module('security', ['ngCookies'])
    .controller('LoginController', require('./login/LoginController'))
    .service('Security', require('./Security'));

module.exports = 'security';