'use strict';
/* @ngInject */
function EmailController($http, apiServer, Email, $mdToast) {
    var vm = this;
    vm.template = null;
    vm.email = {audience: 'REGISTERED'};
    vm.templates = [];
    vm.send = function () {
        vm.email.template = vm.template.code;
        Email.save(vm.email).$promise
            .then(function () {
                $mdToast.showSimple('Emails scheduled to be sent');
            });
    };

    $http.get(apiServer + '/email/templates')
        .then(function (result) {
            vm.templates = result.data;
        });

}
module.exports = EmailController;