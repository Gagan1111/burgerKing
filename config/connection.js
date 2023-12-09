// Set up MySQL connection.
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: 'database-2.crus4vmhm48u.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'database_1',
  port: '3306'

})
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;
