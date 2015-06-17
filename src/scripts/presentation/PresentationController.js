'use strict';
var _ = require('lodash');
/* @ngInject */
function PresentationController() {
	var vm = this;
	vm.presentation = {
		title: 'abc',
		cospeakers: [
			{name: 'Rob Smith', photo: 'http://placehold.it/150x150'},
			{name: 'Sebastian Smith', photo: 'http://placehold.it/150x150'},
		]

	};

}
module.exports = PresentationController;