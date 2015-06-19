'use strict';
/* @ngInject */
function LoginController(Security, $state, PasswordService, $mdToast) {
	var vm = this;
	vm.credentials = {};

	vm.login = function () {
		Security.login(vm.credentials)
				.then(function () {
					$state.go('profile');
				});

	};
	vm.requestPasswordReset = function () {
		PasswordService
				.save({type: 'request', email: vm.credentials.email}).$promise
				.then(function () {
					$mdToast.showSimple('Email with further instructions have been sent to provided address');
				})
				.catch(function () {
					$mdToast.showSimple('Ups! something went wrong!');
				})
	};

	if (Security.getUser()) {
		$state.go('profile');
	}

}
module.exports = LoginController;