/* @ngInject */
function AdminCreateCtrl(AdminService) {
    this.admin = {firstName: 'Michał'};

    this.create = function () {
        //console.log(this);
        //console.log(this.admin);
        AdminService.save(this.admin);
    };
}
module.exports = AdminCreateCtrl;