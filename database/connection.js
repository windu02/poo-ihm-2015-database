var Sequelize = require('sequelize');

var fs = require('fs');
var file = __dirname + '/connection_infos.json';

if(process.env.DATABASE_URL) {
  var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
  exports.sequelize = sequelize = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging: false
  });
} else {
  try {
    var connectionInfos = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.log("Connection configuration file can't be read.");
    return;
  }

  exports.sequelize = new Sequelize(connectionInfos.dbname, connectionInfos.user, connectionInfos.password, {
    dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
    host: connectionInfos.host, // default : localhost
    port: connectionInfos.port // or 5432 (for postgres)
  });
}

exports.Sequelize = Sequelize;