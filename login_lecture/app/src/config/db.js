const mysql = require("mysql2");

const db = mysql.createConnection({
    host     : '133.186.244.143',
    user     : 'jryang',
    password : "Jr0419!!",
    port     : '3306',
    database : 'smartbackpack',
});

db.connect();

module.exports = db;
