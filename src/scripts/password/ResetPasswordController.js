'use strict';
/* @ngInject */
function ResetPasswordController($stateParams, PasswordService, $state, $mdToast) {
	var vm = this;
	vm.password = {};
	vm.resetPassword = function () {
		vm.password.token = $stateParams.token;
		if (vm.form.$valid) {
			vm.password.type = 'reset';
			PasswordService.save(vm.password).$promise
					.then(function () {
						$state.go('login');
						$mdToast.showSimple('Your password has been changed');
					});
		}
	};
}
module.exports = ResetPasswordController;