'use strict';
require("font-awesome-webpack");
require('../less/main.less');
var _ = require('lodash');
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
	require('user'), require('security'), require('menu'), require('presentation'),
	require('participation')])
		.constant('apiServer', 'http://192.168.0.14:8080/api')
		.config(function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.when('', '/login');
			$stateProvider
					.state('create', {
						url: '/admin/create',
						template: require('user/create/create.html')
					})
					.state('password', {
						url: '/password/:token',
						template: require('user/reset_password/reset_password.html')
					})
					.state('login', {
						url: '/login',
						template: require('security/login/login.html')
					})
					.state('profile', {
						url: '/profile',
						template: require('user/profile/profile.html')
					})
					.state('presentations', {
						url: '/presentations',
						template: require('presentation/list/presentation-list.html')
					})
					.state('presentation', {
						url: '/presentation',
						template: require('presentation/presentation.html')
					})
					.state('participation', {
						url: '/participation/:token',
						template: require('participation/participation.html')
					})
		})
		.config(function ($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
			$httpProvider.defaults.withCredentials = true;
			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$httpProvider.interceptors.push(function ($q, $injector) {
				return {
					'responseError': function (rejection) {
						console.log(rejection);
						if (rejection.status === 401) {
							var $cookies = $injector.get('$cookies');

							_.forEach($cookies.getAll(), function (value, key) {
								$cookies.remove(key);
							});
							$injector.get('$state').go('login');
						}
						return $q.reject(rejection);
					}
				};
			});
		})
;
