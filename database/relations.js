var User = require('../tables/user.js'),
  Project = require('../tables/project.js'),
  Role = require('../tables/role.js');

exports.init = function() {
  User.schema.hasMany(Role.schema); // a user has different roles

  Project.schema.hasMany(Role.schema); // a project has different roles

  Role.schema.belongsTo(User.schema); // a role belongs to a user
  Role.schema.belongsTo(Project.schema); // a role belongs to a project
};