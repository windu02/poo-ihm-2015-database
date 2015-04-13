var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Role', {
	name: {type: connection.Sequelize.STRING}
});