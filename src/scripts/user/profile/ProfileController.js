'use strict';
/* @ngInject */
function ProfileController(Security, UserService) {
	var vm = this;
	vm.user = Security.getUser();

	vm.save = function () {
		UserService.update(vm.user).$promise
				.then(function () {
					Security.replaceUser(vm.user);
				});
	};

	vm.resetPassword = function () {
		vm.password.token = $stateParams.token;
		if (vm.passwordForm.$valid) {
			PasswordService.save(vm.password);
		}
	};
}
module.exports = ProfileController;