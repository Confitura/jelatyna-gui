'use strict';
/* @ngInject */
function DrawModalController(Draw, $mdDialog, $timeout) {
    var vm = this;
    vm.next = function () {
        vm.winner = null;
        $timeout(function () {
            Draw.next().then(function (result) {
                vm.winner = result.data;
            });
        });
    };
    vm.close = function () {
        $mdDialog.cancel();
    };

}
module.exports = DrawModalController;