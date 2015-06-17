'use strict';
/* @ngInject */
function MenuController(Security, $state, $window) {
	var vm = this;
	vm.items = [
		//{label: 'My Profile', roles: ['ADMIN'], link: 'profile'},
		{
			label: 'Scan',
			roles: ['ADMIN'],
			link: 'zxing://scan/?ret=http://192.168.0.14:8081/%23/participation/{CODE}&SCAN_FORMATS=QR_CODE',
			redirect: true
		}

		//{label: 'My presentations', roles: ['SPEAKER'], link: 'presentations'},
		//{label: 'Change password', roles: ['ADMIN']}
	];

	vm.logout = function () {
		Security.logout()
				.then(function () {
					$state.go('login');
				})
				.catch(function () {
				});
	};
	vm.click = function (item) {
		if (item.redirect) {
			$window.location.href = item.link;
		} else {
			$state.go(item.link);
		}
	};

}
module.exports = MenuController;