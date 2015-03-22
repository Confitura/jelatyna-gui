require('../less/main.less');
var angular = require('ng');
require('angular-animate/angular-animate');
require('angular-resource/angular-resource');
require('angular-aria/angular-aria');

require('angular-material/angular-material');
//require('angular-material/angular-material.css');

angular.module('jelatyna', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngResource'])
    .constant('apiServer', 'http://localhost:8080/api')
    .controller('AdminCreateCtrl', require('admin/AdminCreateCtrl'))
    .factory('AdminService', require('admin/AdminService'))
;
