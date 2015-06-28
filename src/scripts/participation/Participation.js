'use strict';
/* @ngInject */
function Participation($resource, apiServer) {
	return $resource(apiServer + '/participation/token/:type/:token', {token: '@token', type: '@type'});
}
module.exports = Participation;