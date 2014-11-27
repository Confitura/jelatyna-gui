/* @ngInject */
var _ = require('lodash');
function Ctrl($scope) {
    this.add = function(/*numbers*/){
        return _.reduce(_.toArray(arguments), function(sum, num) {
            return sum + num;
        });
    }
}
module.exports = Ctrl;