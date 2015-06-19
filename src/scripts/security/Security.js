'use strict';
var ng = require('angular');
/* @ngInject */
function Security($http, apiServer, $cookies, $window) {
	var vm = this;
	vm.replaceUser = function (user) {
		$cookies.putObject('principal', user);
	};

	vm.login = function (credentials) {
		var headers = credentials ? {
			'authorization': 'Basic ' + $window.btoa(credentials.email + ':' + credentials.password)
		} : {};
		$http.defaults.useXDomain = true;
		$http.defaults.withCredentials = true;

		return $http.get(apiServer + '/user', {headers: headers})
				.then(function (responce) {
					vm.replaceUser(responce.data);
					$cookies.putObject('authenticated', true);
					return responce;
				});
	};

	vm.getUser = function () {
		return $cookies.getObject('principal');
	};

	vm.logout = function () {
		return $http.get(apiServer + '/logout')
				.then(function () {
					$cookies.remove('authenticated');
					$cookies.remove('principal');
				});
	};

}
module.exports = Security;