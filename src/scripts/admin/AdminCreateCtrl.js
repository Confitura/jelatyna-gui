'use strict';
/* @ngInject */
function AdminCreateCtrl(AdminService, $stateParams, PasswordService, $http, $window, $rootScope) {
    this.admin = {firstName: 'Roman', lastName: 'Margiel', email: 'michal.margiel@gmail.com'};
    this.password = {};

    this.create = function () {
        AdminService.save(this.admin);
    };




}
module.exports = AdminCreateCtrl;