'use strict';
/* @ngInject */
function ResetPasswordController($stateParams, ResetPasswordService) {
	var vm = this;
	vm.password = {};
	vm.resetPassword = function () {
		vm.password.token = $stateParams.token;
		if (vm.form.$valid) {
			ResetPasswordService.save(vm.password);
		}
	};
}
module.exports = ResetPasswordController;