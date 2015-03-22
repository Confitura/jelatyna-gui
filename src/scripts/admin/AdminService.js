/* @ngInject */
function AdminSerivce($resource, apiServer) {
    return $resource(apiServer + '/admin', null, {'update': {method: 'PUT'}});
}
module.exports = AdminSerivce;