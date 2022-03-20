const mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234568',
    database: 'vacCenter'
});

module.exports = connection;