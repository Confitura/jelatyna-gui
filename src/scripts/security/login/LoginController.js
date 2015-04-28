'use strict';
/* @ngInject */
function LoginController(Security, $state) {
    this.credentials = {email: "john@smith.com", password: "password"};

    this.login = function () {
        Security.login(this.credentials)
            .then(function(){
                $state.go('profile');
            });

    };

    if (Security.getUser()){
        $state.go('profile');
    }

}
module.exports = LoginController;