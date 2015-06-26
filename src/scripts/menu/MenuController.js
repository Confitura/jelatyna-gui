'use strict';
var _ = require('lodash');
/* @ngInject */
function MenuController(Security, $state, $window, $mdSidenav, guiServer) {
	var vm = this;
	vm.items = [
		{
			label: 'Szukaj',
			roles: ['ADMIN', 'VOLUNTEER'],
			link: 'participation-search'
		},
		{label: 'Wyślij e-mail', roles: ['ADMIN'], link: 'email'},
		{label: 'Mój profil', roles: ['ADMIN', 'VOLUNTEER'], link: 'profile'},
		{label: 'Nowy Użytkownik', roles: ['ADMIN'], link: 'create'},
		{label: 'Logout', roles: ['ADMIN', 'VOLUNTEER'], link: 'logout'}
	];
	vm.topItems = [
		{
			label: 'search',
			roles: ['ADMIN', 'VOLUNTEER'],
			link: 'participation-search'
		},
		{
			label: 'scanner',
			roles: ['ADMIN', 'VOLUNTEER'],
			link: 'zxing://scan/?ret=' + guiServer + '%23/participation/{CODE}&SCAN_FORMATS=QR_CODE',
			redirect: true
		}
	];

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
		} else if (item.link === 'logout') {
			logout();
		} else {
			$state.go(item.link);
		}
		$mdSidenav('side-menu').close();
	};

	vm.openSideMenu = function () {
		$mdSidenav('side-menu').open();
	};

	function logout() {
		Security.logout();
	}

}
module.exports = MenuController;