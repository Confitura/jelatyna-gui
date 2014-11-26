var angular = require('ng');

angular.module('abc', [])
    .controller('Ctrl', require('controller'))
    .directive('jlTime', require('time/directive'))
;
