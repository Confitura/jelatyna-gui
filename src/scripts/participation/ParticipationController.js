'use strict';
/* @ngInject */
function ParticipationController(Participation, $stateParams, $mdToast) {
	var vm = this;

	Participation.get($stateParams).$promise
			.then(function (participant) {
				vm.participant = participant;
				$mdToast.hide();
			})
			.catch(function (ex) {
				if (ex.status === 404) {
					vm.participant = null;
					toast('Użytkownik nie znaleziony!');
				}
			});

	vm.change = function (status) {
		Participation.save({token: $stateParams.token, type: status}).$promise
				.then(function () {
					vm.participant.arrived = !vm.participant.arrived;
				})
				.catch(function () {
					toast('Błąd podczas rejestracji!');
				});
	};

	function toast(message) {
		$mdToast.show(
				$mdToast.simple()
						.content(message)
						.hideDelay(10000)
		);
	}

}
module.exports = ParticipationController;