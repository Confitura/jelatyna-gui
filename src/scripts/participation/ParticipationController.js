'use strict';
/* @ngInject */
function ParticipationController(Participation, $stateParams, $mdToast, Person, $state) {
    var vm = this;
    if ($stateParams.token) {
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
    }

    vm.change = function (status) {
        Participation.save({token: $stateParams.token, type: status}).$promise
            .then(function () {
                vm.participant.arrived = !vm.participant.arrived;
                $mdToast.showSimple('Saved!');
            })
            .catch(function () {
                toast('Błąd podczas rejestracji!');
            });
    };
    vm.stamped = function () {
        var type = vm.participant.stamped ? 'unstamp' : 'stamp';
        Participation.save({token: $stateParams.token, type: type}).$promise
            .then(function () {
                vm.participant.stamped = !vm.participant.stamped;
                $mdToast.showSimple('Saved!');
            })
            .catch(function () {
                toast('Błąd podczas rejestracji!');
            });
    };

    vm.search = function (text) {
        return Person.query({text: text});
    };

    vm.selected = function (person) {
        $state.go('participation', {token: person.token});
    };


    vm.searchTextChange = function (text) {
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