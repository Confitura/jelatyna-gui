'use strict';
/* @ngInject */
function Email($resource, apiServer) {
	return $resource(apiServer + '/email')
}
module.exports = Email;