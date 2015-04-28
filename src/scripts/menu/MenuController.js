'use strict';
/* @ngInject */
function MenuController(Security, $state) {
    this.items = [
        {label: 'My Profile', roles: ['ADMIN']},
        {label: 'My presentations', roles: ['SPEAKER']},
        {label: 'Change password', roles: ['ADMIN']}
    ];

    this.logout = function () {
        Security.logout()
            .then(function () {
                $state.go('login');
            })
            .catch(function () {
            });
    };

}
module.exports = MenuController;