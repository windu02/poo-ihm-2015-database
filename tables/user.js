var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('User', {
	name: {type: connection.Sequelize.STRING},
  surname: {type: connection.Sequelize.STRING},
  email: {type: connection.Sequelize.STRING, unique: true},
  website: {type: connection.Sequelize.STRING}
});