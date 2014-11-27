/* @ngInject */
var _ = require('lodash');
function Ctrl() {
    this.add = function (/*numbers*/) {
        return _.reduce(_.toArray(arguments), function (sum, num) {
            return sum + parseInt(num);
        },0);
    };
}
module.exports = Ctrl;