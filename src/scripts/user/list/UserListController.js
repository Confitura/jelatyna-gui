'use strict';
/* @ngInject */
function UserListController(UserService, $state) {
    var vm = this;
    vm.users = UserService.query();
    vm.add = function () {
        $state.go('create');
    };
}
module.exports = UserListController;