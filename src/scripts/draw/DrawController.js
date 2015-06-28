'use strict';
var ng = require('angular');
/* @ngInject */
function DrawController($mdDialog, Draw, $document) {
    var vm = this;

    vm.reset = function () {
        Draw.reset();
    };

    vm.start = function ($event) {
        $mdDialog.show({
            controller: 'DrawModalController as ctrl',
            template: require('./draw-modal-template.html'),
            parent: ng.element($document.body),
            targetEvent: $event
        });
    };
}

module.exports = DrawController;