require('angular-resource/angular-resource');
var ng = require('ng');

ng.module('admin', ['ngResource'])
    .controller('AdminCreateCtrl', require('./AdminCreateCtrl'))
    .factory('AdminService', require('./AdminService'));

module.exports = 'admin';