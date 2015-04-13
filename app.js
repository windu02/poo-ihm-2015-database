var express   = require('express'),
	connection = require('./database/connection.js'),
	http      = require('http'),
	restful   = require('sequelize-restful'),
	relations = require('./database/relations.js'),
	app = express();

relations.init();

var dropDatabase = true;

if(process.argv.length > 2) {
    var param = process.argv[2];
    var keyVal = param.split("=");
    if(keyVal.length > 1) {
        if (keyVal[0] == "drop") {
            if(keyVal[1] == "true") {
                dropDatabase = true;
            } else {
                dropDatabase = false;
            }
        }
    }
}

if(dropDatabase) {
    connection.sequelize.sync({force: true}).success(function () {
        console.log("Base created !");
    });
}

//app.configure(function() {
	app.use(restful(connection.sequelize, { /* options */ }))
//})

var port = process.env.PORT || 3000;

http.createServer(app).listen(port, function(){
	console.log("Express server listening on port " + port)
});