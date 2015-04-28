'use strict';
var ng = require('ng');
ng.module('menu',['security'])
    .controller('MenuController', require('./MenuController'));

require('ngtemplate?module=menu&relativeTo=menu/!./menu.html');
module.exports = 'menu';