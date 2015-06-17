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

}
module.exports = ProfileController;