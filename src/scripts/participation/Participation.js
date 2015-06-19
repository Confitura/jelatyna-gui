'use strict';
/* @ngInject */
function Participation($resource, apiServer) {
	return $resource(apiServer + '/participation/token/:token/:type', {token: '@token', type: '@type'});
}
module.exports = Participation;