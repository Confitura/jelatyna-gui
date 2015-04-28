'use strict';
require('../less/main.less');
var angular = require('ng');

require('angular-animate/angular-animate.min');
require('angular-resource/angular-resource.min');
require('angular-aria/angular-aria.min');
require('angular-messages/angular-messages.min');
require('ui-router/release/angular-ui-router.min');
require('angular-validation-match/dist/angular-input-match.min');

require('angular-material/angular-material.min');
require('angular-material/angular-material.css');

angular.module('jelatyna', [
    'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages',
    'ui.router', 'validation.match',
    require('user'), require('security'), require('menu')])
    .constant('apiServer', 'http://localhost:8080/api')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/login');
        $stateProvider
            //.state('create', {
            //    url: '/admin/create',
            //    template: require('admin/views/create.html')
            //})
            //.state('password', {
            //    url: '/password/:token',
            //    template: require('user/views/reset-password.html')
            //})
            .state('login', {
                url: '/login',
                template: require('security/login/login.html')
            })
            .state('profile', {
                url: '/profile',
                template: require('user/profile/profile.html')
            })
    })
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;

    })
;
