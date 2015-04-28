'use strict';
/* @ngInject */
function UserSerivce($resource, apiServer) {
	return $resource(apiServer + '/admin', null, {'update': {method: 'PUT'}});
}
module.exports = UserSerivce;