'use strict';
var _ = require('lodash');
/* @ngInject */
function MenuController(Security, $state, $window) {
	var vm = this;
	vm.items = [
		{label: 'Nowy Użytkownik', roles: ['ADMIN'], link: 'create'},
		{label: 'Mój profil', roles: ['ADMIN', 'VOLUNTEER'], link: 'profile'},
		{
			label: 'Skan',
			roles: ['ADMIN', 'VOLUNTEER'],
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
	vm.isAvailable = function (item) {
		var user = Security.getUser();
		if (user) {
			return _.intersection(item.roles, user.authorities).length > 0;
		} else {
			return false;
		}
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