'use strict';
var ng = require('angular');
var _ = require('lodash');
/* @ngInject */
function PresentationListController($mdDialog) {
	var vm = this;
	vm.presentations = [
		{
			id: 1,
			status: 'registered',
			title: "ababkas askdmal",
			rating: 1
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		},
		{
			id: 2,
			status: 'accepted',
			title: "ababkas askdmal2",
			rating: 2
		}
	];

	//vm.delete = function (presentation, $event) {
	//	var confirm = $mdDialog.confirm()
	//			.parent(ng.element(document.body))
	//			.title('Would you like to delete this presentation?')
	//			.ok('Yes')
	//			.cancel('No')
	//			.targetEvent($event);
	//	$mdDialog.show(confirm)
	//			.then(function () {
	//				_.remove(vm.presentations, {id: presentation.id});
	//				console.log('success!');
	//			})
	//			.catch(function () {
	//				console.log('rejected!');
	//			});
	//};

}
module.exports = PresentationListController;