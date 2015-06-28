'use strict';
var ng = require('angular');
/* @ngInject */
function Security($http, apiServer, $cookies, $window, $state) {
    var vm = this;
    vm.replaceUser = function (user) {
        $cookies.putObject('principal', user);
    };


    vm.login = function (credentials) {
        var headers = credentials ? {
            'authorization': 'Basic ' + $window.btoa(credentials.email + ':' + credentials.password)
        } : {};
        $http.defaults.useXDomain = true;
        $http.defaults.withCredentials = true;

        return doLogin(headers)
            .then(function (responce) {
                vm.replaceUser(responce.data);
                $cookies.putObject('authenticated', true);
                return responce;
            });
    };

    vm.getUser = function () {
        return $cookies.getObject('principal');
    };

    vm.logout = function () {
        return $http.get(apiServer + '/logout')
            .finally(function () {
                $cookies.remove('authenticated');
                $cookies.remove('principal');
                $state.go('login');
            });
    };

    vm.checkSession = function () {
        if (vm.getUser()) {
            doLogin({});
        }
    };

    function doLogin(headers) {
        return $http.get(apiServer + '/user/login', {headers: headers});
    }


}
module.exports = Security;