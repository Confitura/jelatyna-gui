'use strict';
describe('Controller should', function () {
    require('ng');
    require('angular-mocks');
    var ctrl = new (require('controller'))();
    var $scope;

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    it("create scope", function () {
        expect($scope).toBeDefined();
    });

    it("return same number if only one provided", function () {

        var result = ctrl.add(2);

        expect(result).toBe(2);
    });

    it("sum 2 numbers", function () {

        var result = ctrl.add(1, 3);

        expect(result).toBe(4);
    });

    it("sum 5 numbers", function () {

        var result = ctrl.add(1, 2, 3, 4, 5);

        expect(result).toBe(15);
    });
});
