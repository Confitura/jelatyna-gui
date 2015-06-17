'use strict';
/* @ngInject */
function UserCreateController(UserService) {
	var vm = this;
	vm.user = {};
	vm.roles = [
		{code: 'ADMIN', name: 'Admin'},
		{code: 'VOLUNTEER', name: "Wolontariusz"}
	];


	this.create = function () {
		UserService.save(vm.user).$promise
				.then(function () {
				});
	};

}
module.exports = UserCreateController;