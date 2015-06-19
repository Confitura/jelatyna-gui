'use strict';
/* @ngInject */
function Person($resource, apiServer) {
	return $resource(apiServer + '/participation/:text', {text: '@text'});
}
module.exports = Person;