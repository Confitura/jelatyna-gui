'use strict';
/* @ngInject */
function Draw(apiServer, $http) {
    return {
        next: function () {
            return $http.post(apiServer + "/draw/next");
        },
        reset: function () {
            return $http.post(apiServer + "/draw/reset");
        }
    };
}
module.exports = Draw;