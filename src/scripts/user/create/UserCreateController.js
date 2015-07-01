'use strict';
/* @ngInject */
function UserCreateController(UserService, $state) {
    var vm = this;
    vm.user = {};
    vm.roles = [
        {code: 'ADMIN', name: 'Admin'},
        {code: 'VOLUNTEER', name: "Wolontariusz"}
    ];


    this.create = function () {
        UserService.save(vm.user).$promise
            .then(function () {
                $state.go('user-list');
            });
    };

}
module.exports = UserCreateController;