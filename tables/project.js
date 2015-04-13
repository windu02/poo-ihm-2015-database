var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Project', {
  title: {type: connection.Sequelize.STRING},
  description: {type: connection.Sequelize.STRING},
  year: {type: connection.Sequelize.INTEGER}
});