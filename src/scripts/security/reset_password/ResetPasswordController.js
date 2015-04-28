'use strict';
/* @ngInject */
function ResetPasswordController($stateParams, ResetPasswordService) {

    this.resetPassword = function () {
        this.password.token = $stateParams.token;
        if (this.passwordForm.$valid) {
            PasswordService.save(this.password);
        }
    };
}
module.exports = ResetPasswordController;