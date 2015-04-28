'use strict';
var ng = require('angular');
/* @ngInject */
function Security($http, apiServer, $cookies, $window) {
	var vm = this;
	vm.replaceUser = function (user) {
		$cookies.principal = ng.toJson(user);
	};

	vm.login = function (credentials) {
		var headers = credentials ? {
			'authorization': 'Basic ' + $window.btoa(credentials.email + ':' + credentials.password)
		} : {};
		$http.defaults.useXDomain = true;
		$http.defaults.withCredentials = true;
		return $http.get(apiServer + '/user', {headers: headers})
				.then(function (responce) {
					vm.replaceUser(responce.data.principal);
					$cookies.authenticated = true;
					return responce;
				})
	};

	vm.getUser = function () {
		return ng.fromJson($cookies.principal);
	};

	vm.logout = function () {
		return $http.get(apiServer + '/logout')
				.then(function () {
					$cookies.authenticated = false;
					$cookies.principal = null;
				});
	}

}
module.exports = Security;