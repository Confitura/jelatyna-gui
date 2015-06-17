'use strict';
module.exports = require('ng').module('participation', [])
		.controller('ParticipationController', require('./ParticipationController'))
		.factory('Participation', require('./Participation')).name;