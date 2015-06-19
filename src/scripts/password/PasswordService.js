'use strict';
/* @ngInject */
function PasswordService($resource, apiServer) {
	return $resource(apiServer + '/password/:type', {type: '@type'}, {'update': {method: 'PUT'}});
}
module.exports = PasswordService;