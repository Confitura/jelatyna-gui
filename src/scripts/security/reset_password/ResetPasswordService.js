'use strict';
/* @ngInject */
function PasswordService($resource, apiServer) {
    return $resource(apiServer + '/password/', null, {'update': {method: 'PUT'}});
}
module.exports = PasswordService;