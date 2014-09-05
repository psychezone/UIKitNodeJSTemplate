var mysql = require('mysql');

var DBConnection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PW
});

DBConnection.query('CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME, function(err) {
    if (err){ 
        console.log("error creating db " + err);
        throw err;
    }
    DBConnection.query('USE ' + process.env.DB_NAME, function(err) {
        if (err){ 
            console.log("error using db " + err);
            throw err;
        }
        DBConnection.query('CREATE TABLE IF NOT EXISTS users('
            + 'user_id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(user_id),'
            + 'firstname VARCHAR(50) NOT NULL,'
            + 'lastname VARCHAR(50) NOT NULL,'
            + 'email VARCHAR(255) NOT NULL,'
            + 'password VARCHAR(20) NOT NULL,'
            + 'create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
            +  ')', function (err) {
                if (err){ 
                    console.log("error creating users " + err);
                    throw err;
                }
        });
    });
});


exports.DBConnection = DBConnection;