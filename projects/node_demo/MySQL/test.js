var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, results, fields) {
    if (err) throw error;
    console.log('The solution is: ', results[0].solution);
});