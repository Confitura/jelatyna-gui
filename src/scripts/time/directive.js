require('./template.html');

/* @ngInject */
function TimeDirective() {
    return {
        templateUrl: '/time/template.html'
    };
}
module.exports = TimeDirective;