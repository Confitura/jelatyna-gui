'use strict';
/* @ngInject */
function UserService($resource, apiServer) {
	return $resource(apiServer + '/user', null, {'update': {method: 'PUT'}});
}
module.exports = UserService;